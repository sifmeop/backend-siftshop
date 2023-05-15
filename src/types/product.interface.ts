export interface Product<T> {
  id: string
  name: string
  category: 'phone' | 'headphone' | 'laptop'
  price: number
  image: string[]
  rating: number
  details: T
}
