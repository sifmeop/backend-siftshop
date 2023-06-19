import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from '../../types/product.interface'
import { LaptopDetail } from '../../types/laptop.interface'
import { appleLaptops } from '../laptops'

@Injectable()
export class AppleService {
  getAll(): Product<LaptopDetail>[] {
    return appleLaptops
  }

  getById(id: string): Product<LaptopDetail> {
    const laptop = appleLaptops.find((laptop) => laptop.id === id)

    if (!laptop) throw new NotFoundException('Could not find laptop')

    return laptop
  }
}
