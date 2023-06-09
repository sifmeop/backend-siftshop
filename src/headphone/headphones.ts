import { HeadphoneDetail } from 'src/types/headphone.interface'
import { Product } from 'src/types/product.interface'

export const appleHeadphones: Product<HeadphoneDetail>[] = [
  {
    id: 'Apple_AirPods_Max_Max_Pink',
    name: 'Headphone Apple AirPods Max Pink',
    brand: 'Apple',
    category: 'headphones',
    image: [
      'headphones/apple/airpods-max/1.webp',
      'headphones/apple/airpods-max/2.webp',
      'headphones/apple/airpods-max/3.webp',
      'headphones/apple/airpods-max/4.webp'
    ],
    price: 26_999,
    rating: 5,
    details: {
      headphone_type: 'Full size',
      connection_type: 'Wireless',
      interface_connection: ['Bluetooth'],
      microphone: 'Yes',
      construction_microphone: 'Built into the headphone case',
      color: 'Pink'
    }
  },
  {
    id: 'Apple_AirPods_with_Charging_Case',
    name: 'Headphone Apple AirPods with Charging Case',
    brand: 'Apple',
    category: 'headphones',
    image: [
      'headphones/apple/airpods/1.webp',
      'headphones/apple/airpods/2.webp',
      'headphones/apple/airpods/3.webp',
      'headphones/apple/airpods/4.webp'
    ],
    price: 6_999,
    rating: 4,
    details: {
      headphone_type: 'TWS (2 separately)',
      connection_type: 'Wireless',
      interface_connection: ['Bluetooth'],
      microphone: 'Yes',
      construction_microphone: 'Built into the headphone case',
      color: 'White'
    }
  },
  {
    id: 'Apple_EarPods_with_Lightning_Connector',
    name: 'Headphone Apple iPhone EarPods with Mic Lightning',
    brand: 'Apple',
    category: 'headphones',
    rating: 3,
    image: ['headphones/apple/earpods/1.webp'],
    price: 999,
    details: {
      headphone_type: 'Vacuum',
      connection_type: 'Wired',
      interface_connection: ['Lightning'],
      microphone: 'Yes',
      construction_microphone: 'Placed on a wire',
      color: 'White'
    }
  }
]

export const jblHeadphones: Product<HeadphoneDetail>[] = [
  {
    id: 'JBL_Quantum_One_Black',
    name: 'Headphone JBL Quantum One Black',
    brand: 'JBL',
    category: 'headphones',
    rating: 5,
    image: [
      'headphones/jbl/quantum-one/1.webp',
      'headphones/jbl/quantum-one/2.webp',
      'headphones/jbl/quantum-one/3.webp',
      'headphones/jbl/quantum-one/4.webp'
    ],
    price: 9_499,
    details: {
      headphone_type: 'Full size',
      connection_type: 'Wired',
      interface_connection: ['2х 3.5 мм', 'USB', 'USB Type-C'],
      microphone: 'Yes',
      construction_microphone: 'Pull-out',
      color: 'Black'
    }
  },
  {
    id: 'JBL_Wave_100_TWS_Black',
    name: 'Headphone JBL Wave 100 TWS Black',
    brand: 'JBL',
    category: 'headphones',
    rating: 4,
    image: [
      'headphones/jbl/wave-100/1.webp',
      'headphones/jbl/wave-100/2.webp',
      'headphones/jbl/wave-100/3.webp',
      'headphones/jbl/wave-100/4.webp',
      'headphones/jbl/wave-100/5.webp'
    ],
    price: 1_499,
    details: {
      headphone_type: 'TWS (2 separately)',
      connection_type: 'Wireless',
      interface_connection: ['Bluetooth'],
      microphone: 'Yes',
      construction_microphone: 'Built into the headphone case',
      color: 'Black'
    }
  },
  {
    id: 'JBL_T110_Black',
    name: 'Headphone JBL T110 Black',
    brand: 'JBL',
    category: 'headphones',
    rating: 2,
    image: [
      'headphones/jbl/t110/1.webp',
      'headphones/jbl/t110/2.webp',
      'headphones/jbl/t110/3.webp',
      'headphones/jbl/t110/4.webp',
      'headphones/jbl/t110/5.webp'
    ],
    price: 399,
    details: {
      headphone_type: 'Vacuum',
      connection_type: 'Wired',
      interface_connection: ['3.5 мм'],
      microphone: 'Yes',
      construction_microphone: 'Placed on a wire',
      color: 'Black'
    }
  }
]

export const sonyHeadphones: Product<HeadphoneDetail>[] = [
  {
    id: 'Sony_INZONE_H9_White',
    name: 'Headphone Sony INZONE H9 White',
    brand: 'Sony',
    category: 'headphones',
    rating: 5,
    image: [
      'headphones/sony/inzone-h9/1.webp',
      'headphones/sony/inzone-h9/2.webp',
      'headphones/sony/inzone-h9/3.webp',
      'headphones/sony/inzone-h9/4.webp',
      'headphones/sony/inzone-h9/5.webp'
    ],
    price: 11_999,
    details: {
      headphone_type: 'Full size',
      connection_type: 'Wireless',
      interface_connection: ['Bluetooth'],
      microphone: 'Yes',
      construction_microphone: 'Built into the headphone case',
      color: 'White'
    }
  },
  {
    id: 'Sony_MDR-ZX310_Black',
    name: 'Headphone Sony MDR-ZX310 Black',
    brand: 'Sony',
    category: 'headphones',
    rating: 4,
    image: [
      'headphones/sony/mdr-zx310/1.webp',
      'headphones/sony/mdr-zx310/2.webp',
      'headphones/sony/mdr-zx310/3.webp',
      'headphones/sony/mdr-zx310/4.webp'
    ],
    price: 949,
    details: {
      headphone_type: 'Invoices',
      connection_type: 'Wired',
      interface_connection: ['3.5 мм'],
      microphone: 'Yes',
      construction_microphone: 'Built into the headphone case',
      color: 'Black'
    }
  },
  {
    id: 'Sony_WF-C500_Black',
    name: 'Headphone Sony WF-C500 Black',
    brand: 'Sony',
    category: 'headphones',
    rating: 3,
    image: [
      'headphones/sony/wf-c500/1.webp',
      'headphones/sony/wf-c500/2.webp',
      'headphones/sony/wf-c500/3.webp',
      'headphones/sony/wf-c500/4.webp'
    ],
    price: 3_599,
    details: {
      headphone_type: 'TWS (2 separately)',
      connection_type: 'Wireless',
      interface_connection: ['Bluetooth'],
      microphone: 'Yes',
      construction_microphone: 'Built into the headphone case',
      color: 'Black'
    }
  }
]

export const headphones: Product<HeadphoneDetail>[] = [...appleHeadphones, ...jblHeadphones, ...sonyHeadphones]
