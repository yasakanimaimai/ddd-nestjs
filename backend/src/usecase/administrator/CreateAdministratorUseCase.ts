import { createRandomIdString } from 'src/utils/random'
import { IAdministratorRepository } from '../../domain/administrator/repository/IAdministratorRepository'
import { Administrator } from 'src/domain/administrator/entity/Administrator'
import convertToDto from './utils/convertToDto'
import { AdministratorDto } from './AdministratorDto'

export class CreateAdministratorUseCase {
  public constructor(private administratorRepo: IAdministratorRepository) {}

  public async do(params: {
    firstName: string
    lastName: string
    mailAddress: string
  }): Promise<AdministratorDto> {
    const { firstName, lastName, mailAddress } = params

    const administratorEntity = Administrator.create({
      id: createRandomIdString(),
      firstName,
      lastName,
      mailAddress,
    })

    const savedEntity = await this.administratorRepo.save(administratorEntity)
    return convertToDto(savedEntity)
  }
}
