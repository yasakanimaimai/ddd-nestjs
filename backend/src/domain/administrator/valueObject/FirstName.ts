import { DomainException } from 'src/utils/DomainException'
import { Result } from 'src/utils/Result'
import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class FirstName extends PrimitiveValueObject<string> {
  public static create(value: string): Result<FirstName> {
    const validateResult = this.validate(value)
    if (!validateResult.isSuccess) {
      return Result.fail<FirstName>(
        new DomainException(validateResult.error?.message),
      )
    }

    return Result.ok<FirstName>(new FirstName(value))
  }

  public static validate(value: string): Result<boolean> {
    if (!value) {
      return Result.fail<boolean>(
        new DomainException('FirstName value is not exist'),
      )
    }

    if (value.length > 100) {
      return Result.fail<boolean>(
        new DomainException('FirstName length is invalid'),
      )
    }

    return Result.ok<boolean>(true)
  }
}
