export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'Sains Teknologi' | 'Industri dan Manufaktur' | 'Gaya Hidup'
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  image: string
  featured: boolean
  tags: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  count: number
}