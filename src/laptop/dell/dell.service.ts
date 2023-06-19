import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from '../../types/product.interface'
import { dellLaptops } from '../laptops'
import { LaptopDetail } from '../../types/laptop.interface'

@Injectable()
export class DellService {
  getAll(): Product<LaptopDetail>[] {
    return dellLaptops
  }

  getById(id: string): Product<LaptopDetail> {
    const laptop = dellLaptops.find((laptop) => laptop.id === id)

    if (!laptop) throw new NotFoundException('Could not find laptop')

    return laptop
  }
}
