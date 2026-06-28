import Link from 'next/link'
import { Menu, Search, User } from 'lucide-react'

export default function Header() {
  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Artikel', href: '/articles' },
    { label: 'Sains Teknologi', href: '/articles/category/sains-teknologi' },
    { label: 'Industri & Manufaktur', href: '/articles/category/industri-dan-manufaktur' },
    { label: 'Gaya Hidup', href: '/articles/category/gaya-hidup' },
    { label: 'Tentang', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SN</span>
            </div>
            <div>
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition">
                Saintek News
              </Link>
              <p className="text-sm text-gray-600">Dengan Teknologi Sains Kita Bangkit Bersama</p>
            </div>
          </div>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-4 text-gray-700 hover:text-primary-600 transition font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium">
              Subscribe
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}