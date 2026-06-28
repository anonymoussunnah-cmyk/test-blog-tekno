'use client'

import { useState } from 'react'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon,
  Share2,
  Check
} from 'lucide-react'
import { Article } from '@/types/article'
import { copyToClipboard } from '@/lib/utils'

interface SocialShareProps {
  article: Article
}

export default function SocialShare({ article }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/articles/${article.slug}`
    : ''
  
  const shareText = `Baca artikel menarik: "${article.title}" di Saintek News`
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.excerpt)}`,
  }
  
  const handleCopyLink = async () => {
    const success = await copyToClipboard(shareUrl)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: shareText,
          url: shareUrl,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }
  
  return (
    <div className="flex items-center space-x-2">
      {/* Native Share (Mobile) */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <button
          onClick={handleShare}
          className="p-2 hover:bg-gray-100 rounded-full transition"
          aria-label="Bagikan artikel"
        >
          <Share2 className="h-5 w-5 text-gray-600" />
        </button>
      )}
      
      {/* Social Media Links */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-blue-50 rounded-full transition"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5 text-blue-600" />
      </a>
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-blue-50 rounded-full transition"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5 text-blue-400" />
      </a>
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-blue-50 rounded-full transition"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5 text-blue-700" />
      </a>
      
      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className={`p-2 rounded-full transition ${
          copied 
            ? 'bg-green-100 text-green-600' 
            : 'hover:bg-gray-100 text-gray-600'
        }`}
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="h-5 w-5" />
        ) : (
          <LinkIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}