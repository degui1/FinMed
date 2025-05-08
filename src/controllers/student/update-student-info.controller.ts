import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { UpdateStudentInfoService } from '@/services/update-student-info.service'
import { ResourceNotFoundError } from '@/services/erros/resource-not-found.error'

const updateStudentInfoBodySchema = z.object({
  name: z.string().optional(),
  surname: z.string().optional(),
  password: z.string().min(6).optional(),
})

export async function updateStudentInfoController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { name, password, surname } = updateStudentInfoBodySchema.parse(
    request.body,
  )

  try {
    const studentsRepository = new PrismaStudentsRepository()
    const updateStudentInfoService = new UpdateStudentInfoService(
      studentsRepository,
    )

    await updateStudentInfoService.execute(request.user.sub, {
      name,
      password,
      surname,
    })

    return reply.status(204).send()
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
