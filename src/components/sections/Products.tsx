import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProductsProps {
  isHomePage?: boolean;
}

export default function Products({ isHomePage = false }: ProductsProps) {
  const allCategories = [
    { name: 'ACCESORIOS TÉCNICOS', img: '/images/cat_accesorios.png' },
    { name: 'BOMBAS PORTÁTILES', img: '/images/cat_bombas.png' },
    { name: 'SISTEMAS DE ALARMA CONTRA INCENDIOS', img: '/images/cat_detectores.png' },
    { name: 'EQUIPAMIENTO PARA RESCATE', img: '/images/cat_rescate.png' },
    { name: 'PROTECCIÓN RESPIRATORIA', img: '/images/cat_respiratoria.png' },
    { name: 'PROTECCIÓN PERSONAL', img: '/images/cat_personal.png' },
    { name: 'EXTINCIÓN DE INCENDIOS', img: '/images/cat_extincion.png' },
    { name: 'HERRAMIENTAS DE RESCATE', img: '/images/cat_herramientas.png' },
    { name: 'VENTILADORES ESPECIALES', img: '/images/cat_ventiladores.png' },
    { name: 'OTROS EN GENERAL', img: '/images/cat_otros.png' },
  ];

  // Show only 3 on home page, all 10 on the catalog page
  const highlights = isHomePage ? allCategories.slice(0, 3) : allCategories;

  return (
    <section id="equipos" className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[2px] bg-orange-600"></div>
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.3em]">Suministros e Insumos</h2>
            <div className="w-10 h-[2px] bg-orange-600"></div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-black font-outfit mb-6 leading-[1.1] text-slate-900 tracking-tight uppercase"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative justify-items-center">
          {highlights.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group w-full max-w-[280px]"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-orange-600 p-2 bg-white shadow-2xl group-hover:rotate-6 transition-transform duration-500 overflow-hidden">
                <img 
                  src={h.img} 
                  alt={h.name} 
                  className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500 mix-blend-multiply brightness-[1.02] contrast-[1.1]" 
                  style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 95%)', WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 95%)' }}
                />
              </div>
              <div className="mt-8 text-slate-900 text-[11px] md:text-[12px] font-black tracking-[0.25em] text-center uppercase group-hover:text-orange-600 transition-colors duration-300">
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
            className="mt-20 flex justify-center"
          >
            <a 
              href="/equipos" 
              className="group flex items-center gap-4 bg-slate-950 text-white px-12 py-5 rounded-full text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:bg-orange-600 transition-all duration-300"
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
