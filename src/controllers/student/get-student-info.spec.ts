import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateStudent } from '@/utils/create-authenticate-student'

describe('Get student info controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get student info', async () => {
    const { token, student } = await createAndAuthenticateStudent(app)

    const response = await request(app.server)
      .get('/api/me')
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('student')
    expect(response.body.student).toHaveProperty('id', student.id)
  })
})
