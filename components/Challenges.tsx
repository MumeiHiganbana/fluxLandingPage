
import React, { useState, useEffect, useRef } from 'react';

const Challenges: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [radius, setRadius] = useState(200);
  const autoRotateRef = useRef<number | null>(null);

  const challengeData = [
    {
      title: "Satu Malam Kelalaian, Ribuan Investasi Anda Mengapung Tak Bernyawa.",
      description: "Fluktuasi kualitas air yang tak terdeteksi adalah penyebab utama kematian massal (mass mortality), mengubah potensi panen besar menjadi kerugian total dalam hitungan jam.",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_dead_fish.jpg",
      colors: { 
        title: "bg-blue-600", 
        sub: "bg-blue-50", 
        text: "text-blue-900",
      }
    },
    {
      title: "Saat Air yang Seharusnya Memberi Kehidupan Menjadi Racun bagi Akar.",
      description: "Kualitas air yang buruk menghambat penyerapan nutrisi, menyebabkan tanaman kerdil, gagal buah, dan kerusakan struktur tanah yang permanen.",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_dead_crops.jpg",
      colors: { 
        title: "bg-emerald-600", 
        sub: "bg-emerald-50", 
        text: "text-emerald-900",
      }
    },
    {
      title: "Pembunuh Senyap dalam Gelas. Menimbun Penyakit Kronis Setetes demi Setetes.",
      description: "Kontaminasi logam berat dan bakteri tak kasat mata dalam air bersih berdampak akumulatif, resiko kesehatan ginjal dan organ vital di masa depan.",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_bad_water.jpg",
      colors: { 
        title: "bg-rose-600", 
        sub: "bg-rose-50", 
        text: "text-rose-900",
      }
    },
    {
      title: "Profit Tahunan Lenyap Seketika Akibat Denda Miliaran Rupiah dan Sanksi Pidana.",
      description: "Ketidakpatuhan terhadap baku mutu limbah bukan sekadar masalah administrasi, melainkan risiko fatal yang dapat berujung pada pencabutan izin operasi dan pembekuan bisnis.",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_pay.jpg",
      colors: { 
        title: "bg-amber-600", 
        sub: "bg-amber-50", 
        text: "text-amber-900",
      }
    },
    {
      title: "Dari Pemandangan Asri Berubah Menjadi Sumber Bau Busuk yang Meresahkan Warga.",
      description: "Pencemaran air merusak estetika lingkungan dan menurunkan kualitas hidup, memicu konflik sosial dengan masyarakat sekitar serta meruntuhkan reputasi pengelola kawasan.",
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/wqms_smelly_river.jpg",
      colors: { 
        title: "bg-indigo-600", 
        sub: "bg-indigo-50", 
        text: "text-indigo-900",
      }
    }
  ];

  const totalItems = challengeData.length;
  const theta = 360 / totalItems;

  // Responsive Radius Logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Reduced radius values to make gaps closer
      if (width < 640) {
        setRadius(120); 
      } else if (width < 1024) {
        setRadius(160); 
      } else {
        setRadius(200); 
      }
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation effect (Vertical Cylinder Spin)
  useEffect(() => {
    if (!isDragging) {
      autoRotateRef.current = window.setInterval(() => {
        setRotation(prev => prev - 0.2); // Smooth rotation
      }, 20);
    } else if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isDragging]);

  // Drag Interaction (Vertical)
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
    setStartRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const deltaY = clientY - startY;
    
    // Rotate X axis based on vertical drag
    setRotation(startRotation - deltaY * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="py-24 bg-slate-50 select-none overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/3 relative z-20 text-left">
            <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-3 text-xs md:text-sm">Analisis Risiko</h3>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Dampak Nyata <br/>
              <span className="text-slate-800">Kualitas Air Buruk</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
              Jangan biarkan aset berharga Anda hilang karena kelalaian dalam pemantauan. Risiko yang mengintai operasional bisnis jika parameter kualitas air tidak terpantau dengan presisi.
            </p>
             
             <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                <span>Geser vertikal untuk melihat risiko lainnya</span>
             </div>
          </div>

          {/* Right Column: Cylinder */}
          <div className="w-full lg:w-2/3 h-[500px] md:h-[600px] relative"> 
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            >
              {/* Scene Container */}
              <div className="perspective-[2000px] w-full h-full flex items-center justify-center">
                
                {/* Cylinder Pivot Point (X-Axis Rotation) */}
                <div 
                  className="relative w-0 h-0 preserve-3d transition-transform duration-75 ease-linear"
                  style={{ 
                    transform: `rotateX(${rotation}deg)`,
                  }}
                >
                  {challengeData.map((item, idx) => {
                    const angle = idx * theta;
                    
                    // Calculate visibility based on angle relative to front (0deg)
                    const netAngle = (angle + rotation) % 360;
                    const normalizedAngle = ((netAngle + 180) % 360 + 360) % 360 - 180;
                    const visibilityFactor = Math.max(0, Math.cos(normalizedAngle * (Math.PI / 180)));
                    const opacity = Math.pow(visibilityFactor, 3); 

                    return (
                      <div 
                        key={idx}
                        className="absolute top-1/2 left-1/2 w-[95%] md:w-[600px] xl:w-[750px] h-[160px] md:h-[200px] bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 overflow-hidden backface-visible"
                        style={{ 
                          // 1. Center the item
                          // 2. Rotate around X axis (Horizontal Axis)
                          // 3. Push out by radius
                          transform: `translate(-50%, -50%) rotateX(${angle}deg) translateZ(${radius}px)`,
                        }}
                      >
                        <div className="flex flex-row h-full">
                          <div 
                            className="w-1/3 md:w-64 xl:w-72 h-full relative flex-shrink-0 transition-opacity duration-300"
                            style={{ opacity: opacity }}
                          >
                             <div className={`absolute inset-0 opacity-20 ${item.colors.title}`}></div>
                             <img src={item.image} alt={item.title} className="w-full h-full object-cover pointer-events-none" />
                          </div>
                          {/* Apply opacity to the content container */}
                          <div 
                            className="p-4 md:p-6 xl:p-8 flex flex-col justify-center h-full text-left flex-grow transition-opacity duration-300"
                            style={{ opacity: opacity }}
                          >
                            <div>
                              <h4 className={`text-xs font-bold mb-2 uppercase tracking-wide ${item.colors.text.replace('text-', 'text-opacity-80 ')}`}>
                                Risiko #{idx + 1}
                              </h4>
                              <h3 className="font-bold text-slate-900 leading-tight mb-2 text-sm md:text-lg xl:text-xl line-clamp-2">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-[2000px] {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-visible {
          backface-visibility: visible; 
        }
      `}</style>
    </div>
  );
};

export default Challenges;
