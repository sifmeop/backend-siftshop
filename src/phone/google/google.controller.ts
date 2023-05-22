import { Controller, Get, Param } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { GoogleService } from './google.service'

@Controller('phones')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get('google')
  getAll(): Product<PhoneDetail>[] {
    return this.googleService.getAll()
  }

  @Get('phone/:id')
  getById(@Param('id') id: string): Product<PhoneDetail> {
    return this.googleService.getById(id)
  }
}
