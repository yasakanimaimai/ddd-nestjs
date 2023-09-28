export class InfraException extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'Infra Exception'
    Object.setPrototypeOf(this, InfraException.prototype)
  }
}
