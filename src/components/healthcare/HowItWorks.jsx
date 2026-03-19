function HowItWorks() {
  return (
    // NEW: Converted all class attributes to className and fixed <br/> tags
    <section className="bg-inverse-surface py-32 px-6 md:px-12 text-on-primary">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            From message to appointment — <br />in seconds.
          </h2>
          <p className="text-xl text-primary-fixed-dim font-headline tracking-widest uppercase text-sm font-bold">No apps. No calls. Just WhatsApp.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          
          {/* Step 1 */}
          <div className="relative pt-8 border-t border-primary-fixed-dim/20">
            <span className="absolute top-0 left-0 -translate-y-1/2 bg-tertiary text-on-tertiary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">01</span>
            <h4 className="font-headline font-bold text-xl mb-3 uppercase tracking-tight">Patient says 'Hi'</h4>
            <p className="text-primary-fixed-dim/80">Patient sends a message to your clinic's official WhatsApp number.</p>
          </div>
          
          {/* Step 2 */}
          <div className="relative pt-8 border-t border-primary-fixed-dim/20">
            <span className="absolute top-0 left-0 -translate-y-1/2 bg-tertiary text-on-tertiary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">02</span>
            <h4 className="font-headline font-bold text-xl mb-3 uppercase tracking-tight">Interactive Menu</h4>
            <p className="text-primary-fixed-dim/80">AI presents available services, doctors, and time slots instantly.</p>
          </div>
          
          {/* Step 3 */}
          <div className="relative pt-8 border-t border-primary-fixed-dim/20">
            <span className="absolute top-0 left-0 -translate-y-1/2 bg-tertiary text-on-tertiary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">03</span>
            <h4 className="font-headline font-bold text-xl mb-3 uppercase tracking-tight">Slot Selection</h4>
            <p className="text-primary-fixed-dim/80">Patient selects their preferred time without leaving the chat interface.</p>
          </div>
          
          {/* Step 4 */}
          <div className="relative pt-8 border-t border-primary-fixed-dim/20">
            <span className="absolute top-0 left-0 -translate-y-1/2 bg-tertiary text-on-tertiary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">04</span>
            <h4 className="font-headline font-bold text-xl mb-3 uppercase tracking-tight">Verification</h4>
            <p className="text-primary-fixed-dim/80">Automated KYC collects patient details or recognizes returning users.</p>
          </div>
          
          {/* Step 5 */}
          <div className="relative pt-8 border-t border-primary-fixed-dim/20">
            <span className="absolute top-0 left-0 -translate-y-1/2 bg-tertiary text-on-tertiary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">05</span>
            <h4 className="font-headline font-bold text-xl mb-3 uppercase tracking-tight">Instant Sync</h4>
            <p className="text-primary-fixed-dim/80">Appointment is automatically blocked on the Doctor's Dashboard.</p>
          </div>
          
          {/* Step 6 */}
          <div className="relative pt-8 border-t border-primary-fixed-dim/20">
            <span className="absolute top-0 left-0 -translate-y-1/2 bg-tertiary text-on-tertiary w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">06</span>
            <h4 className="font-headline font-bold text-xl mb-3 uppercase tracking-tight">Confirmation</h4>
            <p className="text-primary-fixed-dim/80">Patient receives a digital calendar invite and reminder via WhatsApp.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;