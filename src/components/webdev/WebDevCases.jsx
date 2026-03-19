function WebDevCases({ onOpenGallery }) {
  return (
    <>
      <section className="relative z-10 py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            Built for teams that need <span className="text-accent-blue block sm:inline">more than a website.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-md border-b-4 border-accent-blue shadow-sm">
              <div className="w-12 h-12 bg-accent-blue/10 flex items-center justify-center mb-6 rounded-sm">
                <span className="material-symbols-outlined text-accent-blue">rocket_launch</span>
              </div>
              <h3 className="font-headline text-lg md:text-xl font-bold mb-3">Scale-Up Startups</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-xs md:text-sm">Automate user onboarding and billing cycles so you can focus on growth, not manual management.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-md border-b-4 border-primary shadow-sm">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 rounded-sm">
                <span className="material-symbols-outlined text-primary">medical_services</span>
              </div>
              <h3 className="font-headline text-lg md:text-xl font-bold mb-3">Health & Clinics</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-xs md:text-sm">HIPAA-compliant platforms that manage patient data, scheduling, and digital records securely.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-md border-b-4 border-primary shadow-sm">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 rounded-sm">
                <span className="material-symbols-outlined text-primary">lan</span>
              </div>
              <h3 className="font-headline text-lg md:text-xl font-bold mb-3">Internal Operations</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-xs md:text-sm">Centralize fragmented spreadsheets into a single source of truth for your entire organization.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-md border-b-4 border-primary shadow-sm">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 rounded-sm">
                <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
              </div>
              <h3 className="font-headline text-lg md:text-xl font-bold mb-3">Workflow Automation</h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-xs md:text-sm">Connect third-party APIs and legacy software into a modern, unified interface.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 bg-surface">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          
          {/* Case Study 01 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center mb-24 md:mb-32">
            <div className="flex-1 w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative border border-outline-variant/10 group">
              <img 
                alt="AROVA Healthcare Dashboard mockup" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                src="./case-study/clinic-dashboard.png" 
              />
            </div>
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-accent-blue font-bold text-xs uppercase tracking-widest">Case Study 01</span>
              <h3 className="font-headline text-3xl md:text-4xl font-black tracking-tight">AROVA Healthcare</h3>
              <p className="text-on-surface-variant font-light text-base md:text-lg max-w-lg">An end-to-end patient management system designed for multi-location clinics with real-time sync and encrypted record handling.</p>
              
              <button 
                onClick={() => onOpenGallery('arova')}
                className="border-b-2 border-accent-blue pb-1 font-bold text-xs md:text-sm tracking-widest uppercase mt-4 block w-max hover:text-accent-blue hover:border-accent-blue/50 transition-colors"
              >
                Explore Architecture
              </button>
            </div>
          </div>
          
          {/* Case Study 02: Dev Web Studio */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1 w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative border border-outline-variant/10 group">
              <img 
                alt="Dev Web Studio mockup" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out" 
                src="./case-study/dev-studio.png" // Update this source when you have the image
              />
            </div>
            <div className="flex-1 space-y-4 md:space-y-6">
              <span className="text-accent-blue font-bold text-xs uppercase tracking-widest">Case Study 02</span>
              <h3 className="font-headline text-3xl md:text-4xl font-black tracking-tight">Dev Web Studio</h3>
              <p className="text-on-surface-variant font-light text-base md:text-lg max-w-lg">A high-performance portfolio and agency platform featuring advanced animations, modern frontend architecture, and rapid load times.</p>
              
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <button 
                  onClick={() => onOpenGallery('devwebstudio')}
                  className="border-b-2 border-accent-blue pb-1 font-bold text-xs md:text-sm tracking-widest uppercase hover:text-accent-blue hover:border-accent-blue/50 transition-colors"
                >
                  Explore Architecture
                </button>
                
                {/* NEW: Visit Live Site Button */}
                <a 
                  href="https://devwebstudio.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 border-b-2 border-outline-variant/40 pb-1 font-bold text-xs md:text-sm tracking-widest uppercase text-on-surface-variant hover:text-on-surface hover:border-on-surface/50 transition-colors"
                >
                  Visit Live Site
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
}

export default WebDevCases;