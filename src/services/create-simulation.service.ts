import { MAX_INSTALLMENTS, INTEREST_RATE } from '@/constants'
import { FinancingSimulation } from '@generated'
import { IStudentsRepository } from '@/repositories/students-repository.interface'
import { IFinancingSimulationsRepository } from '@/repositories/financing-simulations-repository.interface'
import { calculateMonthlyPayment } from '@/utils/calculate-monthly-payment'

import { ResourceNotFoundError } from './erros/resource-not-found.error'
import { InvalidNumberOfInstallmentsError } from './erros/invalid-number-of-installments.error'
import { InvalidMonthlyInstallmentAmountError } from './erros/invalid-monthly-installment-amount.error'

interface CreateSimulationServiceRequest {
  studentId: string
  totalAmountCents: number
  installments: number
}

interface CreateSimulationServiceResponse {
  financingSimulation: FinancingSimulation
}

export class CreateSimulationService {
  constructor(
    private readonly studentsRepository: IStudentsRepository,
    private readonly financingSimulationsRepository: IFinancingSimulationsRepository,
  ) {}

  async execute({
    studentId,
    installments,
    totalAmountCents,
  }: CreateSimulationServiceRequest): Promise<CreateSimulationServiceResponse> {
    const student = await this.studentsRepository.findById(studentId)

    if (!student) throw new ResourceNotFoundError()

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

    const financingSimulation =
      await this.financingSimulationsRepository.create({
        student_id: studentId,
        installments,
        monthly_interest_rate: INTEREST_RATE,
        monthly_payment_cents: monthlyPaymentCents,
        total_amount_cents: totalAmountCents,
      })

    return {
      financingSimulation,
    }
  }
}
