import { IAdministratorQS } from '../query-service-interface/IAdministratorQS'

export class GetAdministratorUseCase {
  public constructor(private readonly administratorQS: IAdministratorQS) {}
  public async do(administratorId: string) {
    return this.administratorQS.get(administratorId)
  }
}
