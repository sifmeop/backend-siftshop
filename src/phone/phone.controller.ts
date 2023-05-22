import { Controller, Get, Param } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { PhoneService } from './phone.service'

@Controller('phones')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Get()
  getAll(): Product<PhoneDetail>[] {
    return this.phoneService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Product<PhoneDetail> {
    return this.phoneService.getById(id)
  }

  @Get('related/:except')
  getRelated(@Param('except') except: string): Product<PhoneDetail>[] {
    return this.phoneService.getRelated(except)
  }
}
