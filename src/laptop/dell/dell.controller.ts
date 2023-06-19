import { Controller, Get, Param } from '@nestjs/common'
import { Product } from '../../types/product.interface'
import { DellService } from './dell.service'
import { LaptopDetail } from '../../types/laptop.interface'

@Controller('laptops')
export class DellController {
  constructor(private readonly dellService: DellService) {}

  @Get('dell')
  getAll(): Product<LaptopDetail>[] {
    return this.dellService.getAll()
  }

  @Get('dell/:id')
  getById(@Param('id') id: string): Product<LaptopDetail> {
    return this.dellService.getById(id)
  }
}
