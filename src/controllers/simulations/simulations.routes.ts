import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/middlewares/verify-jwt.middleware'

import { createSimulationController } from './create-simulation.controller'
import { updateSimulationController } from './update-simulation.controller'
import { deleteSimulationController } from './delete-simulation.controller'

export async function simulationsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('', createSimulationController)
  app.put('', updateSimulationController)
  app.delete('', deleteSimulationController)
}
