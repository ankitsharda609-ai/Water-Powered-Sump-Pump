
import React from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-12 hidden lg:block">
             <div className="bg-blue-600/10 border border-blue-400/20 text-blue-400 rounded-full px-6 py-3 font-bold text-sm backdrop-blur-md">
                Fort Wayne Headquarters
             </div>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-12 lg:p-24 space-y-12">
              <div>
                <h2 className="text-5xl font-black text-white mb-8">Let's dry it up.</h2>
                <p className="text-slate-400 text-xl font-medium max-w-md">
                  We're at 200 E Berry St, right in the heart of downtown. We cover every corner of Allen County.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Our HQ</h4>
                    <p className="text-slate-400 font-medium">200 E Berry St<br />Fort Wayne, IN 46802</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Emergency Line</h4>
                    <a href="tel:8443406413" className="text-blue-400 hover:text-white transition-colors text-2xl font-black italic tracking-tight">(844) 340-6413</a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h5 className="text-white font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  Service Areas Include:
                </h5>
                <div className="flex flex-wrap gap-3">
                  {["Waynedale", "New Haven", "Huntertown", "Grabill", "Leo-Cedarville", "Aboite"].map(area => (
                    <span key={area} className="bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-sm font-bold">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[500px] bg-slate-800 border-l border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800" 
                alt="Safe Residential House" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                   <Clock className="text-blue-400" />
                   <span className="text-white font-bold uppercase tracking-widest text-xs">Response Time</span>
                </div>
                <div className="text-3xl font-black text-white italic">Under 60 Mins</div>
                <p className="text-slate-400 text-sm mt-2 font-medium">Average emergency dispatch time for Allen County residential calls.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
