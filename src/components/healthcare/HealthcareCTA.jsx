import { Link } from 'react-router-dom';

function HealthcareCTA({ onOpenModal, onOpenSetupModal }) {
  return (
    <>
      {/* Impact Stats */}
      <section className="py-32 px-6 md:px-12 text-center bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-16 md:mb-20">Measurable outcomes.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-headline font-black text-tertiary mb-4 tracking-tighter">80%</div>
              <p className="font-label text-xs uppercase tracking-[0.4em] font-bold text-on-surface-variant">Reduction in Missed Calls</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-headline font-black text-primary mb-4 tracking-tighter">2.5x</div>
              <p className="font-label text-xs uppercase tracking-[0.4em] font-bold text-on-surface-variant">Operational Efficiency</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-headline font-black text-tertiary mb-4 tracking-tighter">0</div>
              <p className="font-label text-xs uppercase tracking-[0.4em] font-bold text-on-surface-variant">Staff Overwhelm Incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-low relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-surface-container-lowest p-8 md:p-20 rounded-xl shadow-2xl border border-outline-variant/10 relative overflow-hidden">
            
            <div className="max-w-4xl">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-6">Modular systems for growing clinics.</h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                From basic WhatsApp booking to full AI Call Automation and custom digital infrastructure. Choose the plan that fits your operational needs.
              </p>
              
              {/* Feature Tags showing the tiers */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 border border-outline-variant/30 rounded-md text-sm font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">chat</span> WhatsApp Only
                </span>
                <span className="px-4 py-2 bg-tertiary/10 border border-tertiary/30 rounded-md text-sm font-bold text-tertiary flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">smart_toy</span> WhatsApp + AI Calls
                </span>
                <span className="px-4 py-2 bg-primary text-on-primary rounded-md text-sm font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">webhook</span> Full Custom Infrastructure
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/pricing" className="bg-tertiary text-on-tertiary px-10 py-4 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:bg-tertiary-dim transition-all text-center">
                  View Full Pricing
                </Link>
                <button 
                  onClick={onOpenModal}
                  className="px-10 py-4 rounded-sm font-headline font-bold uppercase tracking-widest text-sm text-primary border border-outline-variant/30 hover:bg-surface-container-high transition-all flex items-center justify-center gap-2"
                >
                  Talk to Sales
                  <span className="material-symbols-outlined text-lg">call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 px-6 md:px-12 text-center blueprint-bg border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            Let your clinic <br className="hidden sm:block" />run itself.
          </h2>
          <p className="text-lg md:text-2xl text-on-surface-variant leading-relaxed mb-12 max-w-2xl mx-auto">
            AROVA handles the bookings and answers the calls, so you can focus on patients. Experience the power of the first WhatsApp & Voice native clinic OS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button 
              onClick={onOpenModal}
              className="bg-primary text-on-primary px-12 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm md:text-base hover:scale-105 transition-all shadow-xl w-full sm:w-auto"
            >
              Book Demo
            </button>
            <button 
              onClick={onOpenSetupModal}
              className="bg-surface-container-lowest border-2 border-primary text-primary px-12 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm md:text-base hover:bg-primary hover:text-on-primary transition-all w-full sm:w-auto"
            >
              Get Setup Plan
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthcareCTA;