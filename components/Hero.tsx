
import React from 'react';
import { ShieldAlert, ZapOff, Droplets, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-2 text-blue-600 font-bold tracking-wide uppercase text-xs">
              <span className="w-8 h-[1px] bg-blue-600"></span>
              24/7 Fort Wayne Emergency Response
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Stop coming home <br />
              to a <span className="text-blue-600 italic hand-drawn-underline">basement pool.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Look, Fort Wayne storms aren't polite. When the power goes out, your sump pump stops. Our water-powered backups use your own city pressure to keep your home bone-dry—without batteries, electricity, or stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="tel:8443406413"
                className="bg-slate-900 text-white px-10 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-2xl hover:-translate-y-1"
              >
                Schedule Install
                <ArrowRight size={20} />
              </a>
              <div className="flex flex-col justify-center px-4">
                <div className="flex gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold text-slate-500">"Saved my life during the 2024 floods"</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 group">
              <div className="bg-slate-200 aspect-[4/5] rounded-[2rem] overflow-hidden organic-border transition-all duration-700 group-hover:rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Sump Pump Installation" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 rotate-6 group-hover:rotate-0 transition-transform">
                <div className="text-blue-600 font-black text-3xl italic leading-none">99.9%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Uptime Record</div>
              </div>
            </div>
            
            {/* Background elements to make it feel less "perfect" */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-20 -right-20 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
