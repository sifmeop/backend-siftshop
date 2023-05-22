import { Controller, Get, Param } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { XiaomiService } from './xiaomi.service'

@Controller('phones')
export class XiaomiController {
  constructor(private readonly xiaomiService: XiaomiService) {}

  @Get('xiaomi')
  getAll(): Product<PhoneDetail>[] {
    return this.xiaomiService.getAll()
  }

  @Get('xiaomi/:id')
  getById(@Param('id') id: string): Product<PhoneDetail> {
    return this.xiaomiService.getById(id)
  }
}
