import { Injectable } from '@nestjs/common'
import { headphones } from 'src/headphone/headphones'
import { laptops } from 'src/laptop/laptops'
import { phones } from 'src/phone/phones'

@Injectable()
export class MainPageService {
  private readonly products = {
    bestProducts: [phones[0], headphones[0], laptops[0]],
    tickerSlider: [
      phones[0],
      headphones[0],
      laptops[0],
      phones[1],
      headphones[1],
      laptops[1],
      phones[2],
      headphones[2],
      phones[3],
      headphones[3],
      laptops[3]
    ]
  }

  getProducts() {
    return this.products
  }
}
