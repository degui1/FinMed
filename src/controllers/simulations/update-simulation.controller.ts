import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateSimulationService } from '@/services/update-simulation.service'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { PrismaFinancingSimulationsRepository } from '@/repositories/prisma/prisma-financing-simulations.repository'
import { OperationNotPermittedError } from '@/services/erros/operation-not-permitted.error'
import { ResourceNotFoundError } from '@/services/erros/resource-not-found.error'
import { InvalidNumberOfInstallmentsError } from '@/services/erros/invalid-number-of-installments.error'
import { InvalidMonthlyInstallmentAmountError } from '@/services/erros/invalid-monthly-installment-amount.error'

const updateSimulationBodySchema = z.object({
  financingSimulationId: z.string().uuid(),
  installments: z.number().min(1),
  totalAmountCents: z.number().min(1),
})

export async function updateSimulationController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { financingSimulationId, installments, totalAmountCents } =
    updateSimulationBodySchema.parse(request.body)

  try {
    const studentsRepository = new PrismaStudentsRepository()
    const financingSimulationsRepository =
      new PrismaFinancingSimulationsRepository()
    const updateSimulationService = new UpdateSimulationService(
      studentsRepository,
      financingSimulationsRepository,
    )

    const { updatedSimulation } = await updateSimulationService.execute({
      studentId: request.user.sub,
      financingSimulationId,
      installments,
      totalAmountCents,
    })

    return reply.status(200).send({ updatedSimulation })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
    }

    if (error instanceof OperationNotPermittedError) {
      return reply.status(405).send({ message: error.message })
    }

    if (error instanceof InvalidNumberOfInstallmentsError) {
      return reply.status(400).send({ message: error.message })
    }

    if (error instanceof InvalidMonthlyInstallmentAmountError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
