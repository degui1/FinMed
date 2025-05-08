import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { GetStudentInfoService } from '@/services/get-student-info.service'
import { ResourceNotFoundError } from '@/services/erros/resource-not-found.error'

export async function getStudentInfoController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const studentsRepository = new PrismaStudentsRepository()
    const getStudentInfoService = new GetStudentInfoService(studentsRepository)

    const { student } = await getStudentInfoService.execute({
      studentId: request.user.sub,
    })

    return reply.status(200).send({ student })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
