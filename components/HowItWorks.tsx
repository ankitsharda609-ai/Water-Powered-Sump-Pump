
import React from 'react';
import { MousePointer2, Settings, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-vibrant-gradient rounded-3xl p-2 shadow-2xl">
              <img 
                src="https://picsum.photos/id/401/800/600" 
                alt="Plumbing system detail" 
                className="rounded-[1.4rem] w-full h-full object-cover"
              />
            </div>
            {/* Overlay stats */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-black text-blue-600">0.0W</div>
              <div className="text-slate-500 font-bold">Electricity Used</div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">The Magic of Water Pressure</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Known as the "Venturi Effect," our pumps use city water to create a high-speed jet that pulls basement water into the discharge pipe.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Water In</h4>
                  <p className="text-slate-600">Your home's city water supply is connected to the backup pump valve.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Siphon Action</h4>
                  <p className="text-slate-600">When the float rises, water flows through the pump, creating a powerful vacuum.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Discharge</h4>
                  <p className="text-slate-600">Both the city water and your basement water are safely pumped outside.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
