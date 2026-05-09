import { Shield, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div>
            <a href="/" className="flex items-center mb-8 group">
              <img 
                src="/logo-engiser.png" 
                alt="ENGISER Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
              />
            </a>
            <p className="text-slate-500 text-[13px] leading-relaxed font-bold uppercase tracking-wider">
              Líderes en consultoría de seguridad e ingeniería contra incendios. Excelencia técnica y compromiso inquebrantable.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black text-slate-200 mb-8 uppercase tracking-[0.3em]">Empresa</h4>
            <ul className="space-y-4">
              {['Inicio', 'Sobre Nosotros', 'Misión y Visión', 'Valores'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 text-[13px] hover:text-white transition-colors font-black uppercase tracking-wider block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black text-slate-200 mb-8 uppercase tracking-[0.3em]">Servicios</h4>
            <ul className="space-y-4">
              {['Ingeniería Contra Incendios', 'Consultoría de Seguridad', 'Medio Ambiente', 'Mantenimiento'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 text-[13px] hover:text-white transition-colors font-black uppercase tracking-wider block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black text-slate-200 mb-8 uppercase tracking-[0.3em]">Síguenos</h4>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-slate-600 text-[10px] font-bold uppercase tracking-[0.15em]">
              Conéctate con nosotros para más novedades del sector.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} ENGISER S.A.C. · Ingeniería de Precisión
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
