function PricingBento() {
  return (
    // NEW: Removed fixed heights (h-[400px]) which broke the grid on mobile
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[400px]">
        <div className="md:col-span-8 bg-surface-container-high p-8 md:p-10 flex flex-col justify-end rounded-md group">
          <span className="material-symbols-outlined text-4xl mb-4 text-tertiary">architecture</span>
          <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4 tracking-tight">Pay based on <br className="hidden sm:block" />automation level.</h3>
          <p className="text-on-surface-variant max-w-md text-sm md:text-base">Our pricing structure is designed to map directly to the value you receive—not generic per-user fees.</p>
        </div>
        <div className="md:col-span-4 bg-tertiary p-8 md:p-10 text-on-tertiary flex flex-col rounded-md group min-h-[250px] md:min-h-0">
          <h3 className="font-headline text-2xl font-bold mb-2">Scalable</h3>
          <p className="text-sm opacity-80 mb-8">Start simple, upgrade anytime as your patient volume grows.</p>
          <div className="mt-auto flex justify-end">
            <span className="material-symbols-outlined text-5xl opacity-40">trending_up</span>
          </div>
        </div>
        <div className="md:col-span-5 bg-surface-container-lowest border border-outline-variant/20 p-6 md:p-8 flex items-center gap-4 md:gap-6 rounded-md">
          <div className="bg-surface-container-high w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl md:text-2xl text-primary">construction</span>
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base">No Bloat</h4>
            <p className="text-xs text-on-surface-variant mt-1">No unnecessary features. Only what helps your clinic move faster.</p>
          </div>
        </div>
        <div className="md:col-span-7 bg-primary p-6 md:p-8 text-on-primary flex items-center justify-between rounded-md">
          <div>
            <h4 className="font-headline text-lg md:text-xl font-bold">Built for scalability</h4>
            <p className="text-xs md:text-sm opacity-70 mt-1">Infrastructure that grows with your patient base.</p>
          </div>
          <span className="material-symbols-outlined text-2xl md:text-3xl">expand</span>
        </div>
      </div>
    </section>
  );
}

export default PricingBento;