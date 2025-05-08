import { FinancingSimulation } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'
import { IFinancingSimulationsRepository } from '@/repositories/financing-simulations-repository.interface'

import { ResourceNotFoundError } from './erros/resource-not-found.error'

interface GetStudentSimulationsServiceRequest {
  studentId: string
}

interface GetStudentSimulationsServiceResponse {
  financingSimulations: FinancingSimulation[]
}

export class GetStudentSimulationsService {
  constructor(
    private readonly studentsRepository: IStudentsRepository,
    private readonly financingSimulationsRepository: IFinancingSimulationsRepository,
  ) {}

  async execute({
    studentId,
  }: GetStudentSimulationsServiceRequest): Promise<GetStudentSimulationsServiceResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) throw new ResourceNotFoundError()

    const financingSimulations =
      await this.financingSimulationsRepository.findManyByStudentId(studentId)

    return {
      financingSimulations,
    }
  }
}
