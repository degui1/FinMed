import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateSimulationService } from '@/services/create-simulation.service'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { PrismaFinancingSimulationsRepository } from '@/repositories/prisma/prisma-financing-simulations.repository'
import { InvalidNumberOfInstallmentsError } from '@/services/erros/invalid-number-of-installments.error'
import { InvalidMonthlyInstallmentAmountError } from '@/services/erros/invalid-monthly-installment-amount.error'
import { ResourceNotFoundError } from '@/services/erros/resource-not-found.error'

const createSimulationBodySchema = z.object({
  installments: z.number().min(1),
  totalAmountCents: z.number().min(1),
})

export async function createSimulationController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { installments, totalAmountCents } = createSimulationBodySchema.parse(
    request.body,
  )

  try {
    const studentsRepository = new PrismaStudentsRepository()
    const financingSimulationsRepository =
      new PrismaFinancingSimulationsRepository()
    const createSimulationService = new CreateSimulationService(
      studentsRepository,
      financingSimulationsRepository,
    )

    const { financingSimulation } = await createSimulationService.execute({
      studentId: request.user.sub,
      installments,
      totalAmountCents,
    })

    return reply.status(200).send({
      id: financingSimulation.id,
      monthlyPaymentCents: financingSimulation.monthly_payment_cents,
    })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
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
