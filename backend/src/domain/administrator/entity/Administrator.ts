import { Entity } from 'src/utils/Entity'
import { AdministratorId } from '../valueObject/AdministratorId'
import { LastName } from '../valueObject/LastName'
import { FirstName } from '../valueObject/FirstName'
import { MailAddress } from '../valueObject/MailAddress'
import { AppException } from 'src/utils/AppException'

interface AdministratorArgs {
  id: string
  firstName: string
  lastName: string
  mailAddress: string
}

export class Administrator implements Entity {
  private constructor(
    private id: AdministratorId,
    private firstName: FirstName,
    private lastName: LastName,
    private mailAddress: MailAddress,
  ) {}

  public static create(props: AdministratorArgs): Administrator {
    const { id, firstName, lastName, mailAddress } = props

    const administratorIdResult = AdministratorId.create(id)
    if (!administratorIdResult.isSuccess) {
      throw new AppException(administratorIdResult.error?.message)
    }

    const firstNameResult = FirstName.create(firstName)
    if (!firstNameResult.isSuccess) {
      throw new AppException(firstNameResult.error?.message)
    }

    const lastNameResult = LastName.create(lastName)
    if (!lastNameResult.isSuccess) {
      throw new AppException(lastNameResult.error?.message)
    }

    const mailAddressResult = MailAddress.create(mailAddress)
    if (!mailAddressResult.isSuccess) {
      throw new AppException(mailAddressResult.error?.message)
    }

    return new Administrator(
      administratorIdResult.getValue(),
      firstNameResult.getValue(),
      lastNameResult.getValue(),
      mailAddressResult.getValue(),
    )
  }

  equals(entity?: Administrator | undefined): boolean {
    if (!entity) {
      return false
    }
    return entity.id === this.id
  }

  getAllProperties() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      mailAddress: this.mailAddress,
    }
  }
}
