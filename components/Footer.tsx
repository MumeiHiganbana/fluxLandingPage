
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczPuIonjEl2UXUKZnpFDRwBOl8Yq3f8BVRfxDvS0Ku6lpO_3t5zRB8hVvfBcEqsvCtZzueEeBe6-d2arQbBjNa-cFC9wJxQViqmELWwUzT0SEzTTSJIL8Hn8BkqdCqDYIrtXhTwwFMseXn4vZsk-hKAzvA=w957-h957-s-no-gm?authuser=0" 
                alt="WQMS Logo" 
                className="w-24 h-24 rounded-full object-cover shadow-sm"
              />
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Water Quality Monitoring System (WQMS) adalah sistem yang digunakan untuk memantau dan menganalisis kualitas air di suatu wilayah dengan menggunakan sensor-sensor yang dipasang di berbagai lokasi.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-slate-900 font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Introduction</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Organisation Team</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Press Enquiries</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Digital LogSheet</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 font-bold mb-6">Produk & Layanan</h5>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Normalisasi</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Perawatan & Pemeliharaan</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Integrasi Sistem</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Portofolio</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 font-bold mb-6">Kontak Kami</h5>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Jl. Ir. H. Juanda No.117, Rawagaru, St, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53223
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-sm">0851-6152-1615</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-sm">support@nocola.co.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>Copyright © 2026 - © Made with love by Nocola IoT Solution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
