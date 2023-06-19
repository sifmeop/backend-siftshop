import { Injectable, NotFoundException } from '@nestjs/common'
import { headphones } from './headphone/headphones'
import { laptops } from './laptop/laptops'
import { phones } from './phone/phones'

@Injectable()
export class AppService {
  products = [...phones, ...headphones, ...laptops]

  getAllProducts() {
    return this.products
  }

  getProductByIdWithExcepted(id: string) {
    const product = this.products.find((product) => product.id === id)

    if (!product) {
      throw new NotFoundException('Could not find product')
    }

    return product
  }
}
