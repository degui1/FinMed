import { FinancingSimulation, Prisma } from '@generated'

export interface IFinancingSimulationsRepository {
  create: (
    data: Prisma.FinancingSimulationUncheckedCreateInput,
  ) => Promise<FinancingSimulation>
  findById: (id: string) => Promise<FinancingSimulation | null>
  findManyByStudentId: (studentId: string) => Promise<FinancingSimulation[]>
  delete: (
    financingSimulation: FinancingSimulation,
  ) => Promise<FinancingSimulation>
  update: (
    financingSimulation: FinancingSimulation,
  ) => Promise<FinancingSimulation>
}
