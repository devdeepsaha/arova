function WebDevCapabilities() {
  return (
    <>
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-20">
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block font-bold">Enterprise Capabilities</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">What We Engineer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
            
            {/* Custom Website Development */}
            <div className="md:col-span-2 md:row-span-2 bg-inverse-surface p-8 md:p-12 flex flex-col justify-between text-on-tertiary rounded-md relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl md:text-9xl">web</span>
              </div>
              <div className="mb-8 md:mb-0 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4 block opacity-50">Full System</span>
                <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">Custom Website Development</h3>
                <p className="opacity-70 font-light leading-relaxed text-sm md:text-base">We build tailored, high-performance websites that act as the front door to your complex digital infrastructure. No templates, fully custom.</p>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer relative z-10 mt-auto">
                <span className="text-xs uppercase font-bold tracking-widest">Learn More</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
            
            {/* Custom Workflows */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-high p-8 md:p-10 flex flex-col justify-between rounded-md min-h-[200px] md:min-h-0">
              <div className="flex justify-between items-start mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-headline font-bold">Custom Workflows</h3>
                <span className="material-symbols-outlined text-accent-blue">alt_route</span>
              </div>
              <p className="text-on-surface-variant font-light text-sm md:text-base">Internal dashboards and logic pathways designed strictly around how your team actually operates.</p>
            </div>
            
            {/* Tailored Setup */}
            <div className="md:col-span-1 md:row-span-1 bg-accent-blue p-8 md:p-10 flex flex-col justify-between text-white rounded-md min-h-[200px] md:min-h-0">
              <span className="material-symbols-outlined text-4xl mb-4 md:mb-0">architecture</span>
              <h3 className="text-lg md:text-xl font-headline font-bold">Tailored Setup</h3>
            </div>
            
            {/* Advanced Integrations */}
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-highest p-8 md:p-10 flex flex-col justify-between rounded-md min-h-[200px] md:min-h-0">
              <span className="material-symbols-outlined text-4xl text-on-surface mb-4 md:mb-0">hub</span>
              <h3 className="text-lg md:text-xl font-headline font-bold">Advanced Integrations</h3>
            </div>
            
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 bg-surface">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-12">Built <br />Differently.</h2>
              <div className="space-y-12 md:space-y-16">
                <div className="border-l-2 border-accent-blue pl-6 md:pl-8">
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-3 uppercase tracking-tight">Precision Architecture</h4>
                  <p className="text-on-surface-variant font-light text-sm md:text-base">Every line of code is intentional. We map the entire system before writing the first component.</p>
                </div>
                <div className="border-l-2 border-outline-variant/30 pl-6 md:pl-8">
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-3 uppercase tracking-tight">Advanced Integrations</h4>
                  <p className="text-on-surface-variant font-light text-sm md:text-base">Connecting WhatsApp engines, AI Call assistants, and CRM databases into one seamless ecosystem.</p>
                </div>
                <div className="border-l-2 border-outline-variant/30 pl-6 md:pl-8">
                  <h4 className="font-headline text-lg md:text-xl font-bold mb-3 uppercase tracking-tight">Priority Support</h4>
                  <p className="text-on-surface-variant font-light text-sm md:text-base">Enterprise partners get priority access for maintenance, updates, and workflow adjustments.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 mt-12 lg:mt-0 relative flex flex-col items-center">
              {/* The Image Container */}
              <div className="w-5/6 mx-auto bg-surface-container-low aspect-square rounded-xl overflow-hidden relative shadow-2xl">
                <img alt="Server infrastructure" className="w-full h-full object-cover contrast-125" src="./hero2.jpg" />
                <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay"></div>
              </div>

              {/* PERFECT FROSTED GLASS BAR */}
              <div className="w-[90%] sm:w-[85%] -mt-12 md:-mt-16 relative z-20 bg-white/60 backdrop-blur-2xl border border-white/60 p-6 md:p-8 rounded-2xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 text-left">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#eef2ff] border border-white flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-accent-blue text-xl">design_services</span>
                </div>
                <div>
                  <h3 className="font-headline text-base md:text-lg font-bold mb-1.5 tracking-tight text-[#1e293b]">Minimal, Intentional UI.</h3>
                  <p className="text-xs md:text-sm text-[#64748b] leading-relaxed">
                    We remove the noise. Our interfaces guide the user toward the action that matters most, significantly reducing cognitive load.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevCapabilities;