import { randomUUID } from 'node:crypto'
import { FinancingSimulation, Prisma } from '@generated'

import { IFinancingSimulationsRepository } from '../financing-simulations-repository.interface'

export class InMemoryFinancingSimulationsRepository
  implements IFinancingSimulationsRepository
{
  private financingSimulations: FinancingSimulation[] = []

  async create(data: Prisma.FinancingSimulationUncheckedCreateInput) {
    const financingSimulation = {
      id: randomUUID(),
      installments: data.installments,
      monthly_interest_rate: Prisma.Decimal(String(data.monthly_interest_rate)),
      monthly_payment_cents: data.monthly_payment_cents,
      total_amount_cents: data.total_amount_cents,
      student_id: data.student_id,
    }

    this.financingSimulations.push(financingSimulation)

    return financingSimulation
  }

  async findById(id: string) {
    const simulation = this.financingSimulations.find(
      (simulation) => simulation.id === id,
    )

    if (!simulation) return null

    return simulation
  }

  async findManyByStudentId(studentId: string) {
    const simulations = this.financingSimulations.filter(
      (simulation) => simulation.student_id === studentId,
    )

    return simulations
  }
}
