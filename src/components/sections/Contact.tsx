import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="relative overflow-hidden bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-orange-600"></div>
              <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.3em]">Contacto Directo</h2>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-8 leading-[1.1] text-slate-900 tracking-tight">
              ¿Listo para <span className="text-gradient">Empezar?</span>
            </h3>
            
            <p className="text-slate-500 text-base md:text-lg mb-12 leading-relaxed max-w-lg font-medium">
              Contáctenos hoy mismo para recibir asesoría técnica especializada. <span className="text-slate-900 font-bold">Soluciones de ingeniería a su medida.</span>
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Llámanos', value: '+51 987 654 321', sub: 'Atención Lun - Vie' },
                { icon: Mail, title: 'Escríbenos', value: 'contacto@engiser.com', sub: 'Respuesta rápida' },
                { icon: MapPin, title: 'Ubicación', value: 'Lima, Perú', sub: 'Servicio Nacional' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-200 transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-orange-200 transition-colors duration-500">
                    <item.icon className="text-orange-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-slate-900 font-black text-sm md:text-base tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-900 font-medium"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Correo Electrónico</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-900 font-medium"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Asunto del Proyecto</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-900 font-medium"
                    placeholder="¿Cómo podemos colaborar?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mensaje Detallado</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all resize-none text-slate-900 font-medium"
                    placeholder="Describa sus necesidades..."
                  ></textarea>
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-sm uppercase tracking-[0.2em] shadow-xl shadow-orange-600/20 group">
                  Enviar Mensaje
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
