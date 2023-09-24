import { DomainException } from 'src/utils/DomainException'
import { Result } from 'src/utils/Result'
import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class LastName extends PrimitiveValueObject<string> {
  public static create(value: string): Result<LastName> {
    const validateResult = this.validate(value)
    if (!validateResult.isSuccess) {
      return Result.fail<LastName>(
        new DomainException(validateResult.error?.message),
      )
    }

    return Result.ok<LastName>(new LastName(value))
  }

  public static validate(value: string): Result<boolean> {
    if (!value) {
      return Result.fail<boolean>(
        new DomainException('LastName value is not exist'),
      )
    }

    if (value.length > 100) {
      return Result.fail<boolean>(
        new DomainException('LastName length is invalid'),
      )
    }

    return Result.ok<boolean>(true)
  }
}
