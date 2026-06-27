// components/BentoAccordion.tsx
'use client';
import { useState } from 'react';

const features = [
  { id: 0, title: "Neural Sync", text: "Migrate entire neural pipelines to edge nodes with zero downtime." },
  { id: 1, title: "Semantic Ops", text: "Node-based builder makes complex agent behaviors accessible." },
  { id: 2, title: "Precision Hooks", text: "Monitor agent accuracy in real-time within your workflow." }
];

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="font-mono text-4xl mb-12 text-center text-arctic-powder">Engineered for Autonomy</h2>
      
      {/* CSS-driven layout reflow. Desktop: Bento Grid. Mobile: Flex Column */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {features.map((feat) => {
          const isActive = activeIndex === feat.id;
          
          return (
            <div 
              key={feat.id}
              onMouseEnter={() => setActiveIndex(feat.id)}
              onClick={() => setActiveIndex(isActive ? null : feat.id)}
              className={`
                group cursor-pointer rounded-xl overflow-hidden transition-all duration-400 ease-spring
                border border-mystic-mint/10
                ${isActive ? 'bg-nocturnal shadow-xl md:col-span-2' : 'bg-oceanic-noir hover:bg-nocturnal/50 md:col-span-1'}
              `}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-mono text-xl text-arctic-powder">{feat.title}</h3>
                  {/* Chevron Icon (Fallback SVG implementation) */}
                  <svg 
                    className={`w-5 h-5 text-deep-saffron transform transition-transform duration-300 md:hidden ${isActive ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {/* Accordion Expansion Logic (Pure CSS via max-height and opacity) */}
                <div 
                  className={`
                    transition-all duration-400 ease-spring overflow-hidden
                    ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100'}
                  `}
                >
                  <p className="text-mystic-mint/80 mt-2">{feat.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}