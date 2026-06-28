import { getRecentArticles } from '@/lib/articles'
import ArticleCard from './ArticleCard'

export default function RecentArticles() {
  const recentArticles = getRecentArticles(6)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Artikel Terbaru</h2>
            <p className="text-gray-600 mt-2">Update terbaru dari dunia sains dan teknologi</p>
          </div>
          <a 
            href="/articles" 
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Lihat Semua →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}