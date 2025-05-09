import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateStudent } from '@/utils/create-authenticate-student'

describe('Get student simulations controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get student simulations', async () => {
    const { token } = await createAndAuthenticateStudent(app)

    await request(app.server)
      .post('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        installments: 6,
        totalAmountCents: 100000,
      })

    await request(app.server)
      .post('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        installments: 2,
        totalAmountCents: 50000,
      })

    const response = await request(app.server)
      .get('/api/me/simulations')
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('financingSimulations')
    expect(response.body.financingSimulations).toHaveLength(2)
  })
})
