// NEW: Accept both functions as props
function HomeCTA({ onOpenModal, onOpenSetupModal }) {
  return (
    <>
      {/* Social Proof */}
      <section className="py-16 px-6 border-y border-outline-variant/20 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-headline text-xl md:text-2xl italic text-on-surface-variant font-light">
            "Designed and tested with real-world workflows."
          </p>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-32 px-6 lg:px-12 bg-surface-container-low text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-on-surface">
            Building systems <br className="hidden sm:block" />across industries.
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed">
            AROVA is developing a suite of operating systems — starting with healthcare.
          </p>
        </div>
      </section>

      {/* Final CTA (Dark Mode Finish) */}
      <section className="py-32 px-6 lg:px-12 bg-inverse-surface text-on-primary text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter">
            Ready to automate your clinic?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            
            {/* 1. Book Demo Button */}
            <button 
              onClick={onOpenModal}
              className="bg-on-primary text-inverse-surface px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-on-primary/10 w-full sm:w-auto text-center"
            >
              Book Demo
            </button>

            {/* 2. Setup Plan Button */}
            <button 
              onClick={onOpenSetupModal}
              className="bg-transparent border-2 border-on-primary/30 text-on-primary px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:border-on-primary transition-all active:scale-95 w-full sm:w-auto text-center"
            >
              Get Setup Plan for your Clinic
            </button>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCTA;