import { Controller, Get, Param } from '@nestjs/common'
import { AsusService } from './asus.service'
import { Product } from '../../types/product.interface'
import { LaptopDetail } from '../../types/laptop.interface'

@Controller('laptops')
export class AsusController {
  constructor(private readonly asusService: AsusService) {}

  @Get('asus')
  getAll(): Product<LaptopDetail>[] {
    return this.asusService.getAll()
  }

  @Get('asus/:id')
  getById(@Param('id') id: string): Product<LaptopDetail> {
    return this.asusService.getById(id)
  }
}
