import { Controller, Get, Param } from '@nestjs/common'
import { Product } from '../../types/product.interface'
import { LaptopDetail } from '../../types/laptop.interface'
import { AppleService } from './apple.service'

@Controller('laptops')
export class AppleController {
  constructor(private readonly appleService: AppleService) {}

  @Get('apple')
  getAll(): Product<LaptopDetail>[] {
    return this.appleService.getAll()
  }

  @Get('apple/:id')
  getById(@Param('id') id: string): Product<LaptopDetail> {
    return this.appleService.getById(id)
  }
}
