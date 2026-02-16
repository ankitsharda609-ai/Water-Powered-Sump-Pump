
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ContactInfo from './components/ContactInfo';
import GeminiAssistant from './components/GeminiAssistant';
import { ShieldCheck, Phone, Waves, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Waves className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              AQUA<span className="text-blue-600">SHIELD</span>
            </span>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            Fort Wayne's leading provider of water-powered emergency sump pump solutions. Protecting basements since 2012.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-slate-900">Services</h4>
          <ul className="space-y-4 text-slate-600">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Backup Pump Install</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Siphon Maintenance</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Flood Prevention</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">System Inspection</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-slate-900">Company</h4>
          <ul className="space-y-4 text-slate-600">
            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Reviews</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} AquaShield Emergency Sump Pumps. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <ShieldCheck size={16} className="text-green-500" />
          Fully Insured & Licensed in Indiana
        </div>
      </div>
    </div>
  </footer>
);

const CallToAction = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-600"></div>
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-10">
      <h2 className="text-4xl lg:text-6xl font-black text-white">
        Don't Wait For The <br /> Next Big Storm.
      </h2>
      <p className="text-xl text-blue-100 font-medium">
        Install a water-powered backup pump today and never worry about power outages again.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="tel:8443406413" 
          className="bg-white text-blue-600 px-10 py-6 rounded-2xl font-black text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-2xl"
        >
          <Phone size={24} />
          (844) 340-6413
        </a>
        <div className="text-white/80 font-bold">Available 24/7 for Emergencies</div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ContactInfo />
        <CallToAction />
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
};

export default App;
