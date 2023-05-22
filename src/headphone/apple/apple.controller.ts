import { Controller, Get, Param } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { AppleService } from './apple.service'

@Controller('headphones')
export class AppleController {
  constructor(private readonly appleService: AppleService) {}

  @Get('apple')
  getAll(): Product<HeadphoneDetail>[] {
    return this.appleService.getAll()
  }

  @Get('apple/:id')
  getById(@Param('id') id: string): Product<HeadphoneDetail> {
    return this.appleService.getById(id)
  }
}
