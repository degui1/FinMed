export class OperationNotPermittedError extends Error {
  constructor() {
    super('Operation not permitted')
  }
}
