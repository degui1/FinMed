import { prisma } from '@/lib/prisma'
import { Student } from '@generated'
import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

interface CreateAndAuthenticateStudent {
  token: string
  student: Student
}

export async function createAndAuthenticateStudent(
  app: FastifyInstance,
): Promise<CreateAndAuthenticateStudent> {
  const student = await prisma.student.create({
    data: {
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      password: await hash('123456', 6),
    },
  })

  const authResponse = await request(app.server).post('/api/login').send({
    email: 'johndoe@example.com',
    password: '123456',
  })

  const { token } = authResponse.body

  return {
    token,
    student,
  }
}
