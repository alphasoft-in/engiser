import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  currentPage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, currentPage }) => {
  return (
    <section className="relative h-[25vh] sm:h-[30vh] md:h-[25vh] lg:h-[40vh] min-h-[180px] sm:min-h-[250px] md:min-h-[200px] lg:min-h-[350px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/header-bg.avif"
          alt="Engineering Background"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-white tracking-normal italic leading-normal overflow-visible">
            {title.split(' ').map((word, i) => (
              <span 
                key={i} 
                className={`${i === 0 ? '' : 'text-gradient'} inline-block pr-4 overflow-visible`}
              >
                {word}
              </span>
            ))}
          </h1>
          
          {/* Accent Line */}
          <div className="w-16 h-1 bg-orange-600 mt-4 sm:mt-8 rounded-full shadow-lg shadow-orange-600/50 mx-auto" />
        </motion.div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default PageHeader;
