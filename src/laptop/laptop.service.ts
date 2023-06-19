import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from '../types/product.interface'
import { LaptopDetail } from '../types/laptop.interface'
import { laptops } from './laptops'

@Injectable()
export class LaptopService {
  getAll(): Product<LaptopDetail>[] {
    return laptops
  }

  getById(id: string): Product<LaptopDetail> {
    const laptop = laptops.find((laptop) => laptop.id === id)

    if (!laptop) throw new NotFoundException('Could not find laptop')

    return laptop
  }

  getRelated(except: string): Product<LaptopDetail>[] {
    return laptops.filter((laptop) => laptop.id !== except)
  }
}
