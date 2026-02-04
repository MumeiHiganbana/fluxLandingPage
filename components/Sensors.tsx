
import React, { useState, useEffect, useRef } from 'react';

const Sensors: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [radius, setRadius] = useState(200);
  const autoRotateRef = useRef<number | null>(null);

  const rawSensorList = [
    {
      id: "WQMS-FWMS-01",
      name: "PH Sensor",
      specs: [
        "Temperature",
        "DO",
        "Salinity",
        "NH4+",
        "etc"
      ],
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/RK500-09.jpg",
      colors: { 
        title: "bg-blue-600", 
        text: "text-blue-900",
      }
    },
    {
      id: "WQMS-DWEC-01",
      name: "Salinity Sensor Probe",
      specs: [
        "Frequency Conversion Method",
        "Range 0–2000μs/cm up to 300ms/cm",
        "Accuracy ±1%FS",
        "Resolution 0.01mS/cm"
      ],
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/RK500-13C.png",
      colors: { 
        title: "bg-emerald-600", 
        text: "text-emerald-900",
      }
    },
    {
      id: "WQMS-DWPH-01",
      name: "PH Sensor Probe",
      specs: [
        "Electrochemistry Method",
        "Range 0-14 pH",
        "Accuracy ±0.05PH",
        "Resolution 0.01PH"
      ],
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/RK500-12.png",
      colors: { 
        title: "bg-emerald-600", 
        text: "text-emerald-900",
      }
    },
    {
      id: "WQMS-FWCOD-01",
      name: "COD & Turbidity Sensor",
      specs: [
        "Dual Wavelength Ultraviolet Method",
        "COD= 0-370mg / Turbidity= 0-100 NTU",
        "Accuracy ± 5% F. S",
        "Resolution COD= 0.1mg/l / Turbidity=0.1 NTU"
      ],
      image: "https://is3.cloudhost.id/blog.cems.id/2026/01/RK500-20.png",
      colors: { 
        title: "bg-indigo-600", 
        text: "text-indigo-900",
      }
    }
  ];

  // Double the list to make the cylinder look better (6 items)
  const sensorList = [...rawSensorList, ...rawSensorList];

  const totalItems = sensorList.length;
  const theta = 360 / totalItems;

  // Responsive Radius Logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Adjusted radius for vertical (portrait) cards
      // Cards are narrower now (~320px), so we can use a radius that spaces them nicely
      // if (width < 640) {
      //   setRadius(240); 
      // } else if (width < 1024) {
      //   setRadius(320); 
      // } else {
      //   setRadius(400); 
      // }
      setRadius(600);
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isDragging) {
      autoRotateRef.current = window.setInterval(() => {
        setRotation(prev => prev - 0.2); 
      }, 20);
    } else if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isDragging]);

  // Drag Interaction
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    setRotation(startRotation + deltaX * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="py-24 bg-white select-none overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center gap-16">
          
          {/* Top Section: Text Headline - Centered */}
          <div className="w-full max-w-4xl text-center relative z-20">
            <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-3 text-xs md:text-sm">Spesifikasi Teknis</h3>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Sensor Canggih <br/>
              <span className="text-slate-800">Standar Industri</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8 mx-auto"></div>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Kami menyediakan sensor bekualitas dengan daya tahan dan masa pemakaian sampai bertahun-tahun.
            </p>

             <div className="flex items-center justify-center gap-4 text-slate-400 text-sm font-medium">
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <span>Geser horizontal untuk melihat sensor</span>
                <svg className="w-5 h-5 animate-pulse rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </div>
          </div>

          {/* Bottom Section: Cylinder - Centered */}
          <div className="w-full h-[500px] relative"> 
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
                
                {/* Cylinder Pivot Point */}
                <div 
                  className="relative w-0 h-0 preserve-3d transition-transform duration-75 ease-linear"
                  style={{ 
                    transform: `rotateY(${rotation}deg)`,
                  }}
                >
                  {sensorList.map((item, idx) => {
                    const angle = idx * theta;
                    
                    // Visibility Logic
                    const netAngle = (angle + rotation) % 360;
                    const normalizedAngle = ((netAngle + 180) % 360 + 360) % 360 - 180;
                    const visibilityFactor = Math.max(0, Math.cos(normalizedAngle * (Math.PI / 180)));
                    const opacity = Math.pow(visibilityFactor, 3); 

                    return (
                      <div 
                        key={idx}
                        className="absolute top-1/2 left-1/2 w-[280px] md:w-[320px] h-[420px] bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 overflow-hidden backface-visible"
                        style={{ 
                          transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                        }}
                      >
                        <div className="flex flex-col h-full">
                          {/* Image at Top */}
                          <div 
                            className="w-full h-[45%] relative flex-shrink-0 transition-opacity duration-300 border-b border-slate-50"
                            style={{ opacity: opacity }}
                          >
                             <div className={`absolute inset-0 opacity-10 ${item.colors.title}`}></div>
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover pointer-events-none" />
                             
                             {/* Badge overlay */}
                             <div className="absolute top-4 right-4">
                                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider shadow-sm">
                                    WQMS
                                </span>
                             </div>
                          </div>
                          
                          {/* Content at Bottom */}
                          <div 
                            className="p-6 flex flex-col h-[55%] text-left flex-grow transition-opacity duration-300"
                            style={{ opacity: opacity }}
                          >
                            <div className="mb-4">
                                <h4 className={`text-xs font-bold uppercase tracking-wide mb-1 ${item.colors.text.replace('text-', 'text-opacity-80 ')}`}>
                                {item.id}
                                </h4>
                                <h3 className="font-bold text-slate-900 leading-tight text-lg md:text-xl line-clamp-2">
                                {item.name}
                                </h3>
                            </div>
                            
                            <div className="mt-auto">
                                <ul className="grid grid-cols-1 gap-y-2">
                                    {item.specs.map((spec, sIdx) => (
                                        <li key={sIdx} className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.colors.title}`}></div>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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

export default Sensors;
