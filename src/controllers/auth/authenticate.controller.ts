import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaStudentsRepository } from '@/repositories/prisma/prisma-students.repository'
import { AuthenticateService } from '@/services/authenticate-student.service'
import { InvalidCredentialsError } from '@/services/erros/invalid-credentials.error'

export async function authenticateController(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const { email, password } = authenticateBodySchema.parse(req.body)

  try {
    const studentsRepository = new PrismaStudentsRepository()
    const authenticateService = new AuthenticateService(studentsRepository)

    const { student } = await authenticateService.execute({ email, password })

    const token = await reply.jwtSign({
      sub: student.id,
    })

    return reply.status(200).send({
      token,
    })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
