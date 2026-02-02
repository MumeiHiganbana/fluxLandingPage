
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczPuIonjEl2UXUKZnpFDRwBOl8Yq3f8BVRfxDvS0Ku6lpO_3t5zRB8hVvfBcEqsvCtZzueEeBe6-d2arQbBjNa-cFC9wJxQViqmELWwUzT0SEzTTSJIL8Hn8BkqdCqDYIrtXhTwwFMseXn4vZsk-hKAzvA=w957-h957-s-no-gm?authuser=0" 
            alt="WQMS Logo" 
            className="w-28 h-28 rounded-full object-cover shadow-sm"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Sensors', 'Support'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
            Hubungi Kami
          </button>
        </div>

        <button className="md:hidden">
          <svg className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
