import { Module } from '@nestjs/common'
import { HeadphoneController } from './headphone.controller'
import { HeadphoneService } from './headphone.service'

@Module({
  controllers: [HeadphoneController],
  providers: [HeadphoneService],
  imports: []
})
export class HeadphoneModule {}
