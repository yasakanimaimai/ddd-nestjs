import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class MailAddress extends PrimitiveValueObject<string> {
  static create(value: string): MailAddress {
    return new MailAddress(value)
  }
}
