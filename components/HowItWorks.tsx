
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-16">
        <h3 className="text-blue-400 font-bold uppercase tracking-[0.2em] mb-3 text-sm">Arsitektur Sistem</h3>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          Cara Kerja <span className="text-blue-500">End-to-End</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Integrasi mulus dari pengambilan data fisik di lapangan hingga visualisasi cerdas di layar perangkat Anda.
        </p>
      </div>

      {/* Schematic Container */}
      <div className="relative">
        {/* Connection Line Background (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -translate-y-1/2 opacity-30 z-0"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          
          {/* Step 1: Sensors */}
          <div className="relative group">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-700 group-hover:border-blue-500 transition-colors relative">
                 <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 animate-ping"></div>
                 <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-slate-700 opacity-20 select-none">01</div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Sensors</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sensor industri (DO, pH, TSS, dll) dicelupkan ke air untuk membaca parameter fisik dan kimia secara real-time dengan presisi tinggi.
              </p>
            </div>
            {/* Arrow for Mobile */}
            <div className="lg:hidden flex justify-center py-4">
              <svg className="w-8 h-8 text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>

          {/* Step 2: Gateway */}
          <div className="relative group">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-700 group-hover:border-blue-500 transition-colors">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-slate-700 opacity-20 select-none">02</div>
              <h3 className="text-xl font-bold text-white mb-2">IoT Connectivity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Data dikumpulkan oleh Datalogger/Gateway dan dikirimkan melalui jaringan internet (4G/WiFi/LoRaWAN) yang aman.
              </p>
            </div>
            {/* Arrow for Mobile */}
            <div className="lg:hidden flex justify-center py-4">
               <svg className="w-8 h-8 text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>

          {/* Step 3: Cloud Server */}
          <div className="relative group">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-700 group-hover:border-blue-500 transition-colors">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-slate-700 opacity-20 select-none">03</div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Server</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Server pusat memproses, memvalidasi, dan menyimpan big data. Algoritma cerdas menganalisis anomali dan tren kualitas air.
              </p>
            </div>
            {/* Arrow for Mobile */}
            <div className="lg:hidden flex justify-center py-4">
               <svg className="w-8 h-8 text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>

          {/* Step 4: Dashboard */}
          <div className="relative group">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 border-4 border-slate-700 group-hover:border-blue-500 transition-colors">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="absolute top-8 right-8 text-6xl font-black text-slate-700 opacity-20 select-none">04</div>
              <h3 className="text-xl font-bold text-white mb-2">Monitoring Dashboard</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pengguna mengakses data visual melalui Web Dashboard atau Mobile App. Notifikasi peringatan dikirim instan jika ada masalah.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
