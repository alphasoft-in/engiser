import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Hubo un error al conectar con el servidor.');
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-white pt-4 md:pt-10 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-orange-600"></div>
                <h2 className="text-[11px] font-semibold text-orange-600 uppercase tracking-[0.3em]">Contacto Directo</h2>
                <div className="w-10 h-[2px] bg-orange-600 lg:hidden"></div>
              </div>

              <h3 className="text-xl md:text-3xl font-extrabold font-outfit mb-6 leading-[1.1] text-slate-900 tracking-tight text-center lg:text-left">
                ¿Listo para <span className="text-gradient">Empezar?</span>
              </h3>
              
              <p className="text-slate-500 text-[13px] md:text-base mb-6 leading-relaxed max-w-lg font-medium text-center lg:text-left">
                Contáctenos hoy mismo para recibir asesoría técnica especializada. <span className="text-slate-900 font-bold">Soluciones de ingeniería a su medida.</span>
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Llámanos', value: ['950 267 871', '934 581 856'], sub: 'Atención Especializada' },
                { icon: Mail, title: 'Escríbenos', value: ['ventas@engiser.com.pe'], sub: 'Cotizaciones rápidas' },
                { icon: MapPin, title: 'Nuestras Sedes', value: ['Lima, Chimbote, Huacho, Trujillo, Chiclayo y Piura.'], sub: 'Cobertura a nivel nacional' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-200 transition-all duration-500">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-orange-200 transition-colors duration-500 flex-shrink-0">
                    <item.icon className="text-orange-600 w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    {item.value.map((v, idx) => (
                      <p key={idx} className="text-slate-900 font-semibold text-[11px] md:text-[12px] tracking-tight leading-tight">{v}</p>
                    ))}
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
            <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="mb-8 text-center sm:text-left">
                <h4 className="text-slate-900 font-extrabold text-lg md:text-2xl tracking-tight mb-2">Solicitar Información</h4>
                <div className="w-10 h-[2px] bg-orange-600 mx-auto sm:mx-0 mb-4"></div>
                <p className="text-slate-500 text-[11px] font-semibold">Complete el formulario y nos pondremos en contacto pronto.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-900 font-medium text-sm"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest ml-1">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-900 font-medium text-sm"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest ml-1">Asunto del Proyecto</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-900 font-medium"
                    placeholder="¿Cómo podemos colaborar?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest ml-1">Mensaje Detallado</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all resize-none text-slate-900 font-medium text-sm"
                    placeholder="Describa sus necesidades..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-[11px] font-bold">{message}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[11px] font-bold">{message}</span>
                  </motion.div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`btn-primary w-full flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-orange-600/20 group whitespace-nowrap transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                  {status !== 'loading' && <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
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
