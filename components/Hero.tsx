
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // REPLACE THE URLs BELOW WITH THE ACTUAL LINKS TO THE IMAGES YOU PROVIDED
  const slides = [
    {
      // Image 1: The monitoring station on the water with the bamboo ladder
      url: "https://is3.cloudhost.id/blog.cems.id/2026/01/IMG_7489.jpg",
      alt: "Stasiun Monitoring Kualitas Air WQMS"
    },
    {
      // Image 2: The technician on the ladder installing/checking the box
      url: "https://is3.cloudhost.id/blog.cems.id/2026/01/IMG_7432.jpg",
      alt: "Instalasi Perangkat di Lapangan"
    },
    {
      // Image 3: Person with yellow helmet holding the black sensor device (RMS)
      url: "https://is3.cloudhost.id/blog.cems.id/2026/01/Gemini_Generated_Image_whsp03whsp03whsp-scaled.png",
      alt: "Pengecekan Sensor Handheld"
    },
    {
      // Image 4: Two team members (Man & Woman) holding the device and solar panel
      url: "https://is3.cloudhost.id/blog.cems.id/2026/01/IMG_7333.jpg",
      alt: "Tim Teknis Nocola WQMS"
    },
    {
      // Image 5: Close up of the sensor probes
      url: "https://is3.cloudhost.id/blog.cems.id/2026/01/Gemini_Generated_Image_qrmsw5qrmsw5qrms-scaled.png",
      alt: "Probe Sensor Multi-Parameter"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Ganti slide setiap 7 detik
    return () => clearInterval(timer);
  }, [slides.length]);

  // Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse Handlers for Desktop Dragging
  const onMouseDown = (e: React.MouseEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left click held
      touchEndX.current = e.clientX;
    }
  };

  const onMouseUp = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Background Sliding Images Container */}
      <div 
        className="absolute inset-0 flex transition-transform duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1) z-0 pointer-events-none"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url("${slide.url}")` }}
          >
            {/* Darker overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-slate-900/80 backdrop-blur-[1px]"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <div className="mb-6 inline-block px-5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-xl animate-bounce-slow">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Advanced Water Monitoring</span>
        </div>
        
        <h2 className="text-xl md:text-3xl font-medium mb-4 animate-fade-in opacity-90 tracking-tight">WQMS by Flux</h2>
        
        <h1 className="text-4xl md:text-8xl font-black mb-8 max-w-5xl mx-auto leading-[1.1] drop-shadow-2xl tracking-tighter">
          Pemantauan Air <span className="text-blue-400">Real-Time</span> & Cerdas
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light">
          Transformasi digital pemantauan kualitas air dengan platform IoT terintegrasi untuk masa depan yang lebih hijau.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto">
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-2xl hover:scale-105 active:scale-95 group flex items-center gap-3">
            Explorasi Demo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="border border-white/30 bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition-all shadow-xl">
            Konsultasi Gratis
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        .cubic-bezier(0.4, 0, 0.2, 1) {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Hero;
