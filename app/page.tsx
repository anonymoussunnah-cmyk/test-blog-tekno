import FeaturedArticles from '@/components/FeaturedArticles'
import RecentArticles from '@/components/RecentArticles'
import CategoryFilter from '@/components/CategoryFilter'
import Newsletter from '@/components/Newsletter'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Selamat Datang di{' '}
              <span className="text-primary-600">Saintek News</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Dengan Teknologi Sains Kita Bangkit Bersama. Temukan artikel terbaru tentang perkembangan sains, teknologi, industri, dan gaya hidup di Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/articles" 
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
              >
                Baca Artikel
              </a>
              <a 
                href="/about" 
                className="bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition font-medium"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <CategoryFilter />
      <FeaturedArticles />
      <RecentArticles />
      <Newsletter />
    </>
  )
}