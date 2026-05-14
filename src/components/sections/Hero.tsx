import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

const Hero = () => {
  return (
    <section className="relative flex flex-col pt-20 md:pt-24 pb-12 md:pb-20 lg:min-h-[800px] justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.avif"
          alt="Fire Engineering Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 sm:via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col pt-10 md:pt-12 pb-8 md:pb-10">
        <div className="max-w-4xl mt-0 w-full overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-orange-500/20 w-fit mb-6 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-orange-700 text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.2em]">
              Líderes en Ingeniería Contra Incendios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[24px] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-6xl font-black font-outfit leading-[1.15] mb-6 text-slate-900 tracking-tight"
          >
            Protegiendo su <br />
            <span className="text-gradient drop-shadow-sm">Futuro con Excelencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[14px] sm:text-lg md:text-xl text-slate-900 mb-10 md:mb-12 max-w-2xl leading-relaxed font-black sm:font-medium drop-shadow-sm"
          >
            Especialistas en consultoría de seguridad, medio ambiente y soluciones integrales de <span className="text-orange-600 font-black underline decoration-orange-500/30">ingeniería contra incendios</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a 
              href="https://wa.me/51950267871?text=Hola%20ENGISER,%20me%20gustaría%20solicitar%20una%20asesoría%20sobre%20sus%20servicios." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 group px-6 sm:px-8 py-4 sm:py-5 text-[11px] sm:text-[12px] uppercase tracking-widest shadow-xl shadow-orange-600/30"
            >
              Asesoría WhatsApp
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="/equipos" 
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 text-[11px] sm:text-[12px] uppercase tracking-widest bg-white/80 backdrop-blur-sm border-slate-200 hover:border-orange-500/50 hover:bg-white transition-all duration-300"
            >
              Catálogo Equipos
              <Zap className="w-5 h-5 text-orange-600" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-12 pt-6 border-t border-orange-500/30"
        >
          {[
            { label: 'Años de Experiencia', value: '15+' },
            { label: 'Proyectos Exitosos', value: '200+' },
            { label: 'Cumplimiento Normativo', value: '100%' },
            { label: 'Clientes Satisfechos', value: '500+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-2xl md:text-3xl font-black text-slate-900 mb-0.5 font-outfit tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-[11px] text-slate-900 font-bold uppercase tracking-widest leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] animate-pulse" />
    </section>
  );
};

export default Hero;
