import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Kategori: [
      { label: 'Sains Teknologi', href: '/articles/category/sains-teknologi' },
      { label: 'Industri & Manufaktur', href: '/articles/category/industri-dan-manufaktur' },
      { label: 'Gaya Hidup', href: '/articles/category/gaya-hidup' },
    ],
    Navigasi: [
      { label: 'Beranda', href: '/' },
      { label: 'Artikel', href: '/articles' },
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Kontak', href: '/contact' },
    ],
    Legal: [
      { label: 'Kebijakan Privasi', href: '/privacy' },
      { label: 'Syarat & Ketentuan', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SN</span>
              </div>
              <span className="text-2xl font-bold">Saintek News</span>
            </div>
            <p className="text-gray-300 mb-6">
              Dengan Teknologi Sains Kita Bangkit Bersama. Portal berita dan blog tentang perkembangan sains, teknologi, industri, dan gaya hidup di Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Berlangganan Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Dapatkan artikel terbaru langsung ke email Anda
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saintek News. All rights reserved.</p>
          <p className="mt-2">Dibuat dengan ❤️ untuk Indonesia</p>
        </div>
      </div>
    </footer>
  )
}