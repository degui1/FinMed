export class InvalidMonthlyInstallmentAmountError extends Error {
  constructor() {
    super('Invalid monthly installment amount')
  }
}
