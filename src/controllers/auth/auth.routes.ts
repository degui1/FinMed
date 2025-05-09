import { FastifyInstance } from 'fastify'
import { registerController } from './register.controller'
import { authenticateController } from './authenticate.controller'

export async function authRoutes(app: FastifyInstance) {
  app.post(
    '/register',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Registrar novo estudante',
        body: {
          type: 'object',
          required: ['name', 'surname', 'email', 'password'],
          properties: {
            name: { type: 'string' },
            surname: { type: 'string' },
            email: { type: 'string', format: 'email' },
            password: { type: 'string', minLength: 6 },
          },
        },
      },
    },
    registerController,
  )
  app.post(
    '/login',
    {
      schema: {
        tags: ['Auth'],
        summary: 'Autenticar estudante',
        body: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string' },
          },
        },
      },
    },
    authenticateController,
  )
}
