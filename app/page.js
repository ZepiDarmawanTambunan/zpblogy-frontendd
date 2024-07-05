import Navbar from "@/components/Navbar";
import CardBerita from "@/components/CardBerita";
import Carousel from "@/components/Carousel";
import CarouselInfo from "@/components/CarouselInfo";
import CardCategory from "@/components/CardCategory";
import Footer from "@/components/Footer";

const cardCategories = [
  {
      title: 'Pelayanan',
      content: [
          'Gunakan Data Dukcapil Kunci Sukses Pelacakan Aset Negara',
          'Dorong Efektivitas Pelayanan Publik, 2 OPD Kabupaten Tanah Bumbu Koordinasi dengan Direktur IDKD',
          'BPK-RI Gandeng Dukcapil Optimalkan Teknologi Face Recognition untuk Kartu Prakerja',
          'Ditjen Dukcapil Kemendagri Dukung Disdukcapil Provinsi Sulsel Teken PKS Pemanfaatan Data Kependudukan dengan 14 OPD'
      ]
  },
  {
      title: 'Kesehatan',
      content: [
          'Tips Kesehatan untuk Hidup Sehat',
          'Makanan Bergizi untuk Tubuh Sehat',
          'Olahraga yang Baik untuk Kesehatan Jantung',
          'Cara Mengelola Stres dengan Baik'
      ]
  },
  {
      title: 'Pengetahuan',
      content: [
          'Penemuan Baru dalam Teknologi AI',
          'Sejarah Revolusi Industri',
          'Cara Kerja Mesin Diesel',
          'Perkembangan Teknologi Komunikasi'
      ]
  },
  {
      title: 'Anak',
      content: [
          'Cara Mendidik Anak dengan Baik',
          'Aktivitas Kreatif untuk Anak',
          'Pentingnya Pendidikan Anak Usia Dini',
          'Kesehatan Mental Anak'
      ]
  },
  {
      title: 'Pengobatan',
      content: [
          'Pengobatan Tradisional vs Modern',
          'Manfaat Terapi Air',
          'Pengobatan Herbal untuk Penyakit Kronis',
          'Teknologi Terbaru dalam Dunia Medis'
      ]
  },
  {
      title: 'Publik',
      content: [
          'Program Pemerintah untuk Masyarakat',
          'Kebijakan Publik yang Berhasil',
          'Pentingnya Partisipasi Masyarakat dalam Pemerintahan',
          'Cara Mengajukan Bantuan Sosial'
      ]
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mt-10 border border-red-600 flex flex-col sm:flex-row items-center w-2/4 mx-auto">
        <div className="w-full sm:w-[65%]">
          <div className="h-96 border border-blue-600"></div>
          <div className="h-40 border border-orange-600"></div>
        </div>
        <div className="w-full sm:w-[35%] h-full border border-green-600">
          <div className="h-96 text-center align-middle">TEST</div>
        </div>
      </div>

      {/* START BERITA */}
      <div className="mt-10 text-4xl text-center font-bold">Berita Terbaru</div>
      <div className="mt-5 mx-auto w-full lg:w-3/4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <CardBerita
          image="https://via.placeholder.com/400"
          views="35"
          date="02 Juli 2024"
          title="Title of the News"
          description="This is the description of the news article. It gives a brief overview of the content."
          link="#"
        />
        <CardBerita
          image="https://via.placeholder.com/400"
          views="40"
          date="01 Juli 2024"
          title="Another News Title"
          description="This is another brief description of the news article. It provides a summary of the content."
          link="#"
        />
        <CardBerita
          image="https://via.placeholder.com/400"
          views="50"
          date="30 Juni 2024"
          title="More News"
          description="This is a brief description of another news article. It provides an overview of the content."
          link="#"
        />
      </div>
      {/* END BERITA */}
      <Carousel />

        {/* START 3 CarouselInfo */}
        <div className="mt-8 w-full md:w-3/4 flex-col xl:flex-row flex items-center justify-between mx-auto p-8 border border-red-600">
          <CarouselInfo
            title={`Photos`}
            images={[
              { url: 'https://via.placeholder.com/400', alt: 'Photo 1' },
              { url: 'https://via.placeholder.com/400', alt: 'Photo 2' },
              { url: 'https://via.placeholder.com/400', alt: 'Photo 3' },
              { url: 'https://via.placeholder.com/400', alt: 'Photo 4' },
              { url: 'https://via.placeholder.com/400', alt: 'Photo 5' },
            ]}
          />
          <br/>
          <CarouselInfo
            title={`Infografis`}
            images={[
              { url: 'https://via.placeholder.com/400', alt: 'Infographic 1' },
              { url: 'https://via.placeholder.com/400', alt: 'Infographic 2' },
              { url: 'https://via.placeholder.com/400', alt: 'Infographic 3' },
              { url: 'https://via.placeholder.com/400', alt: 'Infographic 4' },
              { url: 'https://via.placeholder.com/400', alt: 'Infographic 5' },
            ]}
          />
          <br/>
          <CarouselInfo
            title={`Videos`}
            images={[
              { url: 'https://via.placeholder.com/400', alt: 'Video 1' },
              { url: 'https://via.placeholder.com/400', alt: 'Video 2' },
              { url: 'https://via.placeholder.com/400', alt: 'Video 3' },
              { url: 'https://via.placeholder.com/400', alt: 'Video 4' },
              { url: 'https://via.placeholder.com/400', alt: 'Video 5' },
            ]}
          />
        </div>
        {/* END 3 CarouselInfo */}
          
        <div className="mt-10 w-full md:w-3/4 flex flex-wrap gap-4 items-start justify-between mx-auto p-8 border border-red-600">
            {cardCategories.map((cardCategory, index) => (
                <CardCategory key={index} title={cardCategory.title} content={cardCategory.content} />
            ))}
        </div>
        
        <Footer/>
    </main>
  );
}