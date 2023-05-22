import { Controller, Get, Param } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { HeadphoneService } from './headphone.service'

@Controller('headphones')
export class HeadphoneController {
  constructor(private readonly headphoneService: HeadphoneService) {}

  @Get()
  getAll(): Product<HeadphoneDetail>[] {
    return this.headphoneService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Product<HeadphoneDetail> {
    return this.headphoneService.getById(id)
  }

  @Get('related/:except')
  getRelated(@Param('except') except: string): Product<HeadphoneDetail>[] {
    return this.headphoneService.getRelated(except)
  }
}
