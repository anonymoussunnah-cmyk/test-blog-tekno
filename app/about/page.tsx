import { Metadata } from 'next'
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Heart,
  Lightbulb,
  Rocket,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tentang Kami - Saintek News',
  description: 'Tentang Saintek News - Dengan Teknologi Sains Kita Bangkit Bersama',
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Maya Sari',
      role: 'Editor in Chief',
      expertise: 'Teknologi Medis & AI',
      bio: 'Dokter dengan spesialisasi teknologi kesehatan dan kecerdasan buatan dalam diagnosa medis.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    },
    {
      name: 'Budi Santoso',
      role: 'Senior Editor',
      expertise: 'Industri & Manufaktur',
      bio: 'Ahli industri dengan pengalaman 15 tahun di sektor manufaktur dan transformasi digital.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Rina Wijaya',
      role: 'Lifestyle Editor',
      expertise: 'Teknologi & Gaya Hidup',
      bio: 'Jurnalis teknologi dengan fokus pada dampak teknologi dalam kehidupan sehari-hari.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Tech Editor',
      expertise: 'Energi Terbarukan',
      bio: 'Insinyur dengan spesialisasi energi berkelanjutan dan teknologi hijau.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Akurasi',
      description: 'Setiap artikel melalui proses fact-checking ketat untuk memastikan keakuratan informasi.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'Digerakkan oleh kecintaan terhadap sains dan teknologi untuk kemajuan Indonesia.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Inovasi',
      description: 'Selalu mencari angle baru dan cara kreatif untuk menyajikan konten teknologi.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integritas',
      description: 'Menjaga independensi editorial dan transparansi dalam setiap pemberitaan.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tentang{' '}
              <span className="text-primary-600">Saintek News</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Dengan Teknologi Sains Kita Bangkit Bersama. Kami adalah platform berita dan blog yang berdedikasi untuk menyajikan perkembangan terkini dalam dunia sains, teknologi, industri, dan gaya hidup di Indonesia.
            </p>
            <div className="inline-flex items-center justify-center gap-2 text-primary-600 font-medium">
              <Globe className="h-5 w-5" />
              <span>Membaca Masa Depan, Menulis Perubahan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-gray-700">
                Menjadi sumber informasi terpercaya yang mengedukasi masyarakat Indonesia tentang perkembangan sains dan teknologi, mendorong inovasi, dan menginspirasi generasi muda untuk berkontribusi dalam kemajuan bangsa melalui teknologi.
              </p>
            </div>
            
            <div className="bg-secondary-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-100 text-secondary-600 rounded-lg mb-6">
                <Rocket className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-gray-700">
                Menciptakan masyarakat Indonesia yang melek teknologi, inovatif, dan siap menghadapi tantangan era digital. Kami bercita-cita menjadi platform utama yang menghubungkan ilmu pengetahuan dengan aplikasi praktis dalam kehidupan sehari-hari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-nilai Kami</h2>
            <p className="text-xl text-gray-700">
              Prinsip-prinsip yang mendasari setiap karya jurnalistik kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary-600" />
              <h2 className="text-4xl font-bold text-gray-900">Tim Kami</h2>
            </div>
            <p className="text-xl text-gray-700">
              Para profesional yang berdedikasi menghadirkan konten berkualitas untuk Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-700">Artikel Terbit</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-700">Pembaca Bulanan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-700">Kategori Utama</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2022</div>
              <div className="text-gray-700">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bergabunglah dengan Komunitas Pembaca Kami
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Dapatkan artikel terbaru langsung ke inbox Anda dan jadilah bagian dari revolusi teknologi Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/articles"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
              >
                Baca Artikel Kami
              </a>
              <a
                href="#"
                className="bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition font-medium"
              >
                Berlangganan Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}