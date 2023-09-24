export class DomainException extends Error {
  constructor(message?: string) {
    super(message)
    // Errorのプロパティを継承するための記述
    Object.setPrototypeOf(this, DomainException.prototype)
  }
}
