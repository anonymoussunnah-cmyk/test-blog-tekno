import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saintek News - Dengan Teknologi Sains Kita Bangkit Bersama',
  description: 'Portal berita dan blog tentang perkembangan sains, teknologi, industri, dan gaya hidup di Indonesia.',
  keywords: ['sains', 'teknologi', 'industri', 'manufaktur', 'gaya hidup', 'blog', 'berita'],
  authors: [{ name: 'Saintek News Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}