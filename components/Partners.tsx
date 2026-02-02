
import React, { useEffect, useRef } from 'react';

const Partners: React.FC = () => {
  // Creating a set of 21 unique partner names/placeholders
  const partnerNames = [
    "EcoWater Solution", "GreenHydro Tech", "PureAqua Corp", "SmartRiver", "CleanWave",
    "BioWater Systems", "NatureGuard", "AquaLogic", "RiverSense", "FluxControl",
    "WaterPath", "EcoSense", "HydroMind", "UrbanPure", "WildStream",
    "OceanicAI", "EarthFilter", "ClearSpring", "BlueEdge", "LifeSource", "VitalWater"
  ];

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let positionRow1 = -50; // Start offset for Row 1
    let positionRow2 = 0;   // Start offset for Row 2
    let positionRow3 = -50; // Start offset for Row 3

    const speed = 0.02; // Movement speed per frame

    const animate = () => {
      // Row 1 & 3: Slide to Right (X increases)
      positionRow1 += speed;
      positionRow3 += speed;
      // If reached 0, loop back to -50% (because we duplicate the items)
      if (positionRow1 >= 0) positionRow1 = -50;
      if (positionRow3 >= 0) positionRow3 = -50;

      // Row 2: Slide to Left (X decreases)
      positionRow2 -= speed;
      // If reached -50%, loop back to 0
      if (positionRow2 <= -50) positionRow2 = 0;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translate3d(${positionRow1}%, 0, 0)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translate3d(${positionRow2}%, 0, 0)`;
      }
      if (row3Ref.current) {
        row3Ref.current.style.transform = `translate3d(${positionRow3}%, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const LogoRow = ({ items, rowRef }: { items: string[], rowRef: React.RefObject<HTMLDivElement | null> }) => (
    <div className="overflow-hidden py-4 border-b border-slate-100 last:border-0">
      <div 
        ref={rowRef}
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform', width: '200%' }}
      >
        {/* We duplicate the array to ensure seamless looping */}
        {[...items, ...items].map((name, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center px-12 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {name[0]}
              </div>
              <span className="text-xl font-bold text-slate-400 tracking-tight">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Divide the 21 partners into 3 groups of 7
  const group1 = partnerNames.slice(0, 7);
  const group2 = partnerNames.slice(7, 14);
  const group3 = partnerNames.slice(14, 21);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Network</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Dipercaya oleh Institusi Terkemuka</h2>
          </div>
          <p className="text-slate-500 max-w-md md:text-right">
            Telah bekerja sama dengan lebih dari 20+ mitra strategis di seluruh Indonesia untuk solusi lingkungan yang lebih baik.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for the edges to make it look smooth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <LogoRow items={group1} rowRef={row1Ref} />
        <LogoRow items={group2} rowRef={row2Ref} />
        <LogoRow items={group3} rowRef={row3Ref} />
      </div>
    </div>
  );
};

export default Partners;
