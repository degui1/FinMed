import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/middlewares/verify-jwt.middleware'

import { createSimulationController } from './create-simulation.controller'
import { updateSimulationController } from './update-simulation.controller'
import { deleteSimulationController } from './delete-simulation.controller'

export async function simulationsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post(
    '',
    {
      schema: {
        tags: ['Simulations'],
        summary: 'Criar simulação',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: ['installments', 'totalAmountCents'],
          properties: {
            installments: { type: 'integer' },
            totalAmountCents: { type: 'integer' },
          },
        },
      },
    },
    createSimulationController,
  )
  app.put(
    '',
    {
      schema: {
        tags: ['Simulations'],
        summary: 'Atualizar simulação',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: [
            'financingSimulationId',
            'installments',
            'totalAmountCents',
          ],
          properties: {
            financingSimulationId: { type: 'string', format: 'uuid' },
            installments: { type: 'integer' },
            totalAmountCents: { type: 'integer' },
          },
        },
      },
    },
    updateSimulationController,
  )
  app.delete(
    '',
    {
      schema: {
        tags: ['Simulations'],
        summary: 'Excluir simulação',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: ['financingSimulationId'],
          properties: {
            financingSimulationId: { type: 'string', format: 'uuid' },
          },
        },
      },
    },
    deleteSimulationController,
  )
}
