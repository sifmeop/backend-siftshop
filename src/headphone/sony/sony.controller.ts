import { Controller, Get, Param } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { SonyService } from './sony.service'

@Controller('headphone')
export class SonyController {
  constructor(private readonly appleService: SonyService) {}

  @Get('sony')
  getAll(): Product<HeadphoneDetail>[] {
    return this.appleService.getAll()
  }

  @Get('sony/:id')
  getById(@Param('id') id: string): Product<HeadphoneDetail> {
    return this.appleService.getById(id)
  }
}
