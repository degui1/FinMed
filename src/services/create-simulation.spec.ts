import { beforeEach, describe, expect, it } from 'vitest'
import { MAX_INSTALLMENTS } from '@/constants'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'
import { InMemoryFinancingSimulationsRepository } from '@/repositories/in-memory/in-memory-financing-simulations.repository'

import { CreateSimulationService } from './create-simulation.service'
import { InvalidNumberOfInstallmentsError } from './erros/invalid-number-of-installments.error'
import { ResourceNotFoundError } from './erros/resource-not-found.error'
import { InvalidMonthlyInstallmentAmountError } from './erros/invalid-monthly-installment-amount.error'

let studentsRepository: InMemoryStudentsRepository
let financingSimulationsRepository: InMemoryFinancingSimulationsRepository
let registerStudentService: CreateSimulationService

describe('Create financing simulation service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    financingSimulationsRepository =
      new InMemoryFinancingSimulationsRepository()
    registerStudentService = new CreateSimulationService(
      studentsRepository,
      financingSimulationsRepository,
    )
  })

  it('should be able to create a simulation', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { financingSimulation } = await registerStudentService.execute({
      studentId: createdStudent.id,
      installments: MAX_INSTALLMENTS,
      totalAmountCents: 1000000,
    })

    expect(financingSimulation.id).toEqual(expect.any(String))
    expect(financingSimulation.installments).toBe(MAX_INSTALLMENTS)
    expect(financingSimulation.student_id).toBe(createdStudent.id)
  })

  it('should not be able to create a simulation with invalid installments', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await expect(() =>
      registerStudentService.execute({
        studentId: createdStudent.id,
        installments: MAX_INSTALLMENTS * 100,
        totalAmountCents: 1000000,
      }),
    ).rejects.toBeInstanceOf(InvalidNumberOfInstallmentsError)

    await expect(() =>
      registerStudentService.execute({
        studentId: createdStudent.id,
        installments: MAX_INSTALLMENTS * -100,
        totalAmountCents: 1000000,
      }),
    ).rejects.toBeInstanceOf(InvalidNumberOfInstallmentsError)
  })

  it('should not be able to create a simulation with invalid student', async () => {
    await expect(() =>
      registerStudentService.execute({
        studentId: 'invalid-student',
        installments: MAX_INSTALLMENTS,
        totalAmountCents: 1000000,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to create a simulation with invalid total amount', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await expect(() =>
      registerStudentService.execute({
        studentId: createdStudent.id,
        installments: MAX_INSTALLMENTS,
        totalAmountCents: -1000000,
      }),
    ).rejects.toBeInstanceOf(InvalidMonthlyInstallmentAmountError)
  })
})
