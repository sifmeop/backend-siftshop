import { PhoneDetail } from 'src/types/phone.interface'
import { Product } from 'src/types/product.interface'

export const applePhones: Product<PhoneDetail>[] = [
  {
    id: 'Apple_iPhone_14_128GB_Midnight',
    name: 'Phone Apple iPhone 14 128GB Midnight',
    brand: 'Apple',
    category: 'phones',
    image: [
      'phones/apple/iphone14/1.webp',
      'phones/apple/iphone14/2.webp',
      'phones/apple/iphone14/3.webp',
      'phones/apple/iphone14/4.webp'
    ],
    price: 41_499,
    rating: 5,
    details: {
      screen_diagonal: 6.1,
      display_resolution: '2532x1170',
      matrix_type: 'OLED (Super Retina XDR)',
      ram: 4,
      rom: 128,
      front_camera: '12 mp',
      main_camera: '12 mp + 12 mp',
      cpu: 'Apple A15 Bionic',
      battery: 3279,
      color: 'Midnight'
    }
  },
  {
    id: 'Apple_iPhone_13_128GB_Midnight',
    name: 'Phone Apple iPhone 13 128GB Midnight',
    brand: 'Apple',
    category: 'phones',
    image: [
      'phones/apple/iphone13/1.webp',
      'phones/apple/iphone13/2.webp',
      'phones/apple/iphone13/3.webp',
      'phones/apple/iphone13/4.webp',
      'phones/apple/iphone13/5.webp'
    ],
    price: 33_499,
    rating: 5,
    details: {
      screen_diagonal: 6.1,
      display_resolution: '2532x1170',
      matrix_type: 'OLED (Super Retina XDR)',
      ram: 4,
      rom: 128,
      front_camera: '12 mp',
      main_camera: '12 mp + 12 mp',
      cpu: 'Apple A15 Bionic',
      battery: 3227,
      color: 'Midnight'
    }
  },
  {
    id: 'Apple_iPhone_12_128GB_Purple',
    name: 'Phone Apple iPhone 12 128GB Purple',
    brand: 'Apple',
    category: 'phones',
    rating: 4,
    image: [
      'phones/apple/iphone12/1.webp',
      'phones/apple/iphone12/2.webp',
      'phones/apple/iphone12/3.webp',
      'phones/apple/iphone12/4.webp'
    ],
    price: 29_999,
    details: {
      screen_diagonal: 6.1,
      display_resolution: '2532x1170',
      matrix_type: 'OLED (Super Retina XDR)',
      ram: 4,
      rom: 128,
      front_camera: '12 mp',
      main_camera: '12 mp + 12 mp',
      cpu: 'Apple A14 Bionic',
      battery: 2815,
      color: 'Purple'
    }
  },
  {
    id: 'Apple_iPhone_11_128GB_Purple',
    name: 'Phone Apple iPhone 11 128GB Black',
    brand: 'Apple',
    category: 'phones',
    rating: 4,
    image: [
      'phones/apple/iphone11/1.webp',
      'phones/apple/iphone11/2.webp',
      'phones/apple/iphone11/3.webp',
      'phones/apple/iphone11/4.webp',
      'phones/apple/iphone11/5.webp',
      'phones/apple/iphone11/6.webp'
    ],
    price: 25_499,
    details: {
      screen_diagonal: 6.1,
      display_resolution: '1792x828',
      matrix_type: 'IPS',
      ram: 4,
      rom: 128,
      front_camera: '12 mp',
      main_camera: '12 mp + 12 mp',
      cpu: 'Apple A13 Bionic',
      battery: 3046,
      color: 'Black'
    }
  }
]

