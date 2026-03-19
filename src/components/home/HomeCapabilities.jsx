function HomeCapabilities() {
  return (
    <>
      {/* What We Build */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-4">
              What We Build
            </h2>
            <div className="w-16 h-1 bg-accent-blue"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "developer_board", title: "Operating Systems" },
              { icon: "auto_mode", title: "Automation Tools" },
              { icon: "dashboard_customize", title: "Custom Platforms" }
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-lowest border border-outline-variant/20 p-10 flex flex-col gap-8 hover:border-on-surface transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">{item.icon}</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AROVA */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-on-surface mb-16 leading-tight">
              Engineered with <br className="hidden md:block"/>Precision.
            </h2>
            <div className="space-y-12">
              {[
                { num: "01", text: "Minimal, intentional design" },
                { num: "02", text: "Built for scale" },
                { num: "03", text: "Focused on real workflows" }
              ].map((reason, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <span className="font-headline text-2xl font-black text-outline-variant">{reason.num}</span>
                  <h4 className="font-headline text-xl md:text-2xl font-bold text-on-surface">{reason.text}</h4>
                </div>
              ))}
            </div>
          </div>
          
          {/* Subtle Decorative Element */}
          <div className="hidden lg:flex justify-center items-center relative w-full h-full min-h-[400px]">
  {/* Ambient Core Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative w-[340px] h-[340px] flex items-center justify-center">
    
    {/* Outer Shape 1: Thick rounded square (Squarcle) spinning clockwise */}
    <div className="absolute w-64 h-64 border-2 border-outline-variant/40 rounded-[2.5rem] animate-[spin_20s_linear_infinite] shadow-[inset_0_0_20px_rgba(0,0,0,0.03)]">
        {/* Glowing Data Node on the corner */}
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent-blue rounded-full shadow-[0_0_12px_rgba(6,44,158,0.6)]"></div>
    </div>

    {/* Outer Shape 2: Offset rounded square spinning counter-clockwise */}
    <div className="absolute w-64 h-64 border-2 border-tertiary/30 rounded-[2.5rem] animate-[spin_25s_linear_infinite_reverse]">
        {/* Glowing Data Node on the opposite corner */}
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-tertiary rounded-full shadow-[0_0_12px_rgba(28,107,81,0.6)]"></div>
    </div>

    {/* Inner Matrix: Two overlapping rigid squares forming an 8-point geometric star */}
    <div className="absolute w-44 h-44 border-2 border-accent-blue/20 bg-accent-blue/[0.02] animate-[spin_40s_linear_infinite]"></div>
    <div className="absolute w-44 h-44 border-2 border-accent-blue/20 bg-accent-blue/[0.02] rotate-45 animate-[spin_40s_linear_infinite]"></div>

    {/* The Pulsing Energy Core */}
    <div className="absolute w-36 h-36 rounded-full bg-accent-blue/20 animate-ping opacity-60"></div>

    {/* Main Center Hub */}
    <div className="relative z-10 w-40 h-40 rounded-full bg-surface-container-lowest border-2 border-outline-variant/30 shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-accent-blue/50 hover:shadow-[0_0_50px_rgba(6,44,158,0.15)] hover:scale-105">
      
      {/* Center Icon & Text */}
      <div className="relative flex flex-col items-center gap-2 transform transition-transform duration-500 ease-out">
        <span className="material-symbols-outlined text-5xl text-primary group-hover:text-accent-blue transition-colors duration-500">
          verified
        </span>
        <span className="font-headline text-[9px] font-bold uppercase tracking-[0.2em] text-outline-variant group-hover:text-accent-blue transition-colors duration-500">
          System Active
        </span>
      </div>

    </div>
  </div>
</div>
        </div>
      </section>
    </>
  );
}

export default HomeCapabilities;