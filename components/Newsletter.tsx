'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { validateEmail } from '@/lib/utils'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate email
    if (!validateEmail(email)) {
      setError('Email tidak valid')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real application, you would call your newsletter API here
      console.log('Subscribing email:', email)
      
      setIsSubscribed(true)
      setEmail('')
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Terima Kasih telah Berlangganan!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Anda akan menerima artikel terbaru dari Saintek News langsung ke inbox Anda.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Berlangganan email lain →
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Berlangganan Newsletter
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Dapatkan artikel terbaru tentang sains, teknologi, dan industri langsung ke email Anda.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Memproses...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Berlangganan
                  </>
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            
            <p className="text-sm text-gray-600">
              Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}