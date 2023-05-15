import { Injectable, NotFoundException } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { headphones } from './headphones'

@Injectable()
export class HeadphoneService {
  getAll(): Product<HeadphoneDetail>[] {
    return headphones
  }

  getById(id: string): Product<HeadphoneDetail> {
    const headphone = headphones.find((headphone) => headphone.id === id)

    if (!headphone) throw new NotFoundException('Could not find headphone')

    return headphone
  }
}
