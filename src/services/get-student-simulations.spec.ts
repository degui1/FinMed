import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'
import { InMemoryFinancingSimulationsRepository } from '@/repositories/in-memory/in-memory-financing-simulations.repository'

import { GetStudentSimulationsService } from './get-student-simulations.service'
import { MAX_INSTALLMENTS } from '@/constants'
import { Prisma } from '@generated'
import { ResourceNotFoundError } from './erros/resource-not-found.error'

let studentsRepository: InMemoryStudentsRepository
let financingSimulationsRepository: InMemoryFinancingSimulationsRepository
let getStudentSimulationsService: GetStudentSimulationsService

describe('Get student financing simulations service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    financingSimulationsRepository =
      new InMemoryFinancingSimulationsRepository()
    getStudentSimulationsService = new GetStudentSimulationsService(
      studentsRepository,
      financingSimulationsRepository,
    )
  })

  it('should be able to list all user simulations', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    const { financingSimulations } = await getStudentSimulationsService.execute(
      {
        studentId: createdStudent.id,
      },
    )

    expect(financingSimulations).toHaveLength(3)
  })

  it('should not be able to list simulations of other user', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: createdStudent.id,
    })

    await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: 'random-student',
    })

    const { financingSimulations } = await getStudentSimulationsService.execute(
      {
        studentId: createdStudent.id,
      },
    )

    expect(financingSimulations).toHaveLength(1)
  })

  it('should not be able to list simulations of an invalid user', async () => {
    await expect(() =>
      getStudentSimulationsService.execute({
        studentId: 'invalid-user',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
