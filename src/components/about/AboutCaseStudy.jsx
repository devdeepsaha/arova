function AboutCaseStudy() {
  return (
    <>
      {/* FIXED: Increased vertical padding (py-32 md:py-48) to give it way more breathing room before hitting the dark section */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Made the line slightly taller and more faded for elegance */}
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">From Idea to System</h2>
          <p className="text-lg md:text-xl text-on-surface-variant font-light">
            See how our architectural approach transformed a medical practice with <span className="text-primary font-bold">AROVA Healthcare</span>.
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-inverse-surface text-on-primary z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <span className="font-label text-xs md:text-sm uppercase tracking-[0.3em] text-accent-lightblue mb-4 block font-bold">Case Study</span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">AROVA Healthcare</h2>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 mb-16 md:mb-32">
            
            {/* Left Column: Context */}
            <div className="space-y-12 md:space-y-16">
              <div>
                <h4 className="font-label text-xs md:text-sm uppercase tracking-widest text-white/40 mb-4 font-bold">The Problem</h4>
                <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90">
                  Manual appointment management led to 30% no-show rates, fragmented patient records, and administrative burnout.
                </p>
              </div>
              <div className="pt-8 md:pt-12 border-t border-white/10">
                <h4 className="font-label text-xs md:text-sm uppercase tracking-widest text-tertiary mb-6 font-bold">The System We Built</h4>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="text-tertiary material-symbols-outlined text-2xl">check_circle</span>
                    <p className="text-lg md:text-xl font-light text-white/80">Automated patient triage and routing via secure messaging.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-tertiary material-symbols-outlined text-2xl">check_circle</span>
                    <p className="text-lg md:text-xl font-light text-white/80">Real-time dynamic scheduling engine with slot-locking logic.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-tertiary material-symbols-outlined text-2xl">check_circle</span>
                    <p className="text-lg md:text-xl font-light text-white/80">Unified physician dashboard for patient lifecycle management.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Visualization */}
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-10 rounded-2xl w-full flex flex-col justify-between shadow-2xl backdrop-blur-sm">
              <h4 className="font-label text-xs uppercase tracking-[0.3em] text-white/40 mb-8 md:mb-12 text-center font-bold">Engineered Architecture</h4>
              
              <div className="space-y-10 md:space-y-12">
                
                {/* FIXED: The Flow Diagram. Now stacks vertically on mobile (flex-col) and horizontally on desktop (sm:flex-row) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center w-full sm:w-1/3">
                    <span className="material-symbols-outlined text-accent-lightblue block mb-3 text-3xl">chat</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">WhatsApp</span>
                  </div>
                  
                  {/* Arrow rotates to point down on mobile, right on desktop */}
                  <span className="material-symbols-outlined text-white/20 rotate-90 sm:rotate-0 text-3xl">east</span>
                  
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center w-full sm:w-1/3">
                    <span className="material-symbols-outlined text-tertiary block mb-3 text-3xl">smart_toy</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">AI Logic</span>
                  </div>
                  
                  <span className="material-symbols-outlined text-white/20 rotate-90 sm:rotate-0 text-3xl">east</span>
                  
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center w-full sm:w-1/3">
                    <span className="material-symbols-outlined text-accent-lightblue block mb-3 text-3xl">event_available</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">Slot Lock</span>
                  </div>
                </div>

                {/* FIXED: Dashboard Mockup Element. Redesigned to look like a clean software wireframe */}
                <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-accent-lightblue"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="h-24 sm:h-auto bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center p-4">
                      <div className="text-3xl font-black text-white mb-1">142</div>
                      <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-white/40">Active Bookings</div>
                    </div>
                    <div className="bg-white/5 rounded-lg border border-white/5 col-span-1 sm:col-span-2 p-6 flex flex-col justify-center gap-4">
                      <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                      <div className="w-3/4 h-1.5 bg-white/10 rounded-full"></div>
                      <div className="w-1/2 h-1.5 bg-accent-lightblue/50 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Backend Chips - Cleaned up padding and text sizes */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-white/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white/50">Multi-tenant Backend</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white/50">WhatsApp Automation</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white/50">Smart Scheduling API</span>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCaseStudy;