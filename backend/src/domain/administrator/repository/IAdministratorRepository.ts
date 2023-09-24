import { Administrator } from 'src/domain/administrator/entity/Administrator'

export interface IAdministratorRepository {
  save(administrator: Administrator): Promise<Administrator>
}
