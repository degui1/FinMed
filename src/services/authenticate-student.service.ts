import { compare } from 'bcryptjs'
import { Student } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'
import { InvalidCredentialsError } from './erros/invalid-credentials.error'

interface AuthenticateServiceRequest {
  email: string
  password: string
}

interface AuthenticateServiceResponse {
  student: Student
}

export class AuthenticateService {
  constructor(private studentsRepository: IStudentsRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateServiceRequest): Promise<AuthenticateServiceResponse> {
    const student = await this.studentsRepository.findByEmail(email)

    if (!student) {
      throw new InvalidCredentialsError()
    }

    const isPasswordHashValid = await compare(password, student.password)

    if (!isPasswordHashValid) {
      throw new InvalidCredentialsError()
    }

    return {
      student,
    }
  }
}
