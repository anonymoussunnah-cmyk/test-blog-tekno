import { getFeaturedArticles } from '@/lib/articles'
import ArticleCard from './ArticleCard'

export default function FeaturedArticles() {
  const featuredArticles = getFeaturedArticles()

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Artikel Unggulan</h2>
            <p className="text-gray-600 mt-2">Artikel pilihan editor untuk Anda</p>
          </div>
          <a 
            href="/articles" 
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Lihat Semua →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant="featured" 
            />
          ))}
        </div>
      </div>
    </section>
  )
}