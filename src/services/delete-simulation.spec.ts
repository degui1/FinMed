import { beforeEach, describe, expect, it } from 'vitest'
import { MAX_INSTALLMENTS } from '@/constants'
import { Prisma } from '@generated'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'
import { InMemoryFinancingSimulationsRepository } from '@/repositories/in-memory/in-memory-financing-simulations.repository'

import { DeleteSimulationService } from './delete-simulation.service'
import { ResourceNotFoundError } from './erros/resource-not-found.error'
import { OperationNotPermittedError } from './erros/operation-not-permitted.error'

let studentsRepository: InMemoryStudentsRepository
let financingSimulationsRepository: InMemoryFinancingSimulationsRepository
let deleteSimulationService: DeleteSimulationService

describe('Delete simulation service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    financingSimulationsRepository =
      new InMemoryFinancingSimulationsRepository()
    deleteSimulationService = new DeleteSimulationService(
      studentsRepository,
      financingSimulationsRepository,
    )
  })

  it('should be able to delete a simulation', async () => {
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

    const { deletedSimulation } = await deleteSimulationService.execute({
      studentId: createdStudent.id,
      financingSimulationId: createdSimulation.id,
    })

    expect(deletedSimulation.id).toEqual(createdSimulation.id)
    expect(
      await financingSimulationsRepository.findById(deletedSimulation.id),
    ).toEqual(null)
  })

  it('should not be able to delete a simulation that does not exist', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await expect(() =>
      deleteSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: 'invalid-simulation',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to delete a simulation with invalid student', async () => {
    const createdSimulation = await financingSimulationsRepository.create({
      installments: MAX_INSTALLMENTS,
      monthly_interest_rate: Prisma.Decimal('0.05'),
      monthly_payment_cents: 100000,
      total_amount_cents: 310381209321,
      student_id: 'student-id',
    })

    await expect(() =>
      deleteSimulationService.execute({
        studentId: 'invalid-student',
        financingSimulationId: createdSimulation.id,
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
      deleteSimulationService.execute({
        studentId: createdStudent.id,
        financingSimulationId: createdSimulation.id,
      }),
    ).rejects.toBeInstanceOf(OperationNotPermittedError)
  })
})
