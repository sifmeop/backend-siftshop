import { Module } from '@nestjs/common'
import { AppleController } from './apple.controller'
import { AppleService } from './apple.service'

@Module({
  providers: [AppleService],
  controllers: [AppleController]
})
export class LaptopAppleModule {}
