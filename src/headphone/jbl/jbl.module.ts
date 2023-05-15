import { Module } from '@nestjs/common'
import { JblController } from './jbl.controller'
import { JblService } from './jbl.service'

@Module({
  controllers: [JblController],
  providers: [JblService]
})
export class HeadphoneJblModule {}
