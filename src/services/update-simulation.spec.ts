import { beforeEach, describe, expect, it } from 'vitest'
import { INTEREST_RATE, MAX_INSTALLMENTS } from '@/constants'
import { Prisma } from '@generated'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'
import { InMemoryFinancingSimulationsRepository } from '@/repositories/in-memory/in-memory-financing-simulations.repository'

import { ResourceNotFoundError } from './erros/resource-not-found.error'
import { OperationNotPermittedError } from './erros/operation-not-permitted.error'
import { UpdateSimulationService } from './update-simulation.service'
import { calculateMonthlyPayment } from '@/utils/calculate-monthly-payment'
import { InvalidNumberOfInstallmentsError } from './erros/invalid-number-of-installments.error'
import { InvalidMonthlyInstallmentAmountError } from './erros/invalid-monthly-installment-amount.error'

let studentsRepository: InMemoryStudentsRepository
let financingSimulationsRepository: InMemoryFinancingSimulationsRepository
let updateSimulationService: UpdateSimulationService

describe('Update simulation service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    financingSimulationsRepository =
      new InMemoryFinancingSimulationsRepository()
    updateSimulationService = new UpdateSimulationService(
      studentsRepository,
      financingSimulationsRepository,
    )
  })

  it('should be able to update a simulation', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const createdSimulation = await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    const { updatedSimulation } = await updateSimulationService.execute({
      studentId: createdStudent.id,
      financingSimulationId: createdSimulation.id,
      installments: 5,
      totalAmountCents: 100,
    })

    const monthlyPaymentCents = calculateMonthlyPayment({
      installments: 5,
      interestRate: INTEREST_RATE,
      totalAmountCents: 100,
    })

    expect(updatedSimulation.id).toEqual(createdSimulation.id)
    expect(updatedSimulation.installments).toEqual(5)
    expect(updatedSimulation.total_amount_cents).toEqual(100)
    expect(updatedSimulation.monthly_payment_cents).toEqual(monthlyPaymentCents)
  })

  it('should not be able to update a simulation that does not exist', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await expect(() =>
      updateSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: 'invalid-simulation',
        installments: MAX_INSTALLMENTS,
        totalAmountCents: 100,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to update a simulation with invalid student', async () => {
    const createdSimulation = await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: 'student-id',
    })

    await expect(() =>
      updateSimulationService.execute({
        studentId: 'invalid-student',
        financingSimulationId: createdSimulation.id,
        installments: MAX_INSTALLMENTS,
        totalAmountCents: 100,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to delete other student simulation', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const createdSimulation = await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: 'other-student',
    })

    await expect(() =>
      updateSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: createdSimulation.id,
        installments: MAX_INSTALLMENTS,
        totalAmountCents: 100,
      }),
    ).rejects.toBeInstanceOf(OperationNotPermittedError)
  })

  it('should not be able to update a simulation with invalid installments', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const createdSimulation = await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    await expect(() =>
      updateSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: createdSimulation.id,
        installments: MAX_INSTALLMENTS * 100,
        totalAmountCents: 1000000,
      }),
    ).rejects.toBeInstanceOf(InvalidNumberOfInstallmentsError)

    await expect(() =>
      updateSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: createdSimulation.id,
        installments: MAX_INSTALLMENTS * -100,
        totalAmountCents: 1000000,
      }),
    ).rejects.toBeInstanceOf(InvalidNumberOfInstallmentsError)
  })

  it('should not be able to update a simulation with invalid total amount', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const createdSimulation = await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    await expect(() =>
      updateSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: createdSimulation.id,
        installments: MAX_INSTALLMENTS,
        totalAmountCents: -1000000,
      }),
    ).rejects.toBeInstanceOf(InvalidMonthlyInstallmentAmountError)
  })
})
