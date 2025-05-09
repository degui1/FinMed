import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateStudent } from '@/utils/create-authenticate-student'

describe('Update student info controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update student info', async () => {
    const { token, student } = await createAndAuthenticateStudent(app)

    const response = await request(app.server)
      .put('/api/me')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'John Updated',
        surname: 'Doe Updated',
        password: '45678901',
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('student')
    expect(response.body.student).toHaveProperty('id', student.id)
    expect(response.body.student).toHaveProperty('name', 'John Updated')
    expect(response.body.student).toHaveProperty('surname', 'Doe Updated')
    expect(response.body).not.toHaveProperty('password')
  })
})
