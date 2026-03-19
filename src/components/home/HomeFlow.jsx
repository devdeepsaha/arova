function HomeFlow() {
  const steps = [
    { icon: "person", label: "Patient" },
    { icon: "chat", label: "WhatsApp" },
    { icon: "smart_toy", label: "AI Assistant", highlight: true },
    { icon: "event_available", label: "Booking" },
    { icon: "grid_view", label: "Dashboard" },
    { icon: "calendar_month", label: "Calendar" }
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16 md:mb-24 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight text-on-surface">
            From message to appointment.
          </h2>
          <p className="font-headline uppercase tracking-[0.2em] text-xs md:text-sm text-accent-blue font-bold">
            No missed calls. No manual booking.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Desktop Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-px bg-outline-variant/30 hidden md:block z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-0 z-10 w-full md:w-auto">
              
              {/* Step Circle */}
              <div className="flex flex-col items-center gap-4 group">
                <div className={`w-16 h-16 flex items-center justify-center border transition-all duration-300 ${
                  step.highlight 
                    ? 'bg-accent-blue border-accent-blue text-white shadow-lg shadow-accent-blue/20' 
                    : 'bg-surface border-outline-variant/30 text-on-surface group-hover:border-on-surface'
                }`}>
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <span className={`font-headline font-bold text-xs md:text-sm ${step.highlight ? 'text-accent-blue' : 'text-on-surface'}`}>
                  {step.label}
                </span>
              </div>

              {/* Arrow Indicator */}
              {idx !== steps.length - 1 && (
                <span className="material-symbols-outlined text-outline-variant/50 rotate-90 md:rotate-0 md:mx-2 lg:mx-4 text-3xl bg-surface px-1">
                  chevron_right
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HomeFlow;