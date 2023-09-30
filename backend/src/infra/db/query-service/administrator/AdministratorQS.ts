import { PrismaClient } from '@prisma/client'
import { AdministratorDtoOrNull } from 'src/usecase/AdministratorDto'
import { IAdministratorQS } from 'src/usecase/query-service-interface/IAdministratorQS'
import { InfraException } from 'src/utils/InfraException'
import { Result } from 'src/utils/Result'

export class AdministratorQS implements IAdministratorQS {
  private prismaClient: PrismaClient
  public constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient
  }

  public async get(
    administratorId: string,
  ): Promise<Result<AdministratorDtoOrNull>> {
    console.log({ administratorId })
    return this.prismaClient.administrator
      .findUnique({
        where: {
          id: administratorId,
        },
      })
      .then((administratorData) => {
        const administratorDto: AdministratorDtoOrNull = administratorData
        return Result.ok<AdministratorDtoOrNull>(administratorDto)
      })
      .catch((error) => {
        let errorMessage = ''
        if (error instanceof Error) {
          errorMessage = error.message
        }
        return Result.fail<AdministratorDtoOrNull>(
          new InfraException(
            `Get administrator query failed : ${errorMessage}`,
          ),
        )
      })

    // if (!administratorData) {
    //   return Result.fail<AdministratorDto>(
    //     new InfraException('Get administrator query failed'),
    //   )
    // }

    // return Result.ok<AdministratorDto>(administratorData)
  }
}
