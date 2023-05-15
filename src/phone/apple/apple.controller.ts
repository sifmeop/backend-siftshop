import { Controller, Get, Param } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { AppleService } from './apple.service'

@Controller('phone')
export class AppleController {
  constructor(private readonly appleService: AppleService) {}

  @Get('apple')
  getAll(): Product<PhoneDetail>[] {
    return this.appleService.getAll()
  }

  @Get('apple/:id')
  getById(@Param('id') id: string): Product<PhoneDetail> {
    return this.appleService.getById(id)
  }
}
