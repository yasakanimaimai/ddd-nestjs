import { PrismaClient } from '@prisma/client'
import { IAdministratorRepository } from 'src/domain/administrator/repository/IAdministratorRepository'
import { Administrator } from 'src/domain/administrator/entity/Administrator'

export class AdministratorRepository implements IAdministratorRepository {
  private prismaClient: PrismaClient
  public constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient
  }

  async save(administrator: Administrator): Promise<Administrator> {
    const { id, firstName, lastName, mailAddress } =
      administrator.getAllProperties()
    const savedAdministratorDataDatamodel =
      await this.prismaClient.administrator.create({
        data: {
          id: id.value,
          firstName: firstName.value,
          lastName: lastName.value,
          mailAddress: mailAddress.value,
        },
      })
    const savedAdministratorEntity = Administrator.create({
      ...savedAdministratorDataDatamodel,
    })
    return savedAdministratorEntity
  }
}
