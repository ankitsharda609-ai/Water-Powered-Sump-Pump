
import React from 'react';
import { BatteryLow, CloudRain, Clock, ShieldCheck, Wrench, ZapOff } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, rotate }: { icon: any, title: string, description: string, rotate: string }) => (
  <div className={`bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${rotate}`}>
    <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-full flex items-center justify-center mb-8 border border-slate-100">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
              Because batteries <br />
              <span className="text-blue-600 italic">eventually fail.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-lg text-slate-500 font-medium pb-2 border-l-4 border-blue-600 pl-6">
              Battery backups are basically fancy paperweights after 6 hours of rain. Our siphons run as long as the city water stays on.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            rotate="hover:-rotate-1"
            icon={ZapOff}
            title="Grid-Independent"
            description="Power outage? Transformer blew? Doesn't matter. If your kitchen faucet has water, your basement is safe."
          />
          <FeatureCard 
            rotate="hover:rotate-1 mt-8 md:mt-0"
            icon={BatteryLow}
            title="Zero Dead Cells"
            description="No more hearing that 'battery low' beep in the middle of a midnight thunderstorm. No acid, no maintenance, no worries."
          />
          <FeatureCard 
            rotate="hover:-rotate-1 lg:mt-12"
            icon={CloudRain}
            title="1,320 GPH Pull"
            description="Don't let the 'siphon' name fool you. This is heavy-duty equipment that moves massive amounts of water fast."
          />
          <FeatureCard 
            rotate="hover:rotate-1"
            icon={Clock}
            title="Set & Forget"
            description="Install it once, then forget it exists. Until that one day you need it, and it works perfectly without a second thought."
          />
          <FeatureCard 
            rotate="hover:-rotate-1"
            icon={ShieldCheck}
            title="The 200 E Berry Std."
            description="We're locals. We know the Allen County soil and the specific flood zones that catch Fort Wayne owners off guard."
          />
          <FeatureCard 
            rotate="hover:rotate-1"
            icon={Wrench}
            title="Pro-Grade Fit"
            description="We don't do 'DIY-style' installs. Our setups are clean, labeled, and built to outlast the house itself."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
