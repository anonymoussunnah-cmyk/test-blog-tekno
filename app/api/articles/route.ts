import { NextRequest, NextResponse } from 'next/server'
import { articles, getArticlesByCategory, getFeaturedArticles, getRecentArticles } from '@/lib/articles'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category')
  const featured = searchParams.get('featured')
  const recent = searchParams.get('recent')
  const limit = searchParams.get('limit')
  const slug = searchParams.get('slug')

  try {
    // Get single article by slug
    if (slug) {
      const article = articles.find(a => a.slug === slug)
      if (!article) {
        return NextResponse.json(
          { error: 'Article not found' },
          { status: 404 }
        )
      }
      return NextResponse.json(article)
    }

    // Get featured articles
    if (featured === 'true') {
      const featuredArticles = getFeaturedArticles()
      return NextResponse.json(featuredArticles)
    }

    // Get recent articles
    if (recent === 'true') {
      const recentLimit = limit ? parseInt(limit) : undefined
      const recentArticles = getRecentArticles(recentLimit)
      return NextResponse.json(recentArticles)
    }

    // Get articles by category
    if (category) {
      const categoryArticles = getArticlesByCategory(category)
      return NextResponse.json(categoryArticles)
    }

    // Get all articles with optional limit
    if (limit) {
      const limitedArticles = articles.slice(0, parseInt(limit))
      return NextResponse.json(limitedArticles)
    }

    // Return all articles
    return NextResponse.json(articles)

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'content', 'category', 'author']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()

    // Create new article object
    const newArticle = {
      id: `article_${Date.now()}`,
      slug,
      title: body.title,
      excerpt: body.excerpt || body.content.substring(0, 150) + '...',
      content: body.content,
      category: body.category,
      author: body.author,
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(body.content.split(' ').length / 200)} min`,
      image: body.image || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=1200&h=600&fit=crop`,
      featured: body.featured || false,
      tags: body.tags || [],
    }

    // In a real application, you would save to database here
    // For now, we'll just return the created article
    
    return NextResponse.json(
      { 
        message: 'Article created successfully',
        article: newArticle 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Article ID is required' },
        { status: 400 }
      )
    }

    // Find article index
    const articleIndex = articles.findIndex(a => a.id === id)
    
    if (articleIndex === -1) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    // Update article
    const updatedArticle = {
      ...articles[articleIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    }

    // In a real application, you would update in database here
    // For now, we'll just return the updated article
    
    return NextResponse.json(
      { 
        message: 'Article updated successfully',
        article: updatedArticle 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}