import { compare } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'

import { RegisterStudentService } from './register-student.service'
import { StudentAlreadyExistsError } from './erros/student-already-exists.error'

let studentsRepository: InMemoryStudentsRepository
let registerStudentService: RegisterStudentService

describe('Register student service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    registerStudentService = new RegisterStudentService(studentsRepository)
  })

  it('should be able to register a student', async () => {
    const { student } = await registerStudentService.execute({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    expect(student.id).toEqual(expect.any(String))
    expect(student.email).toEqual('johndoe@example.com')
  })

  it('should not be able to register an student that already exists', async () => {
    await registerStudentService.execute({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    await expect(() =>
      registerStudentService.execute({
        email: 'johndoe@example.com',
        name: 'John',
        surname: 'Doe',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(StudentAlreadyExistsError)
  })

  it(`should hash student's password`, async () => {
    const { student } = await registerStudentService.execute({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: 'student123456',
    })

    const isStudentPasswordHashed = await compare(
      'student123456',
      student.password,
    )

    expect(isStudentPasswordHashed).toBe(true)
  })
})
