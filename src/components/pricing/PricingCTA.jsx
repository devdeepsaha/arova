function PricingCTA() {
  return (
    // NEW: Made buttons stack properly on mobile and adjusted font sizes
    <section className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 sm:p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 md:mb-6">Not sure which plan fits?</h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Let us understand your clinic and recommend the right setup for your unique workflow requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-sm font-bold tracking-wide uppercase text-xs hover:bg-tertiary-dim transition-all shadow-xl shadow-tertiary/10 w-full sm:w-auto">
                Book a Demo
              </button>
              <button className="bg-transparent border border-outline-variant px-8 py-4 rounded-sm font-bold tracking-wide uppercase text-xs hover:bg-surface-container-low transition-all w-full sm:w-auto">
                Talk to Us
              </button>
            </div>
          </div>
          <div className="bg-surface-container-high relative hidden md:block">
            <img 
              alt="Clinic Interior" 
              className="absolute inset-0 m-auto w-3/4 h-auto object-cover opacity-60 contrast-125"
              src="./arova.webp" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingCTA;