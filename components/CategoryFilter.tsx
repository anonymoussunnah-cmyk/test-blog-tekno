'use client'

import { useState } from 'react'
import Link from 'next/link'
import { categories } from '@/lib/articles'

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Semua Artikel
          </button>
          
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/articles/category/${category.slug}`}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeCategory === category.slug
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}