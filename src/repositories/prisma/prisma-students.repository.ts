import { prisma } from '@/lib/prisma'
import { Prisma, Student } from '@generated'

import { IStudentsRepository } from '../students-repository.interface'

export class PrismaStudentsRepository implements IStudentsRepository {
  async create(data: Prisma.StudentCreateInput) {
    const student = await prisma.student.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        surname: data.surname,
      },
    })

    return student
  }

  async findByEmail(email: string) {
    const student = await prisma.student.findUnique({ where: { email } })

    return student
  }

  async findById(id: string) {
    const student = await prisma.student.findUnique({ where: { id } })

    return student
  }
  async update(data: Student) {
    const student = await prisma.student.update({
      data: { ...data },
      where: { id: data.id },
    })

    return student
  }
}
