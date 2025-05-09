import fastify from 'fastify'
import { ZodError } from 'zod'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'

import { env } from './env'
import { studentRoutes } from './controllers/student/student.routes'
import { simulationsRoutes } from './controllers/simulations/simulations.routes'
import { authRoutes } from './controllers/auth/auth.routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: {
    private: Buffer.from(env.JWT_PRIVATE_KEY, 'base64'),
    public: Buffer.from(env.JWT_PUBLIC_KEY, 'base64'),
  },
  sign: {
    algorithm: 'RS256',
    expiresIn: '5m',
  },
})

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'API - FINMED',
      description: 'Documentação das rotas da API do FINMED',
      version: '1.0.0',
    },
    host: 'localhost:3333',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    security: [{ bearerAuth: [] }],
  },
})

app.register(fastifySwaggerUI, {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
})

app.register(authRoutes, { prefix: '/api' })
app.register(studentRoutes, { prefix: '/api/me' })
app.register(simulationsRoutes, { prefix: '/api/simulations' })

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV != 'production') {
    console.error(error)
  }

  return reply.status(500).send({
    message: 'Internal server error.',
  })
})
