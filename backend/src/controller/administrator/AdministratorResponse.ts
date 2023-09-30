import { ApiProperty } from '@nestjs/swagger'

class AdministratorResponse {
  @ApiProperty()
  id: string

  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  mailAddress: string

  public constructor(params: {
    id: string
    firstName: string
    lastName: string
    mailAddress: string
  }) {
    this.id = params.id
    this.firstName = params.firstName
    this.lastName = params.lastName
    this.mailAddress = params.mailAddress
  }
}

export default AdministratorResponse
