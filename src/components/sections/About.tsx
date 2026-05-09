import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Trophy, Users, Award, ShieldCheck, Heart } from 'lucide-react';

interface AboutProps {
  showFull?: boolean;
}

const About: React.FC<AboutProps> = ({ showFull = true }) => {
  const cards = [
    {
      title: 'Misión',
      description: 'ENGISER es una empresa que ofrece oportunidades de desarrollo profesional y humano a sus colaboradores, buscando el perfeccionamiento de sus capacidades y su bienestar permanente. El resultado de la formación y consolidación de este grupo humano son los servicios de alta calidad caracterizados por la gran responsabilidad social, medio ambiente, manejo de riesgos, salud y seguridad a nuestros clientes, mediante un soporte profesional con excelencia, ética, innovación, creatividad y de alta calidad.',
      icon: Rocket,
    },
    {
      title: 'Visión',
      description: 'Consolidarnos como la empresa líder en servicios de Asesoría, Consultoría en Materia de Seguridad, Medio Ambiente, Calidad, Responsabilidad Social, Ingeniería contra Incendios y Proyectos de Ingeniería, brindando servicios de excelencia con el mejor equipo humano y tecnología. Proporcionamos a nuestros clientes la satisfacción de sus requerimientos a través de la correcta aplicación de la información procesada y de herramientas tecnológicas que les permita aumentar su competitividad y rentabilidad.',
      icon: Trophy,
    },
  ];

  const values = [
    { name: 'Responsabilidad', icon: ShieldCheck },
    { name: 'Lealtad', icon: Heart },
    { name: 'Honestidad', icon: Award },
    { name: 'Trabajo en Equipo', icon: Users },
  ];

  return (
    <section id="nosotros" className="relative overflow-hidden bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-orange-600"></div>
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.3em]">Nuestra Identidad</h2>
            <div className="w-8 h-[2px] bg-orange-600"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-8 text-slate-900 leading-tight tracking-tight"
          >
            Expertos <span className="text-gradient">Multidisciplinarios</span> <br /> a su Servicio
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
              ENGISER es una empresa dedicada a desarrollar actividades de consultoría, ingeniería contra incendios, seguridad, medio ambiente, calidad, responsabilidad social y <span className="text-slate-900 font-bold">Limpieza Mantenimiento y servicios generales.</span>
            </p>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
              Contamos con <span className="text-slate-900 font-bold">profesionales especialistas multidisciplinarios</span> que a su vez son formados sobre la base del trabajo en equipo, con responsabilidad, lealtad y honestidad.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision - Now above Values */}
        {showFull && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-orange-600/5 transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:border-orange-200 transition-colors duration-500">
                    <card.icon className="text-orange-600 w-8 h-8" />
                  </div>
                  <h4 className="text-xs font-black text-orange-600 uppercase tracking-[0.4em] mb-4">Nuestra {card.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium italic">
                    "{card.description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Values - Now at the bottom of the section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {values.map((value, i) => (
            <div
              key={value.name}
              className="bg-slate-50/50 py-3 px-4 rounded-xl border border-slate-100 flex items-center gap-4 group hover:bg-white hover:shadow-lg hover:shadow-slate-200 transition-all duration-500"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:border-orange-200 transition-colors duration-500 border border-slate-100 flex-shrink-0">
                <value.icon className="text-orange-600 w-4 h-4" />
              </div>
              <span className="font-black text-[9px] uppercase tracking-[0.2em] text-slate-900">{value.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
