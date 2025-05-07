import { Student, Prisma } from '@generated'

export interface IStudentsRepository {
  create: (data: Prisma.StudentCreateInput) => Promise<Student>
  findByEmail: (email: string) => Promise<Student | null>
}
