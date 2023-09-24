import { Module } from '@nestjs/common'
import { AdministratorController } from './controller/administrator/AdministratorController'

// memo: DIコンテナとしては使わないため、controllerの追加だけしてください
@Module({
  imports: [],
  controllers: [AdministratorController],
  providers: [],
})
export class AppModule {}
