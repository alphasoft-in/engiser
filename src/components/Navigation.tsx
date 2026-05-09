import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ChevronDown, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Equipos', href: '/equipos' },
    { 
      name: 'Servicios', 
      href: '/servicios',
      dropdown: [
        { name: 'Seguridad y Salud (Ley 29783)', href: '/servicios/seguridad-salud' },
        { name: 'Redes Contra Incendios', href: '/servicios/redes-incendios' },
        { name: 'Seguridad en Construcción', href: '/servicios/seguridad-construccion' },
        { name: 'Mantenimiento de Extintores', href: '/servicios/mantenimiento-extintores' },
        { name: 'Monitoreo Ocupacional', href: '/servicios/monitoreo-ocupacional' },
        { name: 'Detección de Incendios', href: '/servicios/deteccion-incendios' },
        { name: 'Seguridad Electrónica', href: '/servicios/seguridad-electronica' },
        { name: 'Gestión Ambiental', href: '/servicios/gestion-ambiental' },
        { name: 'Servicios Generales', href: '/servicios/servicios-generales' },
        { name: 'Alquiler de Transporte', href: '/servicios/alquiler-transporte' },
      ]
    },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl border-slate-200 shadow-lg' 
          : 'py-5 bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center group py-1"
        >
          <img 
            src="/logo-engiser.png" 
            alt="ENGISER Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link, i) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.a
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-1 text-[11px] lg:text-[13px] font-black uppercase tracking-widest transition-colors relative py-2 ${
                  isActive(link.href) ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-orange-600 rounded-full transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 mt-2"
                  >
                    <div className="flex flex-col gap-2">
                      {link.dropdown.map((item) => {
                  const isItemActive = isActive(item.href);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center justify-between px-6 py-4 text-[10px] font-black transition-all duration-300 uppercase tracking-widest border-l-4 ${
                        isItemActive 
                          ? 'text-orange-600 bg-orange-50/50 border-orange-600' 
                          : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-orange-600 hover:border-orange-600/30'
                      }`}
                    >
                      {item.name}
                      {isItemActive && (
                        <motion.div 
                          layoutId="activeSubmenu"
                          className="w-1.5 h-1.5 rounded-full bg-orange-600 shadow-lg shadow-orange-600/50"
                        />
                      )}
                    </a>
                  );
                })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <motion.a
            href="https://wa.me/51900000000?text=Hola%20ENGISER,%20me%20gustaría%20solicitar%20una%20cotización%20para%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-2.5 px-6 lg:px-8 text-[11px] uppercase tracking-widest font-bold flex items-center justify-center gap-2"
          >
            Cotizar Proyecto
            <MessageCircle className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-black uppercase tracking-wider text-slate-800 hover:text-orange-600 flex items-center justify-between"
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="mt-4 ml-4 flex flex-col gap-3 border-l-2 border-orange-100 pl-4">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-bold text-slate-500 hover:text-orange-600 uppercase tracking-widest"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a 
                href="https://wa.me/51900000000?text=Hola%20ENGISER,%20me%20gustaría%20solicitar%20una%20cotización%20para%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-2 flex items-center justify-center gap-2"
              >
                Cotizar Ahora
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
