import { Result } from 'src/utils/Result'

export class AdministratorDTO {
  public readonly id: string
  public readonly firstName: string
  public readonly lastName: string
  public readonly mailAddress: string

  public constructor(props: {
    id: string
    firstName: string
    lastName: string
    mailAddress: string
  }) {
    const { id, firstName, lastName, mailAddress } = props
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.mailAddress = mailAddress
  }
}

export interface IAdministratorQS {
  get(administratorId: string): Promise<Result<AdministratorDTO | null>>
}
