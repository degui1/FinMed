import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateStudent } from '@/utils/create-authenticate-student'
import { calculateMonthlyPayment } from '@/utils/calculate-monthly-payment'
import { INTEREST_RATE } from '@/constants'

describe('Update simulation controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update a financing simulation', async () => {
    const { token } = await createAndAuthenticateStudent(app)

    const financingSimulationResponse = await request(app.server)
      .post('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        installments: 2,
        totalAmountCents: 5000,
      })

    const { id } = financingSimulationResponse.body

    const response = await request(app.server)
      .put('/api/simulations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        financingSimulationId: id,
        installments: 6,
        totalAmountCents: 10000,
      })

    const expectedMonthlyPaymentInCents = calculateMonthlyPayment({
      installments: 6,
      totalAmountCents: 10000,
      interestRate: INTEREST_RATE,
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body.updatedSimulation).toHaveProperty(
      'monthly_payment_cents',
      Math.floor(expectedMonthlyPaymentInCents),
    )
  })
})
