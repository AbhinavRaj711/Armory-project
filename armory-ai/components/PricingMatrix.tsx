// components/PricingMatrix.tsx
'use client';
import { useEffect, useRef } from 'react';

// Multi-dimensional Configuration Matrix
const matrix = {
  base: { starter: 49, pro: 149, scale: 499 },
  multipliers: { USD: 1, EUR: 0.92, INR: 83.5 },
  symbols: { USD: '$', EUR: '€', INR: '₹' },
  annualDiscount: 0.8 // Flat 20% discount[cite: 4, 7]
};

// Vanilla PubSub Store to bypass React Global Renders
const stateStore = {
  currency: 'USD',
  cycle: 'monthly',
  listeners: new Set<() => void>(),
  set(key: 'currency' | 'cycle', val: string) {
    this[key] = val as any;
    this.listeners.forEach(fn => fn());
  },
  subscribe(fn: () => void) {
    this.listeners.add(fn);
    
    // FIX: We added curly braces here so it returns void instead of a boolean!
    return () => {
      this.listeners.delete(fn);
    };
  }
};

// Highly isolated text node component
const IsolatedPriceNode = ({ tier }: { tier: 'starter' | 'pro' | 'scale' }) => {
  const priceRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return stateStore.subscribe(() => {
      if (!priceRef.current) return;
      const { currency, cycle } = stateStore;
      const base = matrix.base[tier];
      const rate = matrix.multipliers[currency as keyof typeof matrix.multipliers];
      const mult = cycle === 'annual' ? matrix.annualDiscount : 1;
      const symbol = matrix.symbols[currency as keyof typeof matrix.symbols];
      
      const finalPrice = Math.floor(base * rate * mult);
      priceRef.current.textContent = `${symbol}${finalPrice}`;
    });
  }, [tier]);

  return <span ref={priceRef} className="font-mono text-5xl font-bold text-forsythia">$49</span>;
};

export default function PricingMatrix() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <header className="text-center mb-16">
        <h2 className="font-mono text-4xl mb-4 text-arctic-powder">Architected for Scale</h2>
        {/* Strictly Isolated Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <select 
            className="bg-nocturnal text-arctic-powder px-4 py-2 rounded-md border border-mystic-mint/20 outline-none"
            onChange={(e) => stateStore.set('currency', e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
          <div className="flex bg-nocturnal rounded-md border border-mystic-mint/20 overflow-hidden">
             <button onClick={() => stateStore.set('cycle', 'monthly')} className="px-4 py-2 hover:bg-mystic-mint/10 transition-colors">Monthly</button>
             <button onClick={() => stateStore.set('cycle', 'annual')} className="px-4 py-2 bg-forsythia text-oceanic-noir font-bold transition-colors">Annual (-20%)</button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Render purely static layout, only the inner node updates */}
        {['starter', 'pro', 'scale'].map((tier) => (
          <article key={tier} className="p-8 rounded-xl bg-nocturnal border border-mystic-mint/10 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-mono text-xl uppercase tracking-widest text-deep-saffron">{tier}</h3>
            <div className="my-6">
              <IsolatedPriceNode tier={tier as any} />
              <span className="text-mystic-mint/60 ml-2">/mo</span>
            </div>
            <button className="w-full py-3 mt-4 bg-arctic-powder text-oceanic-noir font-bold rounded hover:bg-forsythia transition-colors">
              Deploy {tier}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}