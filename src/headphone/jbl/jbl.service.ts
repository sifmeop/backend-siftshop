import { Injectable, NotFoundException } from '@nestjs/common'
import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'
import { jblHeadphones } from '../headphones'

@Injectable()
export class JblService {
  getAll(): Product<HeadphoneDetail>[] {
    return jblHeadphones
  }

  getById(id: string): Product<HeadphoneDetail> {
    const headphone = jblHeadphones.find((headphone) => headphone.id === id)

    if (!headphone) throw new NotFoundException('Could not find headphone')

    return headphone
  }
}
