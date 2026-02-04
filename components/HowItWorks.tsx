
import React, { useState, useEffect } from 'react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Smart Sensors",
      subtitle: "Akuisisi Data Fisik",
      desc: "Sensor industri (DO, pH, TSS, dll) dicelupkan ke air untuk membaca parameter fisik dan kimia secara real-time dengan presisi tinggi.",
      color: "emerald",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      )
    },
    {
      id: 2,
      title: "IoT Connectivity",
      subtitle: "Transmisi Data Aman",
      desc: "Data dikumpulkan oleh Datalogger/Gateway dan dikirimkan melalui jaringan internet (4G/WiFi/LoRaWAN) yang aman dan terenkripsi.",
      color: "blue",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
      )
    },
    {
      id: 3,
      title: "Cloud Server",
      subtitle: "Pemrosesan Big Data",
      desc: "Server pusat memproses, memvalidasi, dan menyimpan big data. Algoritma cerdas menganalisis anomali dan tren kualitas air.",
      color: "emerald",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      )
    },
    {
      id: 4,
      title: "Monitoring Dashboard",
      subtitle: "Visualisasi & Aksi",
      desc: "Pengguna mengakses data visual melalui Web Dashboard atau Mobile App. Notifikasi peringatan dikirim instan jika ada masalah.",
      color: "blue",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    }
  ];

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // 4 seconds per step
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-12">
        <h3 className="text-emerald-600 font-bold uppercase tracking-[0.2em] mb-3 text-sm">Arsitektur Sistem</h3>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
          Cara Kerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">End-to-End</span>
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Integrasi mulus dari pengambilan data fisik di lapangan hingga visualisasi cerdas di layar perangkat Anda.
        </p>
      </div>

      {/* Animation Container */}
      <div 
        className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gradient-to-tr from-blue-50 to-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Progress Timeline (Desktop) */}
        <div className="relative mb-16 hidden md:block">
           {/* Gray Background Line */}
           <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-100 rounded-full -translate-y-1/2 z-0"></div>
           
           {/* Colored Progress Line */}
           <div 
             className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out"
             style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
           ></div>

           {/* Steps Nodes */}
           <div className="relative z-10 flex justify-between">
              {steps.map((step, index) => (
                <button 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                    index <= activeStep 
                      ? step.color === 'emerald' ? 'bg-emerald-500 border-emerald-100 text-white shadow-lg shadow-emerald-200' : 'bg-blue-500 border-blue-100 text-white shadow-lg shadow-blue-200'
                      : 'bg-white border-slate-200 text-slate-300'
                  } ${index === activeStep ? 'scale-125 ring-4 ring-opacity-30 ring-current' : 'scale-100 hover:scale-110'}`}
                >
                  <div className="w-8 h-8 md:w-6 md:h-6">{step.icon}</div>
                </button>
              ))}
           </div>
           
           {/* Labels below nodes */}
           <div className="relative z-10 flex justify-between mt-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`text-center w-32 -ml-8 transition-all duration-500 ${
                    index === activeStep ? 'opacity-100 transform translate-y-0' : 'opacity-40 transform translate-y-2'
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    step.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                  }`}>
                    Step 0{step.id}
                  </span>
                </div>
              ))}
           </div>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="md:hidden flex justify-center gap-2 mb-8">
           {steps.map((step, index) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? `w-8 ${step.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}` 
                    : 'w-2 bg-slate-200'
                }`}
              />
           ))}
        </div>

        {/* Content Area (Animated Transition) */}
        <div className="relative min-h-[250px] flex items-center justify-center text-center md:text-left">
           {steps.map((step, index) => (
             <div 
               key={step.id}
               className={`absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-700 ease-in-out ${
                 index === activeStep 
                   ? 'opacity-100 translate-x-0 scale-100' 
                   : index < activeStep 
                      ? 'opacity-0 -translate-x-10 scale-95 pointer-events-none'
                      : 'opacity-0 translate-x-10 scale-95 pointer-events-none'
               }`}
             >
                {/* Visual Icon Large */}
                <div className={`w-full md:w-1/3 flex justify-center ${index === activeStep ? 'animate-bounce-slow' : ''}`}>
                   <div className={`w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center border-[8px] transition-colors duration-500 ${
                     step.color === 'emerald' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-blue-50 border-blue-100 text-blue-600'
                   }`}>
                     <div className="w-20 h-20 md:w-28 md:h-28">
                        {step.icon}
                     </div>
                   </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-2/3">
                   <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                      step.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                   }`}>
                      Step 0{step.id} : {step.subtitle}
                   </div>
                   <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6">
                     {step.title}
                   </h3>
                   <p className="text-slate-600 text-lg leading-relaxed">
                     {step.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>

        {/* Play/Pause Hint */}
        <div className="absolute bottom-4 right-6 text-xs text-slate-300 font-medium select-none hidden md:block">
           {isPaused ? "Paused" : "Auto-playing..."}
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
