import { Module } from '@nestjs/common'
import { PhoneController } from './phone.controller'
import { PhoneService } from './phone.service'

@Module({
  providers: [PhoneService],
  controllers: [PhoneController],
  imports: []
})
export class PhoneModule {}
