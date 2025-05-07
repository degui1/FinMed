import { Student, Prisma } from '@generated'

export interface IStudentsRepository {
  create: (data: Prisma.StudentCreateInput) => Promise<Student>
  findByEmail: (email: string) => Promise<Student | null>
  findById: (id: string) => Promise<Student | null>
  update: (data: Student) => Promise<Student>
}
