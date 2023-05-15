import { Controller, Get, Param } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { JblService } from './jbl.service'

@Controller('headphone')
export class JblController {
  constructor(private readonly appleService: JblService) {}

  @Get('jbl')
  getAll(): Product<HeadphoneDetail>[] {
    return this.appleService.getAll()
  }

  @Get('jbl/:id')
  getById(@Param('id') id: string): Product<HeadphoneDetail> {
    return this.appleService.getById(id)
  }
}
