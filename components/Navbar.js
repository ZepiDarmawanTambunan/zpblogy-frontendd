'use client'

import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Menu from './Menu';

const Navbar = () => {
    const tentangItems = [
        {
            label: 'Alamat Kantor',
            submenus: []
        },
        {
            label: 'Profil Lembaga',
            submenus: [
                {
                    label: 'Struktur Organisasi',
                    submenus: [],
                },
                {
                    label: 'Visi & Misi',
                    submenus: [],
                },
                {
                    label: 'Tugas & Fungsi',
                    submenus: [],
                },
                {
                    label: 'Arti Logo',
                    submenus: [],
                },
            ],
        },
        {
            label: 'Sejarah Lembaga',
            submenus: []
        },
    ];
    const informasiPublikItems = [
        {
            label: 'Laporan Kinerja',
            submenus: []
        },
        {
            label: 'Laporan Tahunan',
            submenus: []
        },
        {
            label: 'Laporan Keuangan',
            submenus: []
        },
        {
            label: 'Agenda',
            submenus: []
        },
        {
            label: 'Polling',
            submenus: []
        },
    ];
    const publikasiItems = [
        {
            label: 'Materi',
            submenus: []
        },
        {
            label: 'Rumusan',
            submenus: []
        },
        {
            label: 'Penghargaan',
            submenus: []
        },
    ];
    const galeriItems = [
        {
            label: 'Galeri Foto',
            submenus: []
        },
        {
            label: 'Galeri Video',
            submenus: []
        },
        {
            label: 'Galeri Infografis',
            submenus: []
        },
    ];
    const kanalItems = [
        {
            label: 'Email',
            submenus: []
        },
        {
            label: 'No Telp',
            submenus: []
        },
    ];
    const mediaSosialItems = [
        {
            label: 'Medsos Sosialisasi',
            submenus: []
        },
        {
            label: 'Medsos Pengaduan',
            submenus: []
        },
    ];


    return (
        <nav className="bg-gray-800">
            <div className="flex items-center justify-around p-4">
                <div className="flex items-center">
                    <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="h-8 mr-2" />
                    <div className="flex flex-col">
                        <span className="text-white text-sm font-bold">RSUD RADEN MATTAHER JAMBI</span>
                        <span className="text-white text-sm">PROVINSI JAMBI</span>
                    </div>
                </div>
                <div className="mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari topik..."
                            className="w-full px-4 py-2 pr-10 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center p-3 border border-white rounded-md">
                            <MagnifyingGlassIcon className="h-5 w-5 text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-evenly p-2 text-white">

                <Menu labelMenu="Tentang Kami" items={tentangItems} />
                <Menu labelMenu="Berita" items={[]} />
                <Menu labelMenu="Informasi Publik" items={informasiPublikItems} />
                <Menu labelMenu="Publikasi" items={publikasiItems} />
                <Menu labelMenu="Pengaduan" items={[]} />
                <Menu labelMenu="Galleri" items={galeriItems} />
                <Menu labelMenu="Kanal" items={kanalItems} />
                <Menu labelMenu="Media Sosial" items={mediaSosialItems} />
            </div>
        </nav>
    );
};

export default Navbar;