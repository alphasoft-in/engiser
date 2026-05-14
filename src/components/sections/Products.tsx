import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProductsProps {
  isHomePage?: boolean;
}

export default function Products({ isHomePage = false }: ProductsProps) {
  const allCategories = [
    { name: 'ACCESORIOS TÉCNICOS', img: '/images/cat_accesorios.avif' },
    { name: 'BOMBAS PORTÁTILES', img: '/images/cat_bombas.avif' },
    { name: 'SISTEMAS DE ALARMA CONTRA INCENDIOS', img: '/images/cat_detectores.avif' },
    { name: 'EQUIPAMIENTO PARA RESCATE', img: '/images/cat_rescate.avif' },
    { name: 'PROTECCIÓN RESPIRATORIA', img: '/images/cat_respiratoria.avif' },
    { name: 'PROTECCIÓN PERSONAL', img: '/images/cat_personal.avif' },
    { name: 'EXTINCIÓN DE INCENDIOS', img: '/images/cat_extincion.avif' },
    { name: 'HERRAMIENTAS DE RESCATE', img: '/images/cat_herramientas.avif' },
    { name: 'VENTILADORES ESPECIALES', img: '/images/cat_ventiladores.avif' },
    { name: 'OTROS EN GENERAL', img: '/images/cat_otros.avif' },
  ];

  // Show only 3 on home page, all 10 on the catalog page
  const highlights = isHomePage ? allCategories.slice(0, 3) : allCategories;

  return (
    <section id="equipos" className="bg-white pt-12 md:pt-10 pb-12 md:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[2px] bg-orange-600"></div>
            <h2 className="text-[11px] font-semibold text-orange-600 uppercase tracking-[0.3em]">Suministros e Insumos</h2>
            <div className="w-10 h-[2px] bg-orange-600"></div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-extrabold font-outfit mb-6 leading-[1.1] text-slate-900 tracking-tight"
          >
            Venta de Equipos de <br />
            <span className="text-gradient">Rescate y Contra Incendios</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-2xl"
          >
            Nuestra empresa ofrece la comercialización de insumos y equipos para laboratorios, instrumentos de medición y control, equipos médicos de primeros auxilios e implementos de protección personal para rescate.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-10 lg:gap-y-16 gap-x-6 lg:gap-x-12 relative justify-items-center">
          {highlights.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group w-full max-w-[280px]"
            >
              <div className="relative w-40 h-40 sm:w-48 md:w-44 lg:w-56 sm:h-48 md:h-44 lg:h-56 rounded-full border-4 border-orange-600 p-2 bg-white shadow-2xl group-hover:rotate-6 transition-transform duration-500 overflow-hidden">
                <img 
                  src={h.img} 
                  alt={h.name} 
                  className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500 mix-blend-multiply brightness-[1.02] contrast-[1.1]" 
                  style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 95%)', WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 95%)' }}
                />
              </div>
              <div className="mt-4 sm:mt-8 text-slate-900 text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-center uppercase group-hover:text-orange-600 transition-colors duration-300">
                {h.name}
                <div className="w-0 h-0.5 bg-orange-600 mx-auto mt-2 group-hover:w-12 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
          {/* Decorative Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/5 rounded-full blur-[150px] -z-10" />
        </div>

        {/* Call to Action Button - Only on Home Page */}
        {isHomePage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <a 
              href="/equipos" 
              className="inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-orange-600 transition-all duration-300 group shadow-xl shadow-slate-950/20"
            >
              Ver Catálogo Completo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
