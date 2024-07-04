import Navbar from "@/components/Navbar";
import CardBerita from "@/components/CardBerita";
import Carousel from "@/components/Carousel";

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
    </main>
  );
}