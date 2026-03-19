function CoreFeatures() {
  return (
    <>
      {/* Core Features */}
      <section className="py-32 px-6 md:px-12 blueprint-bg">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">Core Features</h2>
            <span className="font-label text-sm uppercase tracking-[0.3em] font-bold text-outline">v2.0 Infrastructure</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Feature 1 - UPDATED for AI Calls & WhatsApp */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-md shadow-[0_12px_40px_rgba(50,50,50,0.06)] group border border-outline-variant/10">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex gap-4 mb-6">
                    <span className="material-symbols-outlined text-4xl text-[#25D366]">chat_bubble</span>
                    <span className="material-symbols-outlined text-4xl text-tertiary">phone_in_talk</span>
                  </div>
                  <h4 className="font-headline text-2xl md:text-3xl font-bold mb-4">WhatsApp & AI Call Engine</h4>
                  <p className="text-on-surface-variant text-base md:text-lg max-w-xl">
                    A fully automated conversational interface that handles text-based bookings on WhatsApp, plus an advanced AI voice assistant that answers incoming calls, books appointments via voice, and syncs everything to your dashboard. Never miss a patient.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-surface-container text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">NLP Powered</span>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">Voice AI</span>
                  <span className="px-3 py-1 bg-[#25D366]/10 text-[#25D366] text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">WhatsApp API</span>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="md:col-span-4 bg-tertiary text-on-tertiary p-8 md:p-12 rounded-md">
              <span className="material-symbols-outlined text-4xl mb-6">calendar_month</span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold mb-4">Smart Scheduling</h4>
              <p className="text-on-tertiary/80 leading-relaxed text-sm md:text-base">Advanced logic to prevent double bookings, manage buffer times, and optimize doctor rotations automatically.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="md:col-span-4 bg-surface-container-high p-8 md:p-12 rounded-md">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">dashboard</span>
              <h4 className="font-headline text-2xl md:text-3xl font-bold mb-4">Doctor Dashboard</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">A minimal, distraction-free cockpit showing daily schedules, patient files, and revenue metrics in real-time.</p>
            </div>
            
            {/* Feature 4 - UPDATED for custom websites mentioned in Enterprise plan */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 md:p-12 rounded-md border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">web</span>
              <h4 className="font-headline text-2xl font-bold mb-4">Custom Web Presence</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">We don't just provide the backend. We build tailored, high-converting clinic websites fully integrated with your booking engine.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="md:col-span-4 bg-primary text-on-primary p-8 md:p-12 rounded-md">
              <span className="material-symbols-outlined text-4xl mb-6">extension</span>
              <h4 className="font-headline text-2xl font-bold mb-4">Seamless Integrations</h4>
              <p className="text-on-primary/80 leading-relaxed text-sm md:text-base">Connects with your existing billing software, diagnostic labs, and insurance portals via API.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Arova */}
      <section className="bg-surface py-32 px-6 md:px-12 border-y border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Designed like software. <br />Engineered like infrastructure.
          </h2>
          <div className="w-24 h-1 bg-tertiary mx-auto"></div>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-lg uppercase tracking-tight text-tertiary">Scale</h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">Handles 10 to 10,000 appointments per day without performance degradation. Built for growth.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-lg uppercase tracking-tight text-tertiary">Security</h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">End-to-end encryption for patient data and strictly controlled access layers for clinic staff.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-lg uppercase tracking-tight text-tertiary">Zero Learning Curve</h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">Your patients already know how to use WhatsApp and make phone calls. Your staff uses a simple browser dashboard. No training needed.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-lg uppercase tracking-tight text-tertiary">Real-time Systems</h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">Websocket-powered dashboard updates instantly. See the heartbeat of your clinic as it happens.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                Built for <br />modern clinics.
              </h2>
              <p className="text-on-surface-variant mb-8 text-lg">Whatever your specialty, AROVA adapts to your specific operational workflows.</p>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 bg-surface-container-lowest rounded-md border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">dentistry</span>
                <h4 className="font-headline font-bold text-xl mb-2">Dental</h4>
                <p className="text-sm text-on-surface-variant">Manage complex procedure timelines and automated follow-up reminders.</p>
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-md border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">stethoscope</span>
                <h4 className="font-headline font-bold text-xl mb-2">General Physicians</h4>
                <p className="text-sm text-on-surface-variant">Streamline high-volume consultations and quick prescription sharing.</p>
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-md border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">apartment</span>
                <h4 className="font-headline font-bold text-xl mb-2">Multi-specialty</h4>
                <p className="text-sm text-on-surface-variant">Centralized patient records across multiple departments and doctors.</p>
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-md border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">biotech</span>
                <h4 className="font-headline font-bold text-xl mb-2">Diagnostic Centers</h4>
                <p className="text-sm text-on-surface-variant">Automate test bookings and deliver reports directly to patient WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreFeatures;