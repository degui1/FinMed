import { Prisma, FinancingSimulation } from '@generated'
import { IFinancingSimulationsRepository } from '../financing-simulations-repository.interface'
import { prisma } from '@/lib/prisma'

export class PrismaFinancingSimulationsRepository
  implements IFinancingSimulationsRepository
{
  async create(data: Prisma.FinancingSimulationUncheckedCreateInput) {
    const financingSimulation = await prisma.financingSimulation.create({
      data: {
        installments: data.installments,
        monthly_interest_rate: data.monthly_interest_rate,
        monthly_payment_cents: data.monthly_payment_cents,
        total_amount_cents: data.total_amount_cents,
        student_id: data.student_id,
      },
    })

    return financingSimulation
  }

  async findById(id: string) {
    const financingSimulation = await prisma.financingSimulation.findUnique({
      where: { id },
    })

    return financingSimulation
  }

  async findManyByStudentId(studentId: string) {
    const financingSimulations = await prisma.financingSimulation.findMany({
      where: { student_id: studentId },
    })

    return financingSimulations
  }

  async delete(financingSimulation: FinancingSimulation) {
    const deletedSimulation = await prisma.financingSimulation.delete({
      where: { id: financingSimulation.id },
    })

    return deletedSimulation
  }

  async update(financingSimulation: FinancingSimulation) {
    const updatedSimulation = await prisma.financingSimulation.update({
      data: { ...financingSimulation },
      where: { id: financingSimulation.id },
    })

    return updatedSimulation
  }
}
