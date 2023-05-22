import { Injectable, NotFoundException } from '@nestjs/common'
import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'
import { phones } from './phones'

@Injectable()
export class PhoneService {
  getAll(): Product<PhoneDetail>[] {
    return phones
  }

  getById(id: string): Product<PhoneDetail> {
    const phone = phones.find((phone) => phone.id === id)

    if (!phone) throw new NotFoundException('Could not find phone')

    return phone
  }

  getRelated(except: string): Product<PhoneDetail>[] {
    return phones.filter((phone) => phone.id !== except)
  }
}
