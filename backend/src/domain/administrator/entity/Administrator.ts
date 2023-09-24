import { Entity } from 'src/utils/Entity'
import { AdministratorId } from '../valueObject/AdministratorId'
import { LastName } from '../valueObject/LastName'
import { FirstName } from '../valueObject/FirstName'
import { MailAddress } from '../valueObject/MailAddress'

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
    return new Administrator(
      AdministratorId.create(id),
      FirstName.create(firstName),
      LastName.create(lastName),
      MailAddress.create(mailAddress),
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
