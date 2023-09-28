export class DomainException extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'Domain Exception'
    // Errorのプロパティを継承するための記述
    Object.setPrototypeOf(this, DomainException.prototype)
  }
}
