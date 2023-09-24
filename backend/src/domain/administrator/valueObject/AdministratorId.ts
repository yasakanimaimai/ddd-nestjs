import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class AdministratorId extends PrimitiveValueObject<string> {
  static create(value: string): AdministratorId {
    return new AdministratorId(value)
  }
}
