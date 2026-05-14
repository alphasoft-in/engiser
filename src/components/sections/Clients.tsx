import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Tegestiona', logo: '/logo-tegestiona.avif' },
  { name: 'National', logo: '/logo-national.avif' },
  { name: 'Alcosa', logo: '/logo-alcosa.avif' },
  { name: 'ARA', logo: '/logo-ara.avif' },
  { name: 'Maresta', logo: '/logo-maresta.avif' },
  { name: 'Steels', logo: '/logo-steels.avif' },
  { name: 'Costagas', logo: '/logo-costagas.avif' },
  { name: 'Scharff', logo: '/logo-scharff.avif' },
];

const Clients = () => {
  // Double the array for the marquee effect
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-orange-600/30"></div>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Confían en nosotros</h2>
            <div className="w-8 h-[2px] bg-orange-600/30"></div>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold font-outfit text-slate-900 tracking-tight text-center">
            Empresas que garantizan su seguridad <br className="hidden md:block" />
            con <span className="text-orange-600">ENGISER</span>
          </h3>
        </div>

        <div className="relative group">
          {/* CSS Marquee */}
          <div className="flex overflow-hidden space-x-16 md:space-x-32 group py-4">
            <div className="flex space-x-16 md:space-x-32 animate-marquee whitespace-nowrap items-center">
              {duplicatedClients.map((client, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-500 pointer-events-none"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const span = document.createElement('span');
                        span.innerText = client.name;
                        span.className = 'text-slate-300 font-bold uppercase tracking-widest text-[10px]';
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradients */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Clients;
