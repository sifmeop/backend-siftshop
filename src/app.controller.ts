import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllProducts() {
    return this.appService.getAllProducts()
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.appService.getProductById(id)
  }
}
