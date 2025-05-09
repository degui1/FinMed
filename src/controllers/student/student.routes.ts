import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/middlewares/verify-jwt.middleware'

import { updateStudentInfoController } from './update-student-info.controller'
import { getStudentSimulationsController } from './get-student-simulations.controller'
import { getStudentInfoController } from './get-student-info.controller'

export async function studentRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.put(
    '',
    {
      schema: {
        tags: ['Student'],
        summary: 'Atualizar informações do estudante',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            surname: { type: 'string' },
            password: { type: 'string' },
          },
          required: [],
        },
      },
    },
    updateStudentInfoController,
  )

  app.get(
    '',
    {
      schema: {
        tags: ['Student'],
        summary: 'Obter informações do estudante logado',
        security: [{ bearerAuth: [] }],
      },
    },
    getStudentInfoController,
  )

  app.get(
    '/simulations',
    {
      schema: {
        tags: ['Student'],
        summary: 'Listar simulações do estudante',
      },
    },
    getStudentSimulationsController,
  )
}
