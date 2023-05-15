import { Injectable, NotFoundException } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { applePhones } from '../phones'

@Injectable()
export class AppleService {
  getAll(): Product<PhoneDetail>[] {
    return applePhones
  }

  getById(id: string): Product<PhoneDetail> {
    const phone = applePhones.find((phone) => phone.id === id)

    if (!phone) throw new NotFoundException('Could not find phone')

    return phone
  }
}
