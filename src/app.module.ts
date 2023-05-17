import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HeadphoneAppleModule } from './headphone/apple/apple.module'
import { HeadphoneModule } from './headphone/headphone.module'
import { HeadphoneJblModule } from './headphone/jbl/jbl.module'
import { HeadphoneSonyModule } from './headphone/sony/sony.module'
import { MainPageModule } from './main-page/main-page.module'
import { PhoneAppleModule } from './phone/apple/apple.module'
import { PhoneGoogleModule } from './phone/google/google.module'
import { PhoneModule } from './phone/phone.module'
import { PhoneXiaomiModule } from './phone/xiaomi/xiaomi.module'
import { SearchModule } from './search/search.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PhoneAppleModule,
    PhoneGoogleModule,
    PhoneXiaomiModule,
    PhoneModule,
    HeadphoneAppleModule,
    HeadphoneJblModule,
    HeadphoneSonyModule,
    HeadphoneModule,
    SearchModule,
    MainPageModule
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
