import { isUUID } from 'class-validator'
import { DomainException } from 'src/utils/DomainException'
import { Result } from 'src/utils/Result'
import { PrimitiveValueObject } from 'src/utils/ValueObject'

export class AdministratorId extends PrimitiveValueObject<string> {
  public static create(value: string): Result<AdministratorId> {
    const validateResult = this.validate(value)
    if (!validateResult.isSuccess) {
      return Result.fail<AdministratorId>(
        new DomainException(validateResult.error?.message),
      )
    }

    return Result.ok<AdministratorId>(new AdministratorId(value))
  }

  public static validate(value: string): Result<boolean> {
    if (!value) {
      return Result.fail<boolean>(
        new DomainException('AdministratorId value is not exist'),
      )
    }

    if (!isUUID(value, '4')) {
      return Result.fail<boolean>(
        new DomainException('AdministratorId format is invalid'),
      )
    }

    return Result.ok<boolean>(true)
  }
}
