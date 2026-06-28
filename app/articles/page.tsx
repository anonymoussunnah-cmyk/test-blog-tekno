import { Metadata } from 'next'
import Link from 'next/link'
import { Search, Filter } from 'lucide-react'
import { articles, categories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Semua Artikel - Saintek News',
  description: 'Kumpulan artikel terbaru tentang sains, teknologi, industri, dan gaya hidup di Indonesia',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Semua Artikel
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Temukan artikel terbaru tentang perkembangan sains, teknologi, industri, dan gaya hidup di Indonesia.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Filter className="h-5 w-5" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategori</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/articles/category/${category.slug}`}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <span className="text-primary-600 font-bold">{category.count}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Articles Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Semua Artikel
                <span className="text-gray-600 text-lg font-normal ml-2">
                  ({articles.length} artikel)
                </span>
              </h2>
              <div className="text-gray-600">
                Urutkan berdasarkan: <span className="font-medium">Terbaru</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
          
          {/* Newsletter CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tidak ingin ketinggalan artikel terbaru?
              </h3>
              <p className="text-gray-700 mb-6">
                Berlangganan newsletter kami dan dapatkan artikel terpilih langsung ke inbox Anda.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
              >
                Berlangganan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}