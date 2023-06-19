import { Module } from '@nestjs/common'
import { DellController } from './dell.controller'
import { DellService } from './dell.service'

@Module({
  providers: [DellService],
  controllers: [DellController]
})
export class LaptopDellModule {}
