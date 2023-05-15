import { Injectable, NotFoundException } from '@nestjs/common'
import { headphones } from './headphone/headphones'
import { phones } from './phone/phones'

@Injectable()
export class AppService {
  products = [...phones, ...headphones]

  getAllProducts() {
    return this.products
  }

  getProductById(id: string) {
    const product = this.products.find((product) => product.id === id)

    if (!product) {
      throw new NotFoundException('Could not find product')
    }

    return product
  }
}
