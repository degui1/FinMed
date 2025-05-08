import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteSimulationService } from '@/services/delete-simulation.service'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { PrismaFinancingSimulationsRepository } from '@/repositories/prisma/prisma-financing-simulations.repository'
import { OperationNotPermittedError } from '@/services/erros/operation-not-permitted.error'
import { ResourceNotFoundError } from '@/services/erros/resource-not-found.error'

const createSimulationBodySchema = z.object({
  financingSimulationId: z.string().uuid(),
})

export async function deleteSimulationController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { financingSimulationId } = createSimulationBodySchema.parse(
    request.body,
  )

  try {
    const studentsRepository = new PrismaStudentsRepository()
    const financingSimulationsRepository =
      new PrismaFinancingSimulationsRepository()
    const deleteSimulationService = new DeleteSimulationService(
      studentsRepository,
      financingSimulationsRepository,
    )

    await deleteSimulationService.execute({
      studentId: request.user.sub,
      financingSimulationId,
    })

    return reply.status(201).send()
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
    }

    if (error instanceof OperationNotPermittedError) {
      return reply.status(405).send({ message: error.message })
    }

    throw error
  }
}
