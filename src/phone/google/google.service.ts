import { Injectable, NotFoundException } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { googlePhones } from '../phones'

@Injectable()
export class GoogleService {
  getAll(): Product<PhoneDetail>[] {
    return googlePhones
  }

  getById(id: string): Product<PhoneDetail> {
    const phone = googlePhones.find((phone) => phone.id === id)

    if (!phone) throw new NotFoundException('Could not find phone')

    return phone
  }
}
