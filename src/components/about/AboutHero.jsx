function AboutHero() {
  return (
    // NEW: Converted to React, fixed self-closing tags, and optimized paddings for mobile
    <>
      
      

      <section className="relative py-20 md:py-32 px-6 md:px-12 bg-surface-container-low z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-background uppercase">What is AROVA?</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-3xl text-on-surface leading-relaxed md:leading-snug font-light">
                We don't just build tools; we architect <span className="text-tertiary font-medium italic">operating systems</span> for your ambition. Arova replaces manual, fragmented workflows with cohesive technical ecosystems designed for growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;