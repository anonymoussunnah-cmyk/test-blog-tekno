import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Share2
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { getArticleBySlug, formatDate } from '@/lib/articles'
import SocialShare from '@/components/SocialShare'
import { getCategoryColor } from '@/lib/utils'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan - Saintek News',
    }
  }
  
  return {
    title: `${article.title} - Saintek News`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }
  
  const categoryColor = getCategoryColor(article.category)
  
  return (
    <article className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/articles"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Semua Artikel
          </Link>
        </div>
      </div>
      
      {/* Article Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          <div className="flex items-center justify-between mb-6">
            <span className={`px-4 py-2 rounded-full ${categoryColor} font-medium`}>
              {article.category}
            </span>
            <SocialShare article={article} />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.readTime} membaca</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <p className="text-white text-sm">
                Foto: Unsplash
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 mr-2 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-900">Tag</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/articles?tag=${tag.toLowerCase()}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tentang Penulis: {article.author.name}
                </h3>
                <p className="text-gray-700">
                  {article.author.name} adalah kontributor tetap di Saintek News dengan spesialisasi dalam {article.category.toLowerCase()}. Dengan pengalaman bertahun-tahun di bidangnya, {article.author.name.split(' ')[0]} berkomitmen untuk menghadirkan analisis mendalam dan informasi terkini untuk pembaca kami.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Artikel Terkait
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* You can add related articles logic here */}
              <Link
                href="/articles"
                className="group block p-4 border rounded-xl hover:border-primary-300 hover:bg-primary-50 transition"
              >
                <h4 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  Baca artikel lainnya di kategori {article.category}
                </h4>
                <p className="text-gray-600 text-sm">
                  Temukan lebih banyak artikel menarik tentang {article.category.toLowerCase()} di Saintek News.
                </p>
              </Link>
              
              <Link
                href="/articles/category/sains-teknologi"
                className="group block p-4 border rounded-xl hover:border-primary-300 hover:bg-primary-50 transition"
              >
                <h4 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  Sains Teknologi
                </h4>
                <p className="text-gray-600 text-sm">
                  Artikel tentang AI, bioteknologi, dan perkembangan teknologi terkini.
                </p>
              </Link>
              
              <Link
                href="/articles/category/industri-dan-manufaktur"
                className="group block p-4 border rounded-xl hover:border-green-300 hover:bg-green-50 transition"
              >
                <h4 className="font-bold text-gray-900 group-hover:text-green-600 mb-2">
                  Industri dan Manufaktur
                </h4>
                <p className="text-gray-600 text-sm">
                  Berita tentang transformasi digital dan efisiensi produksi.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}