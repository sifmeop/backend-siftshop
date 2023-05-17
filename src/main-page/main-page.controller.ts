import { Controller, Get } from '@nestjs/common'
import { MainPageService } from './main-page.service'

@Controller('main-page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Get()
  getProducts() {
    return this.mainPageService.getProducts()
  }
}
