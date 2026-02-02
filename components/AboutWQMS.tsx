
import React from 'react';

const AboutWQMS: React.FC = () => {
  const parameters = ['COD', 'BOD', 'DO', 'TSS', 'ORP', 'pH', 'Suhu'];

  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://is3.cloudhost.id/blog.cems.id/2026/01/Untitled-1.jpg" 
            alt="Person handling WQMS sensor" 
            className="rounded-2xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Apa itu Water Quality Monitoring System
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Water Quality Monitoring System (WQMS) adalah perangkat yang dirancang untuk melakukan pemantauan kualitas air secara terus menerus. Sistem ini mengukur berbagai parameter penting dalam air untuk membantu pengambilan keputusan yang tepat dalam menjaga kualitas lingkungan.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {parameters.map(param => (
              <span key={param} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm">
                {param}
              </span>
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed italic">
            "Dengan memonitor parameter-parameter ini, WQMS memungkinkan individu, perusahaan, pemerintah, dan institusi tertentu untuk mengambil keputusan yang tepat dalam menjaga dan meningkatkan kualitas air."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWQMS;
