function AboutCTA({ onOpenModal }) {
  return (
    <section className="relative py-24 md:py-48 px-6 md:px-12 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 leading-tight">
          Let’s build something that actually works.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <button 
            onClick={onOpenModal}
            className="bg-primary text-on-primary px-8 md:px-12 py-4 md:py-6 rounded-sm font-headline font-bold text-base md:text-lg tracking-tight hover:bg-primary-dim transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full md:w-auto"
          >
            Start a Project
          </button>
          <button 
            onClick={onOpenModal}
            className="bg-transparent border border-outline-variant/30 text-primary px-8 md:px-12 py-4 md:py-6 rounded-sm font-headline font-bold text-base md:text-lg tracking-tight hover:bg-surface-container-low transition-all w-full md:w-auto"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;