function PricingCards({ onSelectPlan }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Essential Card (Previously Starter) */}
        <div className="group bg-surface-container-low p-8 rounded-md flex flex-col border border-outline-variant/10 transition-all hover:bg-surface-container-lowest">
          <div className="mb-6">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-on-surface-variant font-bold">Plan 01</span>
            {/* CHANGED: Starter to Essential */}
            <h3 className="font-headline text-2xl font-bold mt-2">Essential</h3>
            <p className="text-tertiary font-medium mt-1">WhatsApp Booking</p>
          </div>
          <div className="mb-6 pb-6 border-b border-outline-variant/10">
            <div className="flex items-end gap-1">
              <span className="font-headline text-4xl font-black tracking-tighter">₹4,999</span>
              <span className="text-on-surface-variant text-sm mb-1">/month</span>
            </div>
            <p className="text-on-surface-variant text-xs mt-2">Billed monthly.</p>
          </div>
          <div className="mb-8">
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Automate appointments. Eliminate manual work.</p>
            <ul className="space-y-4">
              {["WhatsApp-based booking", "Smart date/time selection", "Patient capture", "Auto confirmations", "Doctor dashboard", "Basic scheduling"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            {/* CHANGED: Passing 'Essential' to the modal */}
            <button 
              onClick={() => onSelectPlan('Essential')}
              className="w-full bg-primary text-on-primary py-4 rounded-sm font-bold tracking-wide uppercase text-xs hover:bg-primary-dim transition-colors group-hover:scale-[1.02]"
            >
              Select Essential
            </button>
          </div>
        </div>

        {/* Growth Card */}
        <div className="relative group bg-surface-container-lowest p-8 rounded-md flex flex-col border-2 border-tertiary shadow-[0_12px_40px_rgba(28,107,81,0.08)] lg:scale-105 z-10">
          <div className="absolute -top-4 right-8 bg-tertiary text-on-tertiary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
            Most Popular
          </div>
          <div className="mb-6">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-tertiary font-bold">Plan 02</span>
            <h3 className="font-headline text-2xl font-bold mt-2">Growth</h3>
            <p className="text-tertiary font-medium mt-1">WhatsApp + AI Calls</p>
          </div>
          <div className="mb-6 pb-6 border-b border-outline-variant/10">
            <div className="flex items-end gap-1">
              <span className="font-headline text-4xl font-black tracking-tighter">₹9,999</span>
              <span className="text-on-surface-variant text-sm mb-1">/month</span>
            </div>
            <p className="text-on-surface-variant text-xs mt-2">Billed monthly.</p>
          </div>
          <div className="mb-8">
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Never miss a patient — even on calls.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-on-surface font-semibold">
                <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                {/* CHANGED: Starter to Essential */}
                Everything in Essential
              </li>
              {["AI-powered call assistant", "Handles incoming calls", "Books via voice", "Syncs to dashboard", "Reduces missed calls"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <button 
              onClick={() => onSelectPlan('Growth')}
              className="w-full bg-tertiary text-on-tertiary py-4 rounded-sm font-bold tracking-wide uppercase text-xs hover:bg-tertiary-dim transition-colors group-hover:scale-[1.02] shadow-lg shadow-tertiary/20"
            >
              Select Growth
            </button>
          </div>
        </div>

        {/* Enterprise Card */}
        <div className="group bg-surface-container-low p-8 rounded-md flex flex-col border border-outline-variant/10 transition-all hover:bg-surface-container-lowest">
          <div className="mb-6">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-on-surface-variant font-bold">Plan 03</span>
            <h3 className="font-headline text-2xl font-bold mt-2">Enterprise</h3>
            <p className="text-tertiary font-medium mt-1">Full System</p>
          </div>
          <div className="mb-6 pb-6 border-b border-outline-variant/10 flex items-center h-[76px]">
            <span className="font-headline text-3xl font-black tracking-tighter">Custom Setup</span>
          </div>
          <div className="mb-8">
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Complete digital infrastructure for your clinic.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>all_inclusive</span>
                WhatsApp + AI Call automation
              </li>
              {["Custom website development", "Tailored setup", "Advanced integrations", "Priority support", "Custom workflows"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <button 
              onClick={() => onSelectPlan('Enterprise')}
              className="w-full bg-primary text-on-primary py-4 rounded-sm font-bold tracking-wide uppercase text-xs hover:bg-primary-dim transition-colors group-hover:scale-[1.02]"
            >
              Contact Sales
            </button>
          </div>
        </div>

      </div>

      {/* Pricing Strategy Text */}
      <div className="mt-16 md:mt-24 text-center max-w-2xl mx-auto p-8 md:p-12 bg-surface-container-low rounded-xl">
        <h4 className="font-headline text-2xl md:text-3xl font-bold mb-4">Flexible Pricing</h4>
        <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
          Pricing depends on clinic size and customization. <br className="hidden sm:block"/>
          {/* CHANGED: Starter to Essential */}
          Starting from <span className="text-tertiary font-bold">₹4,999/month</span> for Essential and <span className="text-tertiary font-bold">₹9,999/month</span> for Growth.
        </p>
      </div>
    </section>
  );
}

export default PricingCards;