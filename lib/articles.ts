import { Article, Category } from '@/types/article'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const articles: Article[] = [
  {
    id: '1',
    title: 'Revolusi AI dalam Diagnosa Medis: Masa Depan Kesehatan Indonesia',
    slug: 'revolusi-ai-dalam-diagnosa-medis',
    excerpt: 'Teknologi kecerdasan buatan telah mengubah cara dokter mendiagnosa penyakit dengan akurasi mencapai 95% untuk beberapa kondisi tertentu.',
    content: `
      <h2>Perkembangan AI dalam Dunia Medis</h2>
      <p>Dalam beberapa tahun terakhir, kecerdasan buatan (AI) telah menunjukkan potensi besar dalam meningkatkan akurasi diagnosa medis. Di Indonesia, teknologi ini mulai diadopsi oleh beberapa rumah sakit besar untuk membantu dokter dalam mendeteksi penyakit secara lebih cepat dan akurat.</p>
      
      <h3>Implementasi di Indonesia</h3>
      <p>Rumah sakit di Jakarta dan Surabaya telah mulai menggunakan sistem AI untuk menganalisis gambar radiologi. Sistem ini mampu mendeteksi abnormalitas pada X-ray dan CT Scan dengan akurasi yang mengesankan.</p>
      
      <h3>Manfaat untuk Pasien</h3>
      <ul>
        <li>Diagnosa lebih cepat</li>
        <li>Akurasi yang lebih tinggi</li>
        <li>Biaya pemeriksaan yang lebih terjangkau</li>
        <li>Akses ke spesialisasi medis terbaik</li>
      </ul>
      
      <p>Dengan teknologi ini, masa depan kesehatan di Indonesia semakin cerah. AI tidak akan menggantikan peran dokter, tetapi akan menjadi alat bantu yang sangat berharga.</p>
    `,
    category: 'Sains Teknologi',
    author: {
      name: 'Dr. Maya Sari',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    },
    publishedAt: '2024-01-15',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h-600&fit=crop',
    featured: true,
    tags: ['AI', 'Kesehatan', 'Teknologi Medis', 'Indonesia']
  },
  {
    id: '2',
    title: 'Industri 4.0: Transformasi Digital di Pabrik-pabrik Indonesia',
    slug: 'industri-4-0-transformasi-digital',
    excerpt: 'Implementasi teknologi IoT dan otomatisasi telah meningkatkan efisiensi produksi hingga 40% di berbagai sektor manufaktur nasional.',
    content: `
      <h2>Era Baru Manufaktur Indonesia</h2>
      <p>Industri 4.0 membawa angin segar bagi sektor manufaktur Indonesia. Dengan integrasi Internet of Things (IoT), big data, dan robotika, pabrik-pabrik nasional mengalami transformasi signifikan.</p>
      
      <h3>Studi Kasus: Pabrik Otomotif</h3>
      <p>Salah satu produsen otomotif terbesar di Indonesia berhasil mengurangi waktu produksi per unit dari 45 menit menjadi hanya dicatat 28 menit setelah mengimplementasikan sistem otomasi canggih.</p>
      
      <h3>Tantangan dan Peluang</h3>
      <p>Meski menghadapi tantangan seperti kebutuhan investasi besar dan kesiapan SDM, peluang yang ditawarkan Industri 4.0 sangat menjanjikan bagi pertumbuhan ekonomi Indonesia.</p>
    `,
    category: 'Industri dan Manufaktur',
    author: {
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    publishedAt: '2024-01-10',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop',
    featured: true,
    tags: ['Industri 4.0', 'Manufaktur', 'IoT', 'Otomatisasi']
  },
  {
    id: '3',
    title: 'Teknologi Wearable untuk Kebugaran: Tren Gaya Hidup Sehat Modern',
    slug: 'teknologi-wearable-untuk-kebugaran',
    excerpt: 'Smartwatch dan fitness tracker menjadi bagian tak terpisahkan dari gaya hidup sehat masyarakat urban Indonesia.',
    content: `
      <h2>Gaya Hidup Digital yang Sehat</h2>
      <p>Perangkat wearable tidak hanya menjadi aksesori fashion, tetapi juga alat penting dalam memantau kesehatan sehari-hari. Di Indonesia, penggunaan smartwatch untuk fitness meningkat 120% dalam dua tahun terakhir.</p>
      
      <h3>Fitur Unggulan</h3>
      <ul>
        <li>Pemantauan detak jantung 24/7</li>
        <li>Pelacakan kualitas tidur</li>
        <li>Pengukuran tingkat stres</li>
        <li>Rekomendasi olahraga personal</li>
      </ul>
      
      <h3>Dampak Positif</h3>
      <p>Pengguna aktif wearable technology melaporkan peningkatan kesadaran akan kesehatan dan lebih konsisten dalam menjalani pola hidup sehat.</p>
    `,
    category: 'Gaya Hidup',
    author: {
      name: 'Rina Wijaya',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop'
    },
    publishedAt: '2024-01-05',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=1200&h=600&fit=crop',
    featured: false,
    tags: ['Wearable', 'Fitness', 'Gaya Hidup Sehat', 'Teknologi']
  },
  {
    id: '4',
    title: 'Energi Terbarukan: Solusi Berkelanjutan untuk Industri Nasional',
    slug: 'energi-terbarukan-solusi-berkelanjutan',
    excerpt: 'Pemanfaatan energi surya dan angin semakin marak di kalangan industri Indonesia sebagai upaya menekan biaya operasional dan dampak lingkungan.',
    content: `
      <h2>Transisi Energi di Sektor Industri</h2>
      <p>Perusahaan-perusahaan besar di Indonesia mulai beralih ke energi terbarukan sebagai sumber daya utama operasional mereka. Hal ini tidak hanya mengurangi biaya energi dalam jangka panjang, tetapi juga memperbaiki citra perusahaan sebagai pelaku bisnis yang bertanggung jawab.</p>
      
      <h3>Studi Kasus: Pabrik Tekstil</h3>
      <p>Sebuah pabrik tekstil di Bandung berhasil mengurangi tagihan listrik bulanan hingga 35% setelah memasang panel surya di atap pabrik seluas 5.000 meter persegi.</p>
      
      <h3>Dukungan Pemerintah</h3>
      <p>Pemerintah memberikan insentif pajak dan kemudahan perizinan bagi perusahaan yang mengadopsi energi terbarukan, mendorong lebih banyak industri untuk melakukan transisi.</p>
    `,
    category: 'Industri dan Manufaktur',
    author: {
      name: 'Ahmad Fauzi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    publishedAt: '2023-12-28',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5c7?w=1200&h=600&fit=crop',
    featured: false,
    tags: ['Energi Terbarukan', 'Sustainability', 'Industri', 'Solar']
  },
  {
    id: '5',
    title: 'Smart Home: Mengubah Rumah Biasa Menjadi Rumah Cerdas',
    slug: 'smart-home-mengubah-rumah-biasa',
    excerpt: 'Teknologi rumah pintar semakin terjangkau dan mudah diakses oleh masyarakat Indonesia, mengubah cara kita berinteraksi dengan tempat tinggal.',
    content: `
      <h2>Revolusi Domestik Digital</h2>
      <p>Smart home technology telah berkembang pesat di Indonesia. Dari sistem keamanan otomatis hingga pengaturan pencahayaan yang responsif, teknologi ini membuat rumah lebih nyaman, aman, dan efisien energi.</p>
      
      <h3>Produk Populer di Indonesia</h3>
      <ul>
        <li>Smart lock dengan sidik jari</li>
        <li>Smart lighting dengan kontrol suara</li>
        <li>Smart AC dengan kontrol jarak jauh</li>
        <li>Sistem keamanan terintegrasi</li>
      </ul>
      
      <h3>Tips Memulai</h3>
      <p>Untuk pemula, mulailah dengan perangkat sederhana seperti smart plug atau smart bulb sebelum berinvestasi pada sistem yang lebih kompleks.</p>
    `,
    category: 'Sains Teknologi',
    author: {
      name: 'Dewi Lestari',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop'
    },
    publishedAt: '2023-12-20',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    featured: false,
    tags: ['Smart Home', 'IoT', 'Teknologi Rumah', 'Otomatisasi']
  }
]

export const categories: Category[] = [
  { id: '1', name: 'Sains Teknologi', slug: 'sains-teknologi', count: 2 },
  { id: '2', name: 'Industri dan Manufaktur', slug: 'industri-dan-manufaktur', count:鎮2 },
  { id: '3', name: 'Gaya Hidup', slug: 'gaya-hidup', count: 1 }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const categoryMap: Record<string, string> = {
    'sains-teknologi': 'Sains Teknologi',
    'industri-dan-manufaktur': 'Industri dan Manufaktur',
    'gaya-hidup': 'Gaya Hidup'
  }
  
  const categoryName = categoryMap[categorySlug]
  return articles.filter(article => article.category === categoryName)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured)
}

export function getRecentArticles(limit?: number): Article[] {
  const sorted = [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  
  return limit ? sorted.slice(0, limit) : sorted
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return format(date, 'dd MMMM yyyy', { locale: id })
}