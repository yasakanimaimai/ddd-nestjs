export class AppException extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, AppException.prototype)
  }
}
