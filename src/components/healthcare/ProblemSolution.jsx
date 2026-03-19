function ProblemSolution() {
  return (
    <>
      {/* Problem Section */}
      <section className="bg-surface-container-low py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">
                Clinics today <br className="hidden sm:block" />run on chaos.
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                The gap between a patient needing care and receiving it is filled with friction, missed phone calls, manual labor, and outdated tools.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-md flex items-start gap-4 md:gap-6 border border-outline-variant/10 shadow-sm">
                <span className="material-symbols-outlined text-error text-2xl md:text-3xl shrink-0">phone_missed</span>
                <div>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-1">Unanswered Calls</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">Front desk occupied or clinic closed? That's a lost patient and lost revenue.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-md flex items-start gap-4 md:gap-6 border border-outline-variant/10 shadow-sm">
                <span className="material-symbols-outlined text-error text-2xl md:text-3xl shrink-0">menu_book</span>
                <div>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-1">Manual Registers</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">Paper logs and fragmented spreadsheets leading to booking errors and double-bookings.</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-md flex items-start gap-4 md:gap-6 border border-outline-variant/10 shadow-sm">
                <span className="material-symbols-outlined text-error text-2xl md:text-3xl shrink-0">event_busy</span>
                <div>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-1">Patient No-shows</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">Lack of timely, automated reminders results in empty slots and wasted doctor time.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">One system. Total automation.</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12 md:mb-16">
              AROVA replaces fragmented tools with a unified OS powered by WhatsApp and Voice AI. We didn't just build a CRM; we built the infrastructure to handle your clinic's entire front desk.
            </p>
          </div>
          
          <div className="relative w-full min-h-[600px] md:min-h-0 md:aspect-[21/9] bg-surface-container-low rounded-xl overflow-hidden shadow-inner border border-outline-variant/10 flex items-center justify-center">
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low via-surface-container to-tertiary/10"></div>
            <div className="absolute inset-0 blueprint-bg opacity-30"></div>
            
            <div className="relative z-10 w-full p-4 sm:p-8 md:p-12">
              <div className="bg-surface-container-lowest/90 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl max-w-5xl mx-auto border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
                  <div className="space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center text-[#25D366]">
                      <span className="material-symbols-outlined text-sm md:text-base">chat</span>
                    </div>
                    <h5 className="font-headline font-bold text-base md:text-lg">WhatsApp Automation</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">Patients book, reschedule, and receive automated reminders instantly via WhatsApp.</p>
                  </div>
                  <div className="space-y-3 md:space-y-4 border-t md:border-t-0 md:border-l border-outline-variant/20 pt-6 md:pt-0 md:pl-12">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-tertiary/20 rounded-full flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-sm md:text-base">smart_toy</span>
                    </div>
                    <h5 className="font-headline font-bold text-base md:text-lg">AI Call Assistant</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">An intelligent voice agent that answers the phone 24/7 and books appointments into your calendar.</p>
                  </div>
                  <div className="space-y-3 md:space-y-4 border-t md:border-t-0 md:border-l border-outline-variant/20 pt-6 md:pt-0 md:pl-12">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm md:text-base">dashboard</span>
                    </div>
                    <h5 className="font-headline font-bold text-base md:text-lg">Unified Dashboard</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">Both WhatsApp and Call bookings sync perfectly to a single, secure doctor dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProblemSolution;