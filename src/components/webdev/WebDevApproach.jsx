function WebDevApproach() {
  // Array of all the technologies you want to display
  const techStack = [
    "React", "Node.js", "PostgreSQL", "Supabase", "Next.js", "TypeScript", 
    "HTML5", "CSS3", "JavaScript", "Laravel", "Android Studio"
  ];

  return (
    <>
      <section className="relative z-10 py-32 bg-inverse-surface text-on-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight">Our Approach</h2>
            <p className="max-w-md text-primary-fixed-dim font-light text-base md:text-lg">A systematic method to transform complex requirements into seamless digital experiences.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20">
            <div className="bg-inverse-surface p-8 md:p-12 hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-headline font-black text-accent-blue mb-6 md:mb-8 block">01</span>
              <h3 className="font-headline text-base md:text-lg font-bold mb-4 uppercase tracking-widest">Understand</h3>
              <p className="text-xs md:text-sm text-primary-fixed-dim leading-relaxed font-light">Deep dive into your workflow and business objectives.</p>
            </div>
            <div className="bg-inverse-surface p-8 md:p-12 hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-headline font-black text-white/20 mb-6 md:mb-8 block">02</span>
              <h3 className="font-headline text-base md:text-lg font-bold mb-4 uppercase tracking-widest">Architect</h3>
              <p className="text-xs md:text-sm text-primary-fixed-dim leading-relaxed font-light">Designing the logic, data models, and system pathways.</p>
            </div>
            <div className="bg-inverse-surface p-8 md:p-12 hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-headline font-black text-white/20 mb-6 md:mb-8 block">03</span>
              <h3 className="font-headline text-base md:text-lg font-bold mb-4 uppercase tracking-widest">Engineer</h3>
              <p className="text-xs md:text-sm text-primary-fixed-dim leading-relaxed font-light">Clean, scalable code built with modern technologies.</p>
            </div>
            <div className="bg-inverse-surface p-8 md:p-12 hover:bg-white/5 transition-colors">
              <span className="text-4xl md:text-5xl font-headline font-black text-white/20 mb-6 md:mb-8 block">04</span>
              <h3 className="font-headline text-base md:text-lg font-bold mb-4 uppercase tracking-widest">Optimize</h3>
              <p className="text-xs md:text-sm text-primary-fixed-dim leading-relaxed font-light">Continuous iteration based on real-world performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Tech Stack Section */}
      <section className="relative z-10 py-24 bg-surface border-y border-outline-variant/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="font-label text-xs uppercase tracking-[0.5em] mb-12 text-outline text-center px-6">Technology Stack</h2>
          
          {/* The Marquee Container */}
          <div className="w-full relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            
            {/* The Scrolling Track */}
            <div className="flex w-max animate-scroll-left opacity-60 hover:opacity-100 transition-opacity duration-300">
              
              {/* First Set - CHANGED: Removed justify-around and min-w-full, reduced gap and added pr to match the gap */}
              <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
                {techStack.map((tech, index) => (
                  <span key={`tech-1-${index}`} className="font-headline text-xl md:text-3xl font-bold tracking-tighter whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Duplicate Set - CHANGED: Matches the first set perfectly */}
              <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16" aria-hidden="true">
                {techStack.map((tech, index) => (
                  <span key={`tech-2-${index}`} className="font-headline text-xl md:text-3xl font-bold tracking-tighter whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default WebDevApproach;