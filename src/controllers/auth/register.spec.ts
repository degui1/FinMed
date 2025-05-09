import request from 'supertest'
import { afterAll, beforeAll, it, describe, expect } from 'vitest'
import { app } from '@/app'

describe('Register controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register a user', async () => {
    const response = await request(app.server).post('/api/register').send({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(201)
  })
})
