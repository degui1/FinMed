import { FinancingSimulation, Prisma } from '@generated'

export interface IFinancingSimulationsRepository {
  create: (
    data: Prisma.FinancingSimulationUncheckedCreateInput,
  ) => Promise<FinancingSimulation>
  findById: (id: string) => Promise<FinancingSimulation | null>
}
