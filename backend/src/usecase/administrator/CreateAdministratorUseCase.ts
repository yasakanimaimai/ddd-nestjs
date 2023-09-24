import { createRandomIdString } from 'src/utils/random'
import { IAdministratorRepository } from '../../domain/administrator/repository/IAdministratorRepository'
import { Administrator } from 'src/domain/administrator/entity/Administrator'

export class CreateAdministratorUseCase {
  public constructor(private administratorRepo: IAdministratorRepository) {}

  public async do(params: {
    firstName: string
    lastName: string
    mailAddress: string
  }): Promise<Administrator> {
    const { firstName, lastName, mailAddress } = params

    const administratorEntity = Administrator.create({
      id: createRandomIdString(),
      firstName,
      lastName,
      mailAddress,
    })

    return await this.administratorRepo.save(administratorEntity)
  }
}
