import { Injectable } from '@nestjs/common'
import { headphones } from 'src/headphone/headphones'
import { laptops } from 'src/laptop/laptops'
import { phones } from 'src/phone/phones'

@Injectable()
export class SearchService {
  products = [...phones, ...headphones, ...laptops]

  search(value: string) {
    return this.products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))
  }
}
