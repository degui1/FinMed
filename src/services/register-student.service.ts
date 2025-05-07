import { hash } from 'bcryptjs'
import { Student } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'

import { StudentAlreadyExistsError } from './erros/student-already-exists.error'

interface RegisterStudentServiceRequest {
  name: string
  surname: string
  email: string
  password: string
}

interface RegisterStudentServiceResponse {
  student: Student
}

export class RegisterStudentService {
  constructor(private readonly studentsRepository: IStudentsRepository) {}

  async execute({
    email,
    name,
    surname,
    password,
  }: RegisterStudentServiceRequest): Promise<RegisterStudentServiceResponse> {
    const studentWithSameEmail =
      await this.studentsRepository.findByEmail(email)

    if (studentWithSameEmail) throw new StudentAlreadyExistsError()

    const password_hash = await hash(password, 6)

    const student = await this.studentsRepository.create({
      name,
      surname,
      email,
      password: password_hash,
    })

    return {
      student,
    }
  }
}
