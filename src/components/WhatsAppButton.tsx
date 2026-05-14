import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const WhatsAppButton = () => {
  const phoneNumber = '51950267871';
  const message = encodeURIComponent('Hola ENGISER, me gustaría solicitar una cotización para un proyecto.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors group flex items-center gap-2 border-4 border-white/20 backdrop-blur-sm"
      aria-label="Contactar por WhatsApp"
    >
      <div className="hidden md:group-hover:block whitespace-nowrap px-2 font-bold text-[10px] uppercase tracking-widest overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-xs">
        ¿Cómo podemos ayudarte?
      </div>
      <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />
    </motion.a>
  );
};

export default WhatsAppButton;
