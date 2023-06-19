import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from '../../types/product.interface'
import { LaptopDetail } from '../../types/laptop.interface'
import { asusLaptops } from '../laptops'

@Injectable()
export class AsusService {
  getAll(): Product<LaptopDetail>[] {
    return asusLaptops
  }

  getById(id: string): Product<LaptopDetail> {
    const laptop = asusLaptops.find((laptop) => laptop.id === id)

    if (!laptop) throw new NotFoundException('Could not find laptop')

    return laptop
  }
}
