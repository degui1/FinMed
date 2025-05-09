import request from 'supertest'
import { afterAll, beforeAll, it, describe, expect } from 'vitest'
import { app } from '@/app'

describe('Authenticate controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate a student', async () => {
    await request(app.server).post('/api/register').send({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    const response = await request(app.server).post('/api/login').send({
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('token')
  })
})
