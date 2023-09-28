import { ApiProperty } from '@nestjs/swagger'
import { AdministratorDTO } from 'src/usecase/query-service-interface/IAdministratorQS'

export class GetAdministratorResponse {
  @ApiProperty({ type: () => AdministratorData, required: false })
  administratorData: AdministratorData | null

  public constructor(params: AdministratorDTO | null) {
    if (params === null) {
      this.administratorData = null
      return
    }

    this.administratorData = new AdministratorData({
      ...params,
    })
  }
}

class AdministratorData {
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
