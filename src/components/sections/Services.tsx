import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, HardHat, Leaf, Settings, CheckCircle2, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: 'Ingeniería Contra Incendios',
      description: 'Diseño e implementación de sistemas avanzados de detección y extinción bajo normas internacionales NFPA.',
      features: ['Sistemas de Rociadores', 'Redes de Hidrantes', 'Bombas contra incendio']
    },
    {
      icon: HardHat,
      title: 'Consultoría de Seguridad',
      description: 'Asesoría integral en seguridad y salud ocupacional para garantizar entornos de trabajo libres de riesgos.',
      features: ['Auditorías de Seguridad', 'Planes de Contingencia', 'Mapas de Riesgos']
    },
    {
      icon: Leaf,
      title: 'Medio Ambiente',
      description: 'Evaluación y control de impactos ambientales para una operación sostenible y cumplimiento normativo.',
      features: ['Monitoreo Ambiental', 'Gestión de Residuos', 'Estudios de Impacto']
    },
    {
      icon: Settings,
      title: 'Mantenimiento General',
      description: 'Servicio preventivo y correctivo especializado para garantizar la operatividad de sus equipos de seguridad.',
      features: ['Mantenimiento de Sistemas', 'Recarga de Extintores', 'Pruebas Hidrostáticas']
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-orange-600"></div>
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.3em]">Nuestras Soluciones</h2>
            <div className="w-10 h-[2px] bg-orange-600"></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 tracking-tight leading-none mb-8 overflow-visible">
            Ingeniería de{' '}
            <span className="text-gradient italic inline-block pr-6 overflow-visible">Alto Nivel</span>
          </h3>
          <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
            Ofrecemos un portafolio integral de servicios especializados para proteger lo más valioso: la vida y la infraestructura de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-8 group-hover:scale-110 group-hover:border-orange-200 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                
                <h4 className="text-2xl font-black font-outfit text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-10 flex-grow">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-600" />
                      <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[11px] font-black text-orange-600 uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  Saber más
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
