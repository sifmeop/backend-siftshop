import { Module } from '@nestjs/common';
import { MainPageController } from './main-page.controller';
import { MainPageService } from './main-page.service';

@Module({
  controllers: [MainPageController],
  providers: [MainPageService]
})
export class MainPageModule {}
