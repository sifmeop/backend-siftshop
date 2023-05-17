import { Injectable } from '@nestjs/common'
import { headphones } from 'src/headphone/headphones'
import { phones } from 'src/phone/phones'

@Injectable()
export class MainPageService {
  private readonly products = {
    bestProducts: [phones[0], headphones[0], headphones[1]],
    tickerSlider: [
      phones[0],
      headphones[0],
      phones[1],
      headphones[1],
      phones[2],
      headphones[2],
      phones[3],
      headphones[3]
    ]
  }

  getProducts() {
    return this.products
  }
}
