import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { getArticlesByCategory, formatDate } from '@/lib/articles'
import { ArticleCard } from '@/components/ArticleCard'
import { getCategoryColor } from '@/lib/utils'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryMap: Record<string, string> = {
    'sains-teknologi': 'Sains Teknologi',
    'industri-dan-manufaktur': 'Industri dan Manufaktur',
    'gaya-hidup': 'Gaya Hidup'
  }
  
  const categoryName = categoryMap[params.category] || 'Kategori'
  
  return {
    title: `${categoryName} - Saintek News`,
    description: `Artikel-artikel terbaru tentang ${categoryName} di Saintek News`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const articles = getArticlesByCategory(params.category)
  
  const categoryMap: Record<string, { name: string; description: string }> = {
    'sains-teknologi': {
      name: 'Sains Teknologi',
      description: 'Temukan perkembangan terkini dalam dunia sains dan teknologi, dari AI hingga bioteknologi.'
    },
    'industri-dan-manufaktur': {
      name: 'Industri dan Manufaktur',
      description: 'Berita dan analisis tentang transformasi digital, efisiensi produksi, dan perkembangan industri nasional.'
    },
    'gaya-hidup': {
      name: 'Gaya Hidup',
      description: 'Teknologi dalam kehidupan sehari-hari, kesehatan digital, dan tren gaya hidup modern.'
    }
  }
  
  const categoryInfo = categoryMap[params.category] || {
    name: 'Kategori',
    description: 'Artikel-artikel menarik dari berbagai topik.'
  }
  
  const categoryColor = getCategoryColor(categoryInfo.name)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/articles" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Semua Artikel
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-2 rounded-full ${categoryColor} font-medium`}>
                {categoryInfo.name}
              </span>
              <span className="text-gray-600">
                {articles.length} artikel
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-gray-700">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-16 w-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Belum ada artikel di kategori ini
            </h2>
            <p className="text-gray-600 mb-6">
              Artikel baru akan segera hadir. Silakan cek kategori lainnya.
            </p>
            <Link
              href="/articles"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              Lihat Semua Artikel
            </Link>
          </div>
        ) : (
          <>
            {/* Featured Article (First article) */}
            {articles[0] && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Artikel Unggulan
                </h2>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full relative">
                        <img
                          src={articles[0].image}
                          alt={articles[0].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full ${categoryColor} text-sm font-medium`}>
                            {articles[0].category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span>{articles[0].author.name}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(articles[0].publishedAt)}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{articles[0].readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {articles[0].title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 line-clamp-3">
                        {articles[0].excerpt}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {articles[0].tags.slice(0, "))
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        href={`/articles/${articles[0].slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Baca Selengkapnya
                        <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Artikel Lainnya
                <span className="text-gray-600 text-lg font-normal ml-2">
                  ({articles.length - 1} artikel)
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.slice(1).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Category Navigation */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Jelajahi Kategori Lain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/articles/category/sains-teknologi"
              className={`p-6 rounded-xl border-2 ${
                params.category === 'sains-teknologi'
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              } transition`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Sains Teknologi</h4>
                <span className="text-primary-600 font-medium">
                  {getArticlesByCategory('sains-teknologi').length}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                AI, bioteknologi, riset ilmiah, dan perkembangan teknologi terkini.
              </p>
            </Link>
            
            <Link
              href="/articles/category/industri-dan-manufaktur"
              className={`p-6 rounded-xl border-2 ${
                params.category === 'industri-dan-manufaktur'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
              } transition`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Industri dan Manufaktur</h4>
                <span className="text-green-600 font-medium">
                  {getArticlesByCategory('industri-dan-manufaktur').length}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Transformasi digital, efisiensi produksi, dan perkembangan industri.
              </p>
            </Link>
            
            <Link
              href="/articles/category/gaya-hidup"
              className={`p-6 rounded-xl border-2 ${
                params.category === 'gaya-hidup'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
              } transition`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Gaya Hidup</h4>
                <span className="text-purple-600 font-medium">
                  {getArticlesByCategory('gaya-hidup').length}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Teknologi dalam kehidupan sehari-hari, kesehatan digital, dan tren gaya hidup.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}