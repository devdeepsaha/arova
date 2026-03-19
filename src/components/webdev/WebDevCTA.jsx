import { Link } from 'react-router-dom';

function WebDevCTA({ onOpenModal }) {
  return (
    <>
      <section className="relative z-10 py-32 bg-surface-container-high overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-16 md:mb-24 tracking-tighter">
            Real impact, <br /><span className="text-accent-blue">not just code.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-2 md:space-y-4">
              <span className="text-4xl sm:text-5xl md:text-7xl font-black font-headline text-stroke tracking-tighter">-60%</span>
              <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">Manual Work</p>
            </div>
            <div className="space-y-2 md:space-y-4">
              <span className="text-4xl sm:text-5xl md:text-7xl font-black font-headline text-stroke tracking-tighter">3.5x</span>
              <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">Operations Speed</p>
            </div>
            <div className="space-y-2 md:space-y-4">
              <span className="text-4xl sm:text-5xl md:text-7xl font-black font-headline text-stroke tracking-tighter">100%</span>
              <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">Data Accuracy</p>
            </div>
            <div className="space-y-2 md:space-y-4">
              <span className="text-4xl sm:text-5xl md:text-7xl font-black font-headline text-stroke tracking-tighter">∞</span>
              <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">Scalability</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 md:py-48 bg-inverse-surface overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-64 h-64 md:w-96 md:h-96 border border-accent-blue/30 rounded-full"></div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-tight">
            Let’s build your <br className="hidden sm:block" /><span className="text-accent-blue">digital infrastructure.</span>
          </h2>
          <p className="text-primary-fixed-dim text-lg md:text-xl font-light mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            If you’re looking for a fully tailored system with advanced integrations and custom workflows, we’re ready. Let's engineer your competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link 
              to="/pricing"
              className="bg-accent-blue text-white px-8 md:px-12 py-5 md:py-6 font-black uppercase tracking-widest text-xs md:text-sm rounded-sm hover:scale-105 transition-transform w-full sm:w-auto text-center flex items-center justify-center"
            >
              View Pricing
            </Link>
            <button 
              onClick={onOpenModal}
              className="border border-white/20 text-white px-8 md:px-12 py-5 md:py-6 font-black uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevCTA;