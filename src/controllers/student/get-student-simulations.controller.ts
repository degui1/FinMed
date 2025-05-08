import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { GetStudentSimulationsService } from '@/services/get-student-simulations.service'
import { ResourceNotFoundError } from '@/services/erros/resource-not-found.error'
import { PrismaFinancingSimulationsRepository } from '@/repositories/prisma/prisma-financing-simulations.repository'

export async function getStudentSimulationsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const studentsRepository = new PrismaStudentsRepository()
    const financingSimulationsRepository =
      new PrismaFinancingSimulationsRepository()

    const getStudentSimulationsService = new GetStudentSimulationsService(
      studentsRepository,
      financingSimulationsRepository,
    )

    const { financingSimulations } = await getStudentSimulationsService.execute(
      { studentId: request.user.sub },
    )

    return reply.status(201).send({ financingSimulations })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
