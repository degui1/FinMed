import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'

import { UpdateStudentInfoService } from './update-student-info.service'
import { compare } from 'bcryptjs'
import { ResourceNotFoundError } from './erros/resource-not-found.error'

let studentsRepository: InMemoryStudentsRepository
let updateStudentInfoService: UpdateStudentInfoService

describe('Update student info service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    updateStudentInfoService = new UpdateStudentInfoService(studentsRepository)
  })

  it('should be able to update student name', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { student } = await updateStudentInfoService.execute(
      createdStudent.id,
      {
        name: 'John updated',
      },
    )

    expect(student).toMatchObject({
      ...createdStudent,
      name: 'John updated',
    })
  })

  it('should be able to update student surname', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { student } = await updateStudentInfoService.execute(
      createdStudent.id,
      {
        surname: 'Doe updated',
      },
    )

    expect(student).toMatchObject({
      ...createdStudent,
      surname: 'Doe updated',
    })
  })

  it('should be able to update student password', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { student } = await updateStudentInfoService.execute(
      createdStudent.id,
      {
        password: 'passwordUpdated',
      },
    )

    const isStudentPasswordHashedCorrectly = await compare(
      'passwordUpdated',
      student.password,
    )

    expect(isStudentPasswordHashedCorrectly).toBe(true)
  })

  it('should be able to update multiple student info', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { student } = await updateStudentInfoService.execute(
      createdStudent.id,
      {
        name: 'John Updated',
        surname: 'Doe Updated',
        password: 'passwordUpdated',
      },
    )

    const isStudentPasswordHashedCorrectly = await compare(
      'passwordUpdated',
      student.password,
    )

    expect(student.name).toBe('John Updated')
    expect(student.surname).toBe('Doe Updated')
    expect(isStudentPasswordHashedCorrectly).toBe(true)
  })

  it('should not be able to update an student that does not exit', async () => {
    await expect(() =>
      updateStudentInfoService.execute('student-does-not-exist', {
        password: 'passwordUpdated',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
