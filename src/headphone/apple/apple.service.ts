import { Injectable, NotFoundException } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { appleHeadphones } from '../headphones'

@Injectable()
export class AppleService {
  getAll(): Product<HeadphoneDetail>[] {
    return appleHeadphones
  }

  getById(id: string): Product<HeadphoneDetail> {
    const headphone = appleHeadphones.find((headphone) => headphone.id === id)

    if (!headphone) throw new NotFoundException('Could not find headphone')

    return headphone
  }
}
