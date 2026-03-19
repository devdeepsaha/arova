import { Link } from 'react-router-dom';

function WebDevHero({ onOpenModal }) {
  return (
    <>
      <section className="relative z-10 min-h-[90vh] flex items-center px-6 md:px-12 py-24 overflow-hidden">
        {/* Subtle background radial gradient for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-blue-rgb),0.05),transparent_70%)] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-10 pt-10 md:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center relative">
                <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full"></div>
                <div className="absolute w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-label text-accent-blue uppercase tracking-[0.3em] text-xs font-bold">Enterprise Infrastructure</span>
            </div>
            
            <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] mb-8">
              Systems, <br /> 
              <span className="text-accent-blue italic font-serif">Not Just</span> <br />
              Websites.
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10 md:mb-12 font-light">
              We engineer complete digital infrastructures. From high-converting custom frontends to complex automated workflows and advanced API integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenModal}
                className="group relative bg-accent-blue text-white px-10 py-5 font-headline font-bold uppercase tracking-[0.2em] text-sm rounded-sm hover:shadow-[0_0_30px_rgba(6,44,158,0.3)] transition-all duration-300 active:scale-95 text-center overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
              <Link 
                to="/pricing"
                className="border border-outline-variant/40 bg-surface-container-lowest text-on-surface px-10 py-5 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all duration-300 flex items-center justify-center text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Right: Abstract UI / Architectural Composition */}
          <div className="lg:col-span-6 relative w-full h-[500px] lg:h-[650px] flex items-center justify-center">
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative w-full max-w-lg aspect-square">
              
              {/* Back Layer: Terminal / Code Window */}
              <div className="absolute top-0 right-0 w-[85%] h-[75%] bg-[#0e0e0e] rounded-xl shadow-2xl border border-white/10 p-6 flex flex-col transform translate-x-4 -translate-y-4 hover:-translate-y-6 hover:translate-x-6 transition-transform duration-700">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-[#25D366]"></div>
                </div>
                <div className="font-mono text-xs md:text-sm text-[#a3efce] space-y-2 opacity-90">
                  <p><span className="text-[#fe8983]">import</span> {'{'} Architecture {'}'} <span className="text-[#fe8983]">from</span> '@arova/core';</p>
                  <p className="mt-4"><span className="text-[#fe8983]">const</span> system = <span className="text-[#b1fedc]">new</span> Architecture({'{'}</p>
                  <p className="pl-4">scale: <span className="text-[#d9e3f4]">'enterprise'</span>,</p>
                  <p className="pl-4">automation: <span className="text-[#fe8983]">true</span>,</p>
                  {/* FIXED: Changed '<' to '&lt;' to prevent JSX parsing errors */}
                  <p className="pl-4">latency: <span className="text-[#d9e3f4]">'&lt;10ms'</span></p>
                  <p>{'}'});</p>
                  <p className="mt-4 text-[#525c6a]">// Initializing sequence...</p>
                  <p className="text-accent-blue animate-pulse">system.deploy();_</p>
                </div>
              </div>

              {/* Middle Layer: Frosted Glass UI Widget */}
              <div className="absolute bottom-4 left-0 w-[80%] bg-surface-container-lowest/80 backdrop-blur-xl rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-outline-variant/30 p-6 transform -translate-x-4 translate-y-4 hover:-translate-x-6 hover:translate-y-6 transition-transform duration-700">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-accent-blue/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent-blue text-sm">monitoring</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm">System Health</h4>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Live Metrics</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
                </div>
                
                {/* Fake Graph Lines */}
                <div className="space-y-3 mb-6">
                  <div className="w-full h-2 bg-outline-variant/10 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-accent-blue rounded-full"></div>
                  </div>
                  <div className="w-full h-2 bg-outline-variant/10 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-tertiary rounded-full"></div>
                  </div>
                  <div className="w-full h-2 bg-outline-variant/10 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface">API Latency</div>
                  <div className="text-xs font-bold text-[#25D366]">12ms</div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-1/3 -left-8 bg-surface border border-outline-variant/20 shadow-xl px-4 py-2.5 rounded-full flex items-center gap-2 animate-[bounce_4s_infinite]">
                <span className="material-symbols-outlined text-tertiary text-sm">database</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Data Synced</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-1/4 -right-4 bg-inverse-surface border border-white/10 shadow-2xl px-4 py-2.5 rounded-full flex items-center gap-2 animate-[bounce_5s_infinite_reverse]">
                <span className="material-symbols-outlined text-[#25D366] text-sm">verified_user</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">SSL Active</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Secondary Messaging Section */}
      <section className="relative z-10 py-32 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.1]">
              Most websites look good. <br />
              <span className="text-outline/40">Few actually work.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center border-l-2 border-accent-blue pl-6 md:pl-10 py-2">
            <p className="text-lg md:text-2xl font-light leading-relaxed text-on-surface-variant">
              We don’t build static pages or rely on generic templates. <span className="text-on-surface font-bold">AROVA creates web systems</span> — robust digital infrastructures tailored to your custom workflows, designed to automate operations and drive revenue.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent-blue text-sm">arrow_forward</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-accent-blue">The Arova Enterprise Standard</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevHero;