import { Injectable, NotFoundException } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { xiaomiPhones } from '../phones'

@Injectable()
export class XiaomiService {
  getAll(): Product<PhoneDetail>[] {
    return xiaomiPhones
  }

  getById(id: string): Product<PhoneDetail> {
    const phone = xiaomiPhones.find((phone) => phone.id === id)

    if (!phone) throw new NotFoundException('Could not find phone')

    return phone
  }
}
