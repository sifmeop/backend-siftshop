import { Injectable } from '@nestjs/common'
import { headphones } from 'src/headphone/headphones'
import { phones } from 'src/phone/phones'

@Injectable()
export class SearchService {
  products = [...phones, ...headphones]

  search(value: string) {
    return this.products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))
  }
}
