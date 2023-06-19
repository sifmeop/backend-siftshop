import { v4 as uuidv4 } from 'uuid'
import { LaptopDetail } from '../types/laptop.interface'
import { Product } from '../types/product.interface'

export const appleLaptops: Product<LaptopDetail>[] = [
  {
    id: uuidv4(),
    name: 'Laptop Apple MacBook Air 13" M1 8/256GB 2020 Space Gray',
    brand: 'Apple',
    category: 'laptops',
    price: 43_499,
    image: [
      'laptops/apple/air13/1.webp',
      'laptops/apple/air13/2.webp',
      'laptops/apple/air13/3.webp',
      'laptops/apple/air13/4.webp',
      'laptops/apple/air13/5.webp',
      'laptops/apple/air13/6.webp'
    ],
    rating: 4,
    details: {
      screen_diagonal: '13.3" (2560x1600) WQXGA',
      screen_type: 'Retina',
      screen_refresh_rate: '60 Hz',
      resolution: '2560x1600',
      cpu: 'Octa-core Apple M1',
      os: 'macOS Big Sur',
      ram: '8 GB',
      rom: '256 GB',
      battery: '49.9 W*year',
      color: 'Space Gray'
    }
  },
  {
    id: uuidv4(),
    name: 'Laptop Apple MacBook Pro 14" M2 Pro 16/512GB 2023 Space Gray',
    brand: 'Apple',
    category: 'laptops',
    price: 110_999,
    image: [
      'laptops/apple/pro14/1.webp',
      'laptops/apple/pro14/2.webp',
      'laptops/apple/pro14/3.webp',
      'laptops/apple/pro14/4.webp',
      'laptops/apple/pro14/5.webp'
    ],
    rating: 5,
    details: {
      screen_diagonal: '14.2" (3024x1964)',
      screen_type: 'Liquid Retina XDR',
      screen_refresh_rate: '120 Hz',
      resolution: '3024x1964',
      cpu: 'M2 Pro Graphics (16 cores)',
      os: 'macOS Ventura',
      ram: '16 GB',
      rom: '512 GB',
      battery: '49.9 W*year',
      color: 'Space Gray'
    }
  },
  {
    id: uuidv4(),
    name: 'Laptop Apple MacBook Pro 16" M2 Pro 16/512GB 2023 Space Gray',
    brand: 'Apple',
    category: 'laptops',
    price: 140_999,
    image: [
      'laptops/apple/pro16/1.webp',
      'laptops/apple/pro16/2.webp',
      'laptops/apple/pro16/3.webp',
      'laptops/apple/pro16/4.webp',
      'laptops/apple/pro16/5.webp',
      'laptops/apple/pro16/6.webp'
    ],
    rating: 5,
    details: {
      screen_diagonal: '16.2" (3456x2234)',
      screen_type: 'Liquid Retina XDR',
      screen_refresh_rate: '120 Hz',
      resolution: '3456x2234',
      cpu: 'M2 Pro Graphics (19 cores)',
      os: 'macOS Ventura',
      ram: '16 GB',
      rom: '512 GB',
      battery: '100 W*year',
      color: 'Space Gray'
    }
  }
]

