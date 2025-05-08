import fastify from 'fastify'
import { ZodError } from 'zod'
import fastifyJwt from '@fastify/jwt'

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
