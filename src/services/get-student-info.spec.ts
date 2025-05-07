import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryStudentsRepository } from '@/repositories/in-memory/in-memory-students.repository'

import { GetStudentInfoService } from './get-student-info.service'
import { ResourceNotFoundError } from './erros/resource-not-found.error'

let studentsRepository: InMemoryStudentsRepository
let getStudentInfoService: GetStudentInfoService

describe('Get student info service', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository()
    getStudentInfoService = new GetStudentInfoService(studentsRepository)
  })

  it('should be able to get student info', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { student } = await getStudentInfoService.execute({
      studentId: createdStudent.id,
    })

    expect(student.id).toEqual(createdStudent.id)
  })

  it('should not be able to get the password', async () => {
    const createdStudent = await studentsRepository.create({
      email: 'johndoe@example.com',
      name: 'John',
      surname: 'Doe',
      password: '123456',
    })

    const { student } = await getStudentInfoService.execute({
      studentId: createdStudent.id,
    })

    expect(student).not.toHaveProperty('password')
  })

  it('should not be able to get a student that does not exist', async () => {
    await expect(() =>
      getStudentInfoService.execute({
        studentId: 'student-does-not-exist',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
