
import React, { useState, useEffect } from 'react';
import { Waves, Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full px-6 sm:px-10 h-20 flex justify-between items-center transition-shadow ${scrolled ? 'shadow-2xl shadow-slate-200/50' : ''}`}>
          
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2 rounded-xl">
              <Waves className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              AQUA<span className="text-blue-600">SHIELD</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#how-it-works" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Tech</a>
            <a href="#benefits" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Benefits</a>
            <a href="#contact" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">Location</a>
            <a 
              href="tel:8443406413" 
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-black text-sm flex items-center gap-2 hover:bg-slate-900 transition-all shadow-lg shadow-blue-200"
            >
              (844) 340-6413
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 bg-slate-50 rounded-full">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 mx-4 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="px-8 py-10 space-y-6">
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900">The Tech</a>
            <a href="#benefits" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900">Why Us</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900">Find Us</a>
            <a 
              href="tel:8443406413" 
              className="w-full bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Call (844) 340-6413
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
