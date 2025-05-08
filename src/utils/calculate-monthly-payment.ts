interface CalculateMonthlyPayment {
  totalAmountCents: number
  interestRate: number
  installments: number
}

export function calculateMonthlyPayment({
  installments,
  interestRate,
  totalAmountCents,
}: CalculateMonthlyPayment) {
  const monthlyPaymentCents =
    totalAmountCents *
    (interestRate / (1 - Math.pow(1 + interestRate, -installments)))

  return monthlyPaymentCents
}
