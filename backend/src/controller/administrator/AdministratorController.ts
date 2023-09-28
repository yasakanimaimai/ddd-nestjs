import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { CreateAdministratorRequest } from './request/CreateAdministratorRequest'
import { AdministratorRepository } from 'src/infra/db/repository/administrator/AdministratorRepository'
import { CreateAdministratorUseCase } from 'src/usecase/administrator/CreateAdministratorUseCase'
import { ApiResponse } from '@nestjs/swagger'
import { GetAdministratorResponse } from './response/GetAdministratorResponse'
import { AdministratorQS } from 'src/infra/db/query-service/administrator/AdministratorQS'
import { GetAdministratorUseCase } from 'src/usecase/administrator/GetAdministratorUseCase'

@Controller({
  path: '/administrator',
})
export class AdministratorController {
  @Get('get')
  @ApiResponse({ status: 200, type: GetAdministratorResponse })
  async getAdministrator(
    @Query('administratorId') administratorId: string,
  ): Promise<GetAdministratorResponse> {
    const prisma = new PrismaClient()
    const qs = new AdministratorQS(prisma)
    const usecase = new GetAdministratorUseCase(qs)
    const result = await usecase.do(administratorId)
    if (!result.isSuccess) {
      throw new Error(result.error?.message)
    }
    const response = new GetAdministratorResponse(result.getValue())
    return response
  }

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
