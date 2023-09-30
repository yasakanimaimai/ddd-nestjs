import { ApiProperty } from '@nestjs/swagger'
import AdministratorResponse from '../AdministratorResponse'
import { AdministratorDto } from 'src/usecase/AdministratorDto'

export class GetAdministratorResponse {
  @ApiProperty({ type: () => AdministratorResponse, required: false })
  administrator: AdministratorResponse | null

  public constructor(params: AdministratorDto | null) {
    if (params === null) {
      this.administrator = null
      return
    }

    this.administrator = new AdministratorResponse({
      ...params,
    })
  }
}
