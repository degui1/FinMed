import { INTEREST_RATE, MAX_INSTALLMENTS } from '@/constants'
import { FinancingSimulation, Prisma } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'
import { IFinancingSimulationsRepository } from '@/repositories/financing-simulations-repository.interface'
import { calculateMonthlyPayment } from '@/utils/calculate-monthly-payment'

import { ResourceNotFoundError } from './erros/resource-not-found.error'
import { OperationNotPermittedError } from './erros/operation-not-permitted.error'
import { InvalidNumberOfInstallmentsError } from './erros/invalid-number-of-installments.error'
import { InvalidMonthlyInstallmentAmountError } from './erros/invalid-monthly-installment-amount.error'

interface UpdateSimulationServiceRequest {
  studentId: string
  financingSimulationId: string
  totalAmountCents: number
  installments: number
}

interface UpdateSimulationServiceResponse {
  updatedSimulation: FinancingSimulation
}

export class UpdateSimulationService {
  constructor(
    private readonly studentsRepository: IStudentsRepository,
    private readonly financingSimulationsRepository: IFinancingSimulationsRepository,
  ) {}

  async execute({
    studentId,
    financingSimulationId,
    installments,
    totalAmountCents,
  }: UpdateSimulationServiceRequest): Promise<UpdateSimulationServiceResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) throw new ResourceNotFoundError()

    const financingSimulation =
      await this.financingSimulationsRepository.findById(financingSimulationId)

    if (!financingSimulation) throw new ResourceNotFoundError()

    if (financingSimulation.student_id !== student.id)
      throw new OperationNotPermittedError()

    if (installments <= 0 || installments > MAX_INSTALLMENTS) {
      throw new InvalidNumberOfInstallmentsError()
    }

    const monthlyPaymentCents = calculateMonthlyPayment({
      installments,
      totalAmountCents,
      interestRate: INTEREST_RATE,
    })

    if (isNaN(monthlyPaymentCents) || monthlyPaymentCents <= 0) {
      throw new InvalidMonthlyInstallmentAmountError()
    }

    const updatedSimulation = await this.financingSimulationsRepository.update({
      ...financingSimulation,
      installments,
      monthly_interest_rate: Prisma.Decimal(INTEREST_RATE),
      monthly_payment_cents: monthlyPaymentCents,
      total_amount_cents: totalAmountCents,
    })

    return {
      updatedSimulation,
    }
  }
}
