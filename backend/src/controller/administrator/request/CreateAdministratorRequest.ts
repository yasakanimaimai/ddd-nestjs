// @see https://docs.nestjs.com/openapi/types-and-parameters

import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateAdministratorRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly mailAddress!: string
}
