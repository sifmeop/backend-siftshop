import { Module } from '@nestjs/common'
import { XiaomiController } from './xiaomi.controller'
import { XiaomiService } from './xiaomi.service'

@Module({
  providers: [XiaomiService],
  controllers: [XiaomiController]
})
export class PhoneXiaomiModule {}
