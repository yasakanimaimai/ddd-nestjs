import { ApiProperty } from '@nestjs/swagger'
import { AdministratorDTO } from 'src/usecase/query-service-interface/IAdministratorQS'
import AdministratorResponse from '../AdministratorResponse'

export class GetAdministratorResponse {
  @ApiProperty({ type: () => AdministratorResponse, required: false })
  administrator: AdministratorResponse | null

  public constructor(params: AdministratorDTO | null) {
    if (params === null) {
      this.administrator = null
      return
    }

    this.administrator = new AdministratorResponse({
      ...params,
    })
  }
}