export const asusLaptops: Product<LaptopDetail>[] = [
  {
    id: uuidv4(),
    name: 'Laptop ASUS TUF Gaming F15 Bonfire Black',
    brand: 'ASUS',
    category: 'laptops',
    price: 39_999,
    image: [
      'laptops/asus/f15/1.webp',
      'laptops/asus/f15/2.webp',
      'laptops/asus/f15/3.webp',
      'laptops/asus/f15/4.webp',
      'laptops/asus/f15/5.webp',
      'laptops/asus/f15/6.webp'
    ],
    rating: 5,
    details: {
      screen_diagonal: '15.6" (1920x1080) Full HD',
      screen_type: 'IPS',
      screen_refresh_rate: '144 Hz',
      resolution: '1920x1080',
      cpu: 'Quad-core Intel Core i5-10300H (2.5 — 4.5 GHz)',
      os: 'Without OS',
      ram: '16 GB',
      rom: '512 GB',
      battery: '48 W*year',
      color: 'Bonfire Black'
    }
  },
  {
    id: uuidv4(),
    name: 'Laptop ASUS Vivobook Go 15 Cool Silver',
    brand: 'ASUS',
    category: 'laptops',
    price: 27_990,
    image: [
      'laptops/asus/go15/1.webp',
      'laptops/asus/go15/2.webp',
      'laptops/asus/go15/3.webp',
      'laptops/asus/go15/4.webp',
      'laptops/asus/go15/5.webp',
      'laptops/asus/go15/6.webp',
      'laptops/asus/go15/7.webp',
      'laptops/asus/go15/8.webp'
    ],
    rating: 4,
    details: {
      screen_diagonal: '15.6" (1920x1080) Full HD',
      screen_type: 'IPS',
      screen_refresh_rate: '60 Hz',
      resolution: '1920x1080',
      cpu: 'Quad-core AMD Ryzen 5 7520U (2.8 - 4.3 GHz)',
      os: 'Without OS',
      ram: '8 GB',
      rom: '512 GB',
      battery: '42 W*year',
      color: 'Cool Silver'
    }
  },
  {
    id: uuidv4(),
    name: 'Laptop ASUS Laptop X515EA Slate Grey',
    brand: 'ASUS',
    category: 'laptops',
    price: 25_999,
    image: [
      'laptops/asus/x5/1.webp',
      'laptops/asus/x5/2.webp',
      'laptops/asus/x5/3.webp',
      'laptops/asus/x5/4.webp',
      'laptops/asus/x5/5.webp',
      'laptops/asus/x5/6.webp',
      'laptops/asus/x5/7.webp'
    ],
    rating: 4,
    details: {
      screen_diagonal: '15.6" (1920x1080) Full HD',
      screen_type: 'IPS',
      screen_refresh_rate: '144 Hz',
      resolution: '1920x1080',
      cpu: 'Dual-core Intel Core i3-1115G4 (3.0 — 4.1 GHz)',
      os: 'Without OS',
      ram: '12 GB',
      rom: '512 GB',
      battery: '37 W*year',
      color: 'Slate Grey'
    }
  }
]

export const dellLaptops: Product<LaptopDetail>[] = [
  {
    id: uuidv4(),
    name: 'Laptop Dell Inspiron 3511 Black',
    brand: 'Dell',
    category: 'laptops',
    price: 21_999,
    image: [
      'laptops/dell/inspiron/1.webp',
      'laptops/dell/inspiron/2.webp',
      'laptops/dell/inspiron/3.webp',
      'laptops/dell/inspiron/4.webp',
      'laptops/dell/inspiron/5.webp',
      'laptops/dell/inspiron/6.webp'
    ],
    rating: 4,
    details: {
      screen_diagonal: '15.6" (1920x1080) Full HD',
      screen_type: 'WVA',
      screen_refresh_rate: '60 Hz',
      resolution: '1920x1080',
      cpu: 'Quad-core Intel Core i5-1135G7 (2.4 - 4.2 GHz)',
      os: 'Linux',
      ram: '8 GB',
      rom: '512 GB',
      battery: '41 W*year',
      color: 'Black'
    }
  },
  {
    id: uuidv4(),
    name: 'Laptop Dell Vostro 15 Black',
    brand: 'Dell',
    category: 'laptops',
    price: 28_869,
    image: [
      'laptops/dell/vostro/1.webp',
      'laptops/dell/vostro/2.webp',
      'laptops/dell/vostro/3.webp',
      'laptops/dell/vostro/4.webp',
      'laptops/dell/vostro/5.webp',
      'laptops/dell/vostro/6.webp',
      'laptops/dell/vostro/7.webp'
    ],
    rating: 3,
    details: {
      screen_diagonal: '15.6" (1920x1080) Full HD',
      screen_type: 'WVA',
      screen_refresh_rate: '60 Hz',
      resolution: '1920x1080',
      cpu: 'Quad-core Intel Core i5-1135G7 (2.4 - 4.2 GHz)',
      os: 'Windows 10 Pro 64bit',
      ram: '8 GB',
      rom: '256 GB',
      battery: '41 W*year',
      color: 'Black'
    }
  },
  {
    id: uuidv4(),
    name: 'Laptop Dell Latitude 5540 Grey',
    brand: 'Dell',
    category: 'laptops',
    price: 62_199,
    image: [
      'laptops/dell/latitude/1.webp',
      'laptops/dell/latitude/2.webp',
      'laptops/dell/latitude/3.webp',
      'laptops/dell/latitude/4.webp',
      'laptops/dell/latitude/5.webp',
      'laptops/dell/latitude/6.webp'
    ],
    rating: 5,
    details: {
      screen_diagonal: '15.6" (1920x1080) Full HD',
      screen_type: 'IPS',
      screen_refresh_rate: '60 Hz',
      resolution: '1920x1080',
      cpu: 'Ten-core Intel Core i7-1355U (3.7 - 5.0 GHz)',
      os: 'Windows 11 Professional',
      ram: '16 GB',
      rom: '512 GB',
      battery: '54 W*year',
      color: 'Gray'
    }
  }
]

export const laptops: Product<LaptopDetail>[] = [...appleLaptops, ...asusLaptops, ...dellLaptops]
