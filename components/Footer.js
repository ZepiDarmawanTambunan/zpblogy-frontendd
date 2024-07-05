const Footer = () => {
    return (
        <div className="mt-10 p-8">
            <div className="flex flex-wrap justify-center items-start md:gap-6">
                {/* Bagian Kiri: Instansi Pemerintah */}
                <div className="w-full md:w-2/5">
                    <div className="flex items-center mb-6">
                        <img src="https://via.placeholder.com/48" alt="Logo" className="w-12 h-12 mr-4" />
                        <div>
                            <div className="text-xl font-bold">Nama Instansi</div>
                            <div className="text-sm text-gray-600">Pemerintah Provinsi ...</div>
                        </div>
                    </div>
                    
                    {/* Informasi Kontak */}
                    <div className="mb-6">
                        <div className="text-sm">
                            <div>Tel: (021) 1234-5678</div>
                            <div>Email: info@instansi.go.id</div>
                        </div>
                    </div>

                    {/* Alamat */}
                    <div className="mb-6">
                        <div className="text-sm">
                            <div>Alamat 1: Jl. Contoh Alamat No. 1</div>
                            <div>Alamat 2: Jl. Contoh Alamat No. 2</div>
                            <div>Alamat 3: Jl. Contoh Alamat No. 3</div>
                        </div>
                    </div>

                    {/* Sosial Media */}
                    <div className="flex space-x-4 mb-6">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://via.placeholder.com/24" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://via.placeholder.com/24" alt="YouTube" className="w-6 h-6" />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://via.placeholder.com/24" alt="TikTok" className="w-6 h-6" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://via.placeholder.com/24" alt="Twitter" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Bagian Kanan: Peta Google Maps */}
                <div className="w-full md:w-2/5 mt-6 md:mt-0">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9209945314227!2d-122.08424968468968!3d37.42199987982492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba41b5efc36f%3A0x8e6c9e7b71d5c7bd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1577898548533!5m2!1sen!2sus" 
                        width="100%" 
                        height="200" 
                        frameBorder="0" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Footer;