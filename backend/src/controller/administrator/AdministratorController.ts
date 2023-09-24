import { Body, Controller, Post } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { CreateAdministratorRequest } from './request/CreateAdministratorRequest'
import { AdministratorRepository } from 'src/infra/db/repository/administrator/AdministratorRepository'
import { CreateAdministratorUseCase } from 'src/usecase/administrator/CreateAdministratorUseCase'

@Controller({
  path: '/administrator',
})
export class AdministratorController {
  @Post('/create')
  async createAdministrator(
    @Body() createAdministratorDto: CreateAdministratorRequest,
  ): Promise<string> {
    const prisma = new PrismaClient()
    const repo = new AdministratorRepository(prisma)
    const usecase = new CreateAdministratorUseCase(repo)
    const result = await usecase.do({
      firstName: createAdministratorDto.firstName,
      lastName: createAdministratorDto.lastName,
      mailAddress: createAdministratorDto.mailAddress,
    })
    return result ? 'success' : 'failed'
  }
}
