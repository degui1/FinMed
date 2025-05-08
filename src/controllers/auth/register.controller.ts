import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { RegisterStudentService } from '@/services/register-student.service'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { StudentAlreadyExistsError } from '@/services/erros/student-already-exists.error'

const registerBodySchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, name, password, surname } = registerBodySchema.parse(
    request.body,
  )

  try {
    const studentsRepository = new PrismaStudentsRepository()
    const registerStudentService = new RegisterStudentService(
      studentsRepository,
    )

    await registerStudentService.execute({ email, name, password, surname })

    return reply.status(201).send()
  } catch (error) {
    if (error instanceof StudentAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }
}
