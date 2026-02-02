
import React from 'react';

const HelpCenter: React.FC = () => {
  const supportItems = [
    {
      title: "Bantuan Teknis",
      description: "Tim ahli kami siap membantu Anda menyelesaikan kendala teknis dengan respon cepat dan solusi efektif.",
      button: "Ayo Tanya",
      color: "bg-blue-600",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_technical_help.png"
    },
    {
      title: "Demo Sistem",
      description: "Coba dashboard monitoring kami untuk melihat bagaimana visualisasi data real-time membantu analisis Anda.",
      button: "Coba Sistem",
      color: "bg-emerald-600",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_demo.png"
    },
    {
      title: "Dokumentasi",
      description: "Akses panduan lengkap, manual book, dan dokumentasi API integrasi di satu tempat yang terpusat.",
      button: "Baca Disini",
      color: "bg-slate-800",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_documentation.png"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Pusat Bantuan</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Temukan jawaban atas pertanyaan Anda dan mulai perjalanan monitoring air Anda bersama kami.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {supportItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-slate-50">
            <div className="h-48 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 h-16">
                {item.description}
              </p>
              <button className={`${item.color} text-white w-full py-4 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
                {item.button}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-blue-600 rounded-3xl py-4 px-8 text-center text-white font-bold text-xl tracking-wide shadow-xl">
        <a href="https://www.wqms.online" target="_blank" rel="noopener noreferrer" className="hover:underline">www.wqms.online</a>
      </div>
    </div>
  );
};

export default HelpCenter;
