import { PrismaClient } from '@prisma/client'
import {
  AdministratorDTO,
  IAdministratorQS,
} from 'src/usecase/query-service-interface/IAdministratorQS'
import { InfraException } from 'src/utils/InfraException'
import { Result } from 'src/utils/Result'

export class AdministratorQS implements IAdministratorQS {
  private prismaClient: PrismaClient
  public constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient
  }

  public async get(
    administratorId: string,
  ): Promise<Result<AdministratorDTO | null>> {
    console.log({ administratorId })
    return this.prismaClient.administrator
      .findUnique({
        where: {
          id: administratorId,
        },
      })
      .then((administratorData) => {
        return Result.ok<AdministratorDTO | null>(administratorData)
      })
      .catch((error) => {
        let errorMessage = ''
        if (error instanceof Error) {
          errorMessage = error.message
        }
        return Result.fail<AdministratorDTO | null>(
          new InfraException(
            `Get administrator query failed : ${errorMessage}`,
          ),
        )
      })

    // if (!administratorData) {
    //   return Result.fail<AdministratorDTO>(
    //     new InfraException('Get administrator query failed'),
    //   )
    // }

    // return Result.ok<AdministratorDTO>(administratorData)
  }
}
