import { beforeEach, describe, expect, it } from 'vitest'
import { hash } from 'bcryptjs'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'

import { InvalidCredentialsError } from './erros/invalid-credentials.error'
import { AuthenticateService } from './authenticate-student.service'

let studentsRepository: InMemoryStudentsRepository
let authenticateService: AuthenticateService

describe('Authenticate service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    authenticateService = new AuthenticateService(studentsRepository)
  })

  it('should be able to authenticate', async () => {
    await studentsRepository.create({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      password: await hash('123456', 6),
    })

    const { student } = await authenticateService.execute({
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(student.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await studentsRepository.create({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      password: await hash('123456', 6),
    })

    await expect(() =>
      authenticateService.execute({
        email: 'johndoe@invalidExample.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong email', async () => {
    await studentsRepository.create({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      password: await hash('123456', 6),
    })

    await expect(() =>
      authenticateService.execute({
        email: 'johndoe@example.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
