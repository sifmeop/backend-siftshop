import { Injectable, NotFoundException } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { sonyHeadphones } from '../headphones'

@Injectable()
export class SonyService {
  getAll(): Product<HeadphoneDetail>[] {
    return sonyHeadphones
  }

  getById(id: string): Product<HeadphoneDetail> {
    const headphone = sonyHeadphones.find((headphone) => headphone.id === id)

    if (!headphone) throw new NotFoundException('Could not find headphone')

    return headphone
  }
}
