import { hash } from 'bcryptjs'
import { Student } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'

import { ResourceNotFoundError } from './erros/resource-not-found.error'

interface UpdateStudentInfoServiceRequest {
  name?: string
  surname?: string
  password?: string
}

interface UpdateStudentInfoServiceResponse {
  student: Student
}

export class UpdateStudentInfoService {
  constructor(private readonly studentsRepository: IStudentsRepository) {}

  async execute(
    studentId: string,
    data: UpdateStudentInfoServiceRequest,
  ): Promise<UpdateStudentInfoServiceResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) {
      throw new ResourceNotFoundError()
    }

    if (data.password) {
      const password_hashed = await hash(data.password, 6)
      data.password = password_hashed
    }

    Object.assign(student, data)

    const updatedStudent = await this.studentsRepository.update(student)

    return {
      student: updatedStudent,
    }
  }
}
