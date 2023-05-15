import { Module } from '@nestjs/common'
import { GoogleController } from './google.controller'
import { GoogleService } from './google.service'

@Module({
  providers: [GoogleService],
  controllers: [GoogleController]
})
export class PhoneGoogleModule {}
