import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/middlewares/verify-jwt.middleware'

import { updateStudentInfoController } from './update-student-info.controller'
import { getStudentSimulationsController } from './get-student-simulations.controller'
import { getStudentInfoController } from './get-student-info.controller'

export async function studentRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.put('', updateStudentInfoController)
  app.get('', getStudentInfoController)

  app.get('/simulations', getStudentSimulationsController)
}
