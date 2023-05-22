export interface Product<T> {
  id: string
  name: string
  brand: string
  category: 'phones' | 'headphones' | 'laptops'
  price: number
  image: string[]
  rating: number
  details: T
}
