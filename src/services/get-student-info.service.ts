import { Student } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'
import { ResourceNotFoundError } from './erros/resource-not-found.error'

interface GetStudentInfoServiceRequest {
  studentId: string
}

interface GetStudentInfoServiceResponse {
  student: Omit<Student, 'password'>
}

export class GetStudentInfoService {
  constructor(private readonly studentsRepository: IStudentsRepository) {}

  async execute({
    studentId,
  }: GetStudentInfoServiceRequest): Promise<GetStudentInfoServiceResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) {
      throw new ResourceNotFoundError()
    }

    return {
      student: {
        id: student.id,
        name: student.name,
        surname: student.surname,
        email: student.email,
      },
    }
  }
}
