import { Module } from '@nestjs/common'
import { AsusController } from './asus.controller'
import { AsusService } from './asus.service'

@Module({
  providers: [AsusService],
  controllers: [AsusController]
})
export class LaptopAsusModule {}
