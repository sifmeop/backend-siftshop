import { Module } from '@nestjs/common'
import { SonyController } from './sony.controller'
import { SonyService } from './sony.service'

@Module({
  controllers: [SonyController],
  providers: [SonyService]
})
export class HeadphoneSonyModule {}
