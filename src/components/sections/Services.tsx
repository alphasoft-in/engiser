import React from 'react';
import { motion } from 'framer-motion';
import { Flame, HardHat, Leaf, Settings, CheckCircle2, ChevronRight, GraduationCap, Droplets } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: 'Ingeniería Contra Incendios',
      description: 'Diseño e implementación de sistemas avanzados de detección y extinción bajo normas internacionales NFPA.',
      features: ['Sistemas de Rociadores', 'Redes de Hidrantes', 'Bombas contra incendio'],
      link: '/servicios/redes-incendios'
    },
    {
      icon: HardHat,
      title: 'Consultoría de Seguridad',
      description: 'Asesoría integral en seguridad y salud ocupacional para garantizar entornos de trabajo libres de riesgos.',
      features: ['Auditorías de Seguridad', 'Planes de Contingencia', 'Mapas de Riesgos'],
      link: '/servicios/seguridad-salud'
    },
    {
      icon: Leaf,
      title: 'Medio Ambiente',
      description: 'Evaluación y control de impactos ambientales para una operación sostenible y cumplimiento normativo.',
      features: ['Monitoreo Ambiental', 'Gestión de Residuos', 'Estudios de Impacto'],
      link: '/servicios/gestion-ambiental'
    },
    {
      icon: Settings,
      title: 'Mantenimiento General',
      description: 'Servicio preventivo y correctivo especializado para garantizar la operatividad de sus equipos de seguridad.',
      features: ['Mantenimiento de Sistemas', 'Recarga de Extintores', 'Pruebas Hidrostáticas'],
      link: '/servicios/servicios-generales'
    },
    {
      icon: GraduationCap,
      title: 'Capacitaciones',
      description: 'Capacitamos a tus colaboradores de acuerdo a tus necesidades, buscando la mejora continua.',
      features: ['Primeros Auxilios', 'Lucha Contra Incendios', 'Seguridad Industrial'],
      link: '/servicios/capacitaciones-seguridad-industrial'
    },
    {
      icon: Droplets,
      title: 'Saneamiento Ambiental',
      description: 'Eliminamos y erradicamos todo tipo de plaga, logrando un entorno limpio y saludable.',
      features: ['Control de Plagas', 'Desinfección Ambientes', 'Limpieza de Tanques'],
      link: '/servicios/saneamiento-ambiental'
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
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black font-outfit text-slate-900 tracking-tight leading-none mb-8 overflow-visible">
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
              className="group p-6 sm:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
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

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                  <a 
                    href={service.link}
                    className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-orange-600 uppercase tracking-[0.2em] transition-colors group/link"
                  >
                    Saber más
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href={`https://wa.me/51950267871?text=Hola%20ENGISER,%20me%20gustaría%20consultar%20sobre%20el%20servicio%20de%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 w-full sm:w-auto bg-orange-600 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40"
                  >
                    Consultar ahora
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