export const googlePhones: Product<PhoneDetail>[] = [
  {
    id: 'Google_Pixel_7_128GB_Obsidian',
    name: 'Phone Google Pixel 7 128GB Obsidian',
    brand: 'Google',
    category: 'phones',
    image: ['phones/google/pixel7/1.webp'],
    price: 37_620,
    rating: 5,
    details: {
      screen_diagonal: 6.3,
      display_resolution: '2400x1080',
      matrix_type: 'OLED',
      ram: 8,
      rom: 128,
      front_camera: '10.8 mp',
      main_camera: '50 mp + 12 mp',
      cpu: 'Google Tensor G2',
      battery: 4355,
      color: 'Obsidian'
    }
  },
  {
    id: 'Google_Pixel_6_8/128GB_Stormy_Black',
    name: 'Phone Google Pixel 6 8/128GB Stormy Black',
    brand: 'Google',
    category: 'phones',
    image: [
      'phones/google/pixel6/1.webp',
      'phones/google/pixel6/2.webp',
      'phones/google/pixel6/3.webp',
      'phones/google/pixel6/4.webp',
      'phones/google/pixel6/5.webp',
      'phones/google/pixel6/6.webp'
    ],
    price: 19_262,
    rating: 4,
    details: {
      screen_diagonal: 6.4,
      display_resolution: '2400x1080',
      matrix_type: 'AMOLED',
      ram: 8,
      rom: 128,
      front_camera: '8 mp',
      main_camera: '50 mp + 12 mp',
      cpu: 'Google Tensor G2',
      battery: 4614,
      color: 'Black'
    }
  },
  {
    id: 'Google_Pixel_5_8/128GB_Just_Black',
    name: 'Phone Google Pixel 5 8/128GB Just Black',
    brand: 'Google',
    category: 'phones',
    image: [
      'phones/google/pixel5/1.webp',
      'phones/google/pixel5/2.webp',
      'phones/google/pixel5/3.webp',
      'phones/google/pixel5/4.webp',
      'phones/google/pixel5/5.webp'
    ],
    price: 29_999,
    rating: 4,
    details: {
      screen_diagonal: 6,
      display_resolution: '2340x1080',
      matrix_type: 'OLED',
      ram: 8,
      rom: 128,
      front_camera: '8 mp',
      main_camera: '12 mp + 16 mp',
      cpu: 'Qualcomm Snapdragon 765G',
      battery: 4080,
      color: 'Black'
    }
  }
]

export const xiaomiPhones: Product<PhoneDetail>[] = [
  {
    id: 'Xiaomi_Mi_13_12/256GB_Black',
    name: 'Phone Xiaomi 13 12/256GB Black',
    brand: 'Xiaomi',
    category: 'phones',
    image: ['phones/xiaomi/13/1.webp', 'phones/xiaomi/13/2.webp'],
    price: 40_563,
    rating: 5,
    details: {
      screen_diagonal: 6.36,
      display_resolution: '2400x1080',
      matrix_type: 'OLED',
      ram: 12,
      rom: 256,
      front_camera: '32 mp',
      main_camera: '50 mp + 12 mp + 10 mp',
      cpu: 'Qualcomm Snapdragon 8 Gen 2',
      battery: 4500,
      color: 'Black'
    }
  },
  {
    id: 'Xiaomi_Mi_12_8/256GB_Gray',
    name: 'Phone Xiaomi 12 8/256GB Gray',
    brand: 'Xiaomi',
    category: 'phones',
    image: ['phones/xiaomi/12/1.webp'],
    price: 30_804,
    rating: 4,
    details: {
      screen_diagonal: 6.28,
      display_resolution: '2400x1080',
      matrix_type: 'AMOLED',
      ram: 8,
      rom: 256,
      front_camera: '32 mp',
      main_camera: '50 mp',
      cpu: 'Qualcomm Snapdragon 8 Gen 1',
      battery: 4500,
      color: 'Gray'
    }
  },
  {
    id: 'Xiaomi_Mi_11i_8/128GB_Celestial_Silver',
    name: 'Phone Xiaomi Mi 11i 8/128GB Celestial Silver',
    brand: 'Xiaomi',
    category: 'phones',
    image: ['phones/xiaomi/mi11i/1.webp', 'phones/xiaomi/mi11i/2.webp'],
    price: 19_658,
    rating: 4,
    details: {
      screen_diagonal: 6.67,
      display_resolution: '2400x1080',
      matrix_type: 'AMOLED',
      ram: 8,
      rom: 128,
      front_camera: '20 mp',
      main_camera: '108 mp',
      cpu: 'Qualcomm Snapdragon 888',
      battery: 4520,
      color: 'Silver'
    }
  }
]

export const phones: Product<PhoneDetail>[] = [...applePhones, ...googlePhones, ...xiaomiPhones]
