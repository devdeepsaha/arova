function AboutPhilosophy() {
  return (
    // NEW: Applied mobile-friendly paddings and spacing
    <section className="relative py-20 md:py-32 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-md shadow-[0_12px_40px_rgba(50,50,50,0.03)] group hover:translate-y-[-4px] transition-all duration-500">
            <span className="material-symbols-outlined text-electric-blue text-4xl mb-6 md:mb-8 block">account_tree</span>
            <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">Systems over Features</h3>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">We prioritize the integrity of the whole structure. Individual features only matter if they strengthen the core system.</p>
          </div>
          
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-md shadow-[0_12px_40px_rgba(50,50,50,0.03)] group hover:translate-y-[-4px] transition-all duration-500">
            <span className="material-symbols-outlined text-electric-blue text-4xl mb-6 md:mb-8 block">architecture</span>
            <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">Simplicity over Noise</h3>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">Complexity is easy; clarity is hard. We distill intricate business requirements into intuitive, elegant interfaces.</p>
          </div>
          
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-md shadow-[0_12px_40px_rgba(50,50,50,0.03)] group hover:translate-y-[-4px] transition-all duration-500">
            <span className="material-symbols-outlined text-electric-blue text-4xl mb-6 md:mb-8 block">altitude</span>
            <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">Built to Scale</h3>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">Our codebases are engineered as foundations for what you will become in five years, not just where you are today.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPhilosophy;