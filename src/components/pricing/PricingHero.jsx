function PricingHero() {
  return (
    // NEW: Adjusted text sizing and spacing for mobile compatibility
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
        <div className="lg:col-span-8">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-4 md:mb-6 leading-tight md:leading-[1.1]">
            Pricing That Scales <br className="hidden sm:block" />with Your <span className="text-tertiary">Clinic.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Choose the right level of automation for your clinic's workflow. Built on technical precision to eliminate manual friction.
          </p>
        </div>
        <div className="lg:col-span-4 hidden lg:block opacity-10">
          <img 
            alt="Architecture Pattern" 
            className="w-full h-auto object-cover rounded-md grayscale rotate-3 shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4eYf9kdpT_qMpo_J06KTmU71lsdM1D13L3NGNpVTwgmOq00zxyWR2FfnFFyeCx7-j98WadUCrlWUtYY5lmAHTVHpNmApe2Nh2AVcFp50p70t4GEY9wxHbAjWCM0CQ66vKLibsob6giRPL7ubNl3n1FjQodq8-WLDTggsd8zDG5_3fpl-oh6B3yItbPfw6F2mbLnNRA8H2_6qkfy4tfrS_G--3pNRZ_1GUSek7W1vSXoBbp9UptlpUDiUnxok0mdGrta51xKlpVD5Z" 
          />
        </div>
      </div>
    </section>
  );
}

export default PricingHero;