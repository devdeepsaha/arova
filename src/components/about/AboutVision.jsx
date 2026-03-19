function AboutVision() {
  return (
    <>
      {/* What We're Building Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="lg:ml-[33%] max-w-2xl relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">What We’re Building</h2>
            <p className="text-lg md:text-2xl text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              The future isn't about more apps. It's about <span className="text-on-surface font-semibold">industry-specific operating systems.</span> We are developing the foundations for the next era of infrastructure in real estate, logistics, and professional services.
            </p>
            <div className="h-px w-full bg-outline-variant/20"></div>
          </div>
          <div className="absolute top-0 left-0 hidden lg:block opacity-10 pointer-events-none">
            <span className="text-[12rem] xl:text-[20rem] font-bold text-surface-container-high leading-none select-none">OS</span>
          </div>
        </div>
      </section>

      {/* The Team Section (Pure Typography Roster) */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-surface-container-low z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">The Arova Core</h2>
            <p className="text-base md:text-lg text-on-surface-variant italic max-w-md md:text-right">
              "We build systems that don't just solve problems—they eliminate them."
            </p>
          </div>

          <div className="flex flex-col">
            {/* Kavyansh - Social/Growth */}
            <div className="group border-y-2 border-outline-variant/20 pt-8 pb-12 md:py-16 flex flex-col md:flex-row md:items-baseline justify-between hover:border-primary transition-colors duration-500 cursor-default">
              <div className="md:w-7/12 flex items-baseline gap-4 md:gap-8">
                <span className="font-label text-sm md:text-lg font-bold text-outline-variant group-hover:text-primary/50 transition-colors duration-500">01</span>
                <h3 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-on-surface group-hover:text-primary transition-colors duration-500 leading-none">
                  Kavyansh.
                </h3>
              </div>
              <div className="md:w-5/12 flex flex-col items-start md:items-end text-left md:text-right mt-8 md:mt-0">
                <p className="font-label text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">Growth & Media</p>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-sm">
                  Managing market presence, social strategies, and scaling Arova's digital footprint.
                </p>
              </div>
            </div>

            {/* Devdeep - Technical/Founder */}
            <div className="group border-t-2 border-outline-variant/20 pt-8 pb-12 md:py-16 flex flex-col md:flex-row md:items-baseline justify-between hover:border-accent-blue transition-colors duration-500 cursor-default">
              <div className="md:w-7/12 flex items-baseline gap-4 md:gap-8">
                <span className="font-label text-sm md:text-lg font-bold text-outline-variant group-hover:text-accent-blue/50 transition-colors duration-500">02</span>
                <h3 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-on-surface group-hover:text-accent-blue transition-colors duration-500 leading-none">
                  Devdeep.
                </h3>
              </div>
              <div className="md:w-5/12 flex flex-col items-start md:items-end text-left md:text-right mt-8 md:mt-0">
                <p className="font-label text-xs md:text-sm uppercase tracking-[0.3em] text-accent-blue font-bold mb-4">Lead Engineer</p>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-sm">
                  Architecting the backend logic, frontend systems, and overall technical vision of Arova's platforms.
                </p>
              </div>
            </div>

            {/* Prateek - Sales/Operations */}
            <div className="group border-t-2 border-outline-variant/20 pt-8 pb-12 md:py-16 flex flex-col md:flex-row md:items-baseline justify-between hover:border-tertiary transition-colors duration-500 cursor-default">
              <div className="md:w-7/12 flex items-baseline gap-4 md:gap-8">
                <span className="font-label text-sm md:text-lg font-bold text-outline-variant group-hover:text-tertiary/50 transition-colors duration-500">03</span>
                <h3 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-on-surface group-hover:text-tertiary transition-colors duration-500 leading-none">
                  Prateek.
                </h3>
              </div>
              <div className="md:w-5/12 flex flex-col items-start md:items-end text-left md:text-right mt-8 md:mt-0">
                <p className="font-label text-xs md:text-sm uppercase tracking-[0.3em] text-tertiary font-bold mb-4">Sales & Operations</p>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-sm">
                  Bridging the gap between complex engineering solutions and real-world client business needs.
                </p>
              </div>
            </div>

            

          </div>

        </div>
      </section>
    </>
  );
}

export default AboutVision;