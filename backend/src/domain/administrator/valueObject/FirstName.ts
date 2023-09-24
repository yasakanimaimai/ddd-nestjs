import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class FirstName extends PrimitiveValueObject<string> {
  static create(value: string): FirstName {
    return new FirstName(value)
  }
}
