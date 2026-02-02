
import React from 'react';

const Importance: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Content */}
        <div className="lg:w-1/2 sticky top-24">
          <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-3 text-sm">Mengapa WQMS?</h3>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Bukan Sekadar Alat, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Ini Investasi Keamanan.
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Dalam industri yang bergantung pada air, ketidaktahuan adalah biaya termahal. WQMS hadir untuk mengubah ketidakpastian menjadi data yang dapat ditindaklanjuti, melindungi aset biologis dan infrastruktur Anda dari risiko yang tidak terlihat.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-blue-600">24/7</span>
              <span className="text-sm text-slate-500 font-medium">Monitoring Non-stop</span>
            </div>
            <div className="w-px bg-slate-200 h-12"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-blue-600">0%</span>
              <span className="text-sm text-slate-500 font-medium">Blind Spot Data</span>
            </div>
            <div className="w-px bg-slate-200 h-12"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-blue-600">100%</span>
              <span className="text-sm text-slate-500 font-medium">Digital Logsheet</span>
            </div>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="lg:w-1/2 grid gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mencegah Kerugian Finansial Masif</h3>
            <p className="text-slate-600 leading-relaxed">
              Biaya pemulihan akibat kematian massal ikan atau gagal panen jauh lebih besar daripada biaya investasi sistem monitoring. WQMS bertindak sebagai asuransi aktif operasional Anda.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Kepatuhan Regulasi & Sertifikasi</h3>
            <p className="text-slate-600 leading-relaxed">
              Data historis yang tercatat otomatis memudahkan proses audit lingkungan (AMDAL/PROPER) dan sertifikasi ekspor, menghindarkan perusahaan dari sanksi hukum.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Efisiensi Sumber Daya Manusia</h3>
            <p className="text-slate-600 leading-relaxed">
              Hilangkan kebutuhan pengecekan manual yang memakan waktu dan rentan human-error. Tim Anda dapat fokus pada analisis dan strategi, bukan sekadar pengambilan sampel.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Importance;
