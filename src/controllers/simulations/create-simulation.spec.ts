import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateStudent } from '@/utils/create-authenticate-student'

describe('Create simulation controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a financing simulation', async () => {
    const { token } = await createAndAuthenticateStudent(app)

    const response = await request(app.server)
      .post('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        installments: 6,
        totalAmountCents: 100000,
      })

    expect(response.statusCode).toEqual(201)
  })
})
