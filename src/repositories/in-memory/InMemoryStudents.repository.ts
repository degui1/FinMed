import { randomUUID } from 'node:crypto'
import { Prisma, Student } from '@generated'

import { IStudentsRepository } from '../students-repository.interface'

export class InMemoryStudentsRepository implements IStudentsRepository {
  private students: Student[] = []

  async create(data: Prisma.StudentCreateInput) {
    const student = {
      id: randomUUID(),
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    }

    this.students.push(student)

    return student
  }

  async findByEmail(email: string) {
    const student = this.students.find((student) => student.email === email)

    if (!student) return null

    return student
  }
}
