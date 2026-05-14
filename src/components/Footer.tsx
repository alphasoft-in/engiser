import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-12 sm:pt-20 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center mb-6 group">
              <img 
                src="/logo-engiser.avif" 
                alt="ENGISER Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-0 invert" 
              />
            </a>
            <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-wider">
              Líderes en consultoría de seguridad e ingeniería contra incendios. Excelencia técnica y compromiso inquebrantable.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black text-slate-200 mb-2 uppercase tracking-[0.3em]">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-slate-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                <span className="text-slate-300 block">Sede Lima:</span>
                Jr. Rebeca Oquendo 371 Of. 501, Breña
              </li>
              <li className="text-slate-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                <span className="text-slate-300 block">Sede Chimbote:</span>
                Urb. Villas de la pradera de Nvo. Chimbote
              </li>
              <li className="text-slate-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                <span className="text-slate-300 block">Central:</span>
                950 267 871 / 934 581 856
              </li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black text-slate-200 mb-2 uppercase tracking-[0.3em]">Servicios</h4>
            <ul className="space-y-2">
              {['Contra Incendios', 'Seguridad Electrónica', 'Saneamiento Ambiental', 'Capacitaciones'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 text-[11px] hover:text-white transition-colors font-bold uppercase tracking-wider block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black text-slate-200 mb-2 uppercase tracking-[0.3em]">Síguenos</h4>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, Linkedin, WhatsAppIcon].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 3 ? "https://wa.me/51950267871" : "#"}
                  target={i === 3 ? "_blank" : undefined}
                  rel={i === 3 ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-slate-600 text-[9px] font-bold uppercase tracking-[0.15em]">
              Conéctate con nosotros para más novedades del sector.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} ENGISER · O & C ENGINEERING SERVICES E.I.R.L. · RUC: 20569252793
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
