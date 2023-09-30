import { Result } from 'src/utils/Result'
import { AdministratorDto } from '../AdministratorDto'

export interface IAdministratorQS {
  get(administratorId: string): Promise<Result<AdministratorDto | null>>
}
