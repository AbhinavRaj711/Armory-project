import PricingMatrix from '@/components/PricingMatrix';
import BentoAccordion from '@/components/BentoAccordion';
import ScrollReveal from '@/components/ScrollReveal';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-forsythia selection:text-oceanic-noir overflow-hidden">
      
      {/* NAVIGATION - Premium blur effect */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-tight text-white" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            ARMORY<span className="text-forsythia">.AI</span>
          </div>
          <button className="px-5 py-2 text-sm md:text-base bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Start Free
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Cinematic spacing and massive responsive text */}
      <section className="relative pt-40 md:pt-52 pb-24 md:pb-40 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[90vh]">
        <ScrollReveal delay={0}>
          <p className="text-forsythia uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6">
            Next-Gen Intelligence
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-white">
            Automate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
              the impossible.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Deploy custom enterprise agents without writing a single line of code. The future of your legacy stack is here.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
              Deploy Agent Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-semibold text-lg hover:border-gray-400 transition-colors">
              Read the Docs
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* BENTO GRID SECTION - Staggered reveals */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              A brain for <br className="md:hidden" /> every workflow.
            </h2>
            <p className="text-gray-400 md:text-xl max-w-xl">
              Seamlessly transition between desktop-class power and mobile-first agility.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <BentoAccordion />
        </ScrollReveal>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Infinite scale. <br /> Predictable cost.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <PricingMatrix />
        </ScrollReveal>
      </section>

    </main>
  );
}