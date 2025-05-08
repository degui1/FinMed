import { FinancingSimulation } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'
import { IFinancingSimulationsRepository } from '@/repositories/financing-simulations-repository.interface'

import { ResourceNotFoundError } from './erros/resource-not-found.error'
import { OperationNotPermittedError } from './erros/operation-not-permitted.error'

interface DeleteSimulationServiceRequest {
  studentId: string
  financingSimulationId: string
}

interface DeleteSimulationServiceResponse {
  deletedSimulation: FinancingSimulation
}

export class DeleteSimulationService {
  constructor(
    private readonly studentsRepository: IStudentsRepository,
    private readonly financingSimulationsRepository: IFinancingSimulationsRepository,
  ) {}

  async execute({
    studentId,
    financingSimulationId,
  }: DeleteSimulationServiceRequest): Promise<DeleteSimulationServiceResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) throw new ResourceNotFoundError()

    const financingSimulation =
      await this.financingSimulationsRepository.findById(financingSimulationId)

    if (!financingSimulation) throw new ResourceNotFoundError()

    if (financingSimulation.student_id !== student.id)
      throw new OperationNotPermittedError()

    await this.financingSimulationsRepository.delete(financingSimulation)

    return {
      deletedSimulation: financingSimulation,
    }
  }
}
