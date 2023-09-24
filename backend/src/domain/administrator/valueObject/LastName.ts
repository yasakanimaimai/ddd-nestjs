import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class LastName extends PrimitiveValueObject<string> {
  static create(value: string): LastName {
    return new LastName(value)
  }
}
