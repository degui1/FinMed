import { FastifyInstance } from 'fastify'
import { registerController } from './register.controller'
import { authenticateController } from './authenticate.controller'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', registerController)
  app.post('/login', authenticateController)
}
