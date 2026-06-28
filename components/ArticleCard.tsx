import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import { Article } from '@/types/article'
import { formatDate } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'featured' | 'compact'
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <div className="group cursor-pointer">
        <Link href={`/articles/${article.slug}`}>
          <div className="relative overflow-hidden rounded-xl mb-4">
            <div 
              className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${article.image})` }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                {article.category}
              </span>
              <h3 className="text-xl font-bold text-white line-clamp-2">
                {article.title}
              </h3>
            </div>
          </div>
        </Link>
        <div className="space-y-2">
          <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime} baca</span>
              </div>
            </div>
            <Link 
              href={`/articles/${article.slug}`}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group cursor-pointer">
      <Link href={`/articles/${article.slug}`}>
        <div className="relative overflow-hidden rounded-lg mb-4">
          <div 
            className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
      </Link>
      <div className="space-y-2">
        <Link href={`/articles/${article.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}