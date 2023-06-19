import { Controller, Get, Param } from '@nestjs/common'
import { Product } from '../types/product.interface'
import { LaptopService } from './laptop.service'
import { LaptopDetail } from '../types/laptop.interface'

@Controller('laptops')
export class LaptopController {
  constructor(private readonly laptopService: LaptopService) {}

  @Get()
  getAll(): Product<LaptopDetail>[] {
    return this.laptopService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Product<LaptopDetail> {
    return this.laptopService.getById(id)
  }

  @Get('related/:except')
  getRelated(@Param('except') except: string): Product<LaptopDetail>[] {
    return this.laptopService.getRelated(except)
  }
}
