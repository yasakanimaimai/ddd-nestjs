import { DomainException } from 'src/utils/DomainException'
import { Result } from 'src/utils/Result'
import { isEmail } from 'class-validator'
import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class MailAddress extends PrimitiveValueObject<string> {
  public static create(value: string): Result<MailAddress> {
    const validateResult = this.validate(value)
    if (!validateResult.isSuccess) {
      return Result.fail<MailAddress>(
        new DomainException(validateResult.error?.message),
      )
    }

    return Result.ok<MailAddress>(new MailAddress(value))
  }

  public static validate(value: string): Result<boolean> {
    if (!value) {
      return Result.fail<boolean>(
        new DomainException('MailAddress value is not exist'),
      )
    }

    if (!isEmail(value)) {
      return Result.fail<boolean>(
        new DomainException('MailAddress format is invalid'),
      )
    }

    return Result.ok<boolean>(true)
  }
}
