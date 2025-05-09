import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateStudent } from '@/utils/create-authenticate-student'

describe('Delete simulation controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to delete a financing simulation', async () => {
    const { token } = await createAndAuthenticateStudent(app)

    const financingSimulationResponse = await request(app.server)
      .post('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        installments: 6,
        totalAmountCents: 100000,
      })

    const { id } = financingSimulationResponse.body

    const response = await request(app.server)
      .delete('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        financingSimulationId: id,
      })

    expect(response.statusCode).toEqual(204)
  })
})
