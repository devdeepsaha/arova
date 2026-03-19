import { Link } from 'react-router-dom';

// NEW: Accept the onOpenModal prop here
function HomeHero({ onOpenModal }) {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 lg:px-12 flex items-center min-h-[80vh]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="space-y-8 text-left z-10">
            {/* Removed the blue accent color, making it all solid dark/black */}
            <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-on-surface leading-[1.05]">
              Built to <br />
              Run Businesses.
            </h1>
            
            <p className="text-lg md:text-2xl text-on-surface-variant max-w-xl font-light leading-relaxed">
              We design software that automates workflows, simplifies operations, and scales with your business.
            </p>
            
            {/* Buttons now left-aligned on desktop, full-width on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                to="/healthcare" 
                className="bg-on-surface text-surface px-10 py-5 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all active:scale-95 shadow-xl shadow-on-surface/10 w-full sm:w-auto text-center inline-block"
              >
               Explore AROVA Healthcare
              </Link>
              
              {/* NEW: Added onClick={onOpenModal} to this button */}
              <button 
                onClick={onOpenModal}
                className="bg-transparent border-2 border-outline-variant/50 text-on-surface px-10 py-5 font-headline font-bold uppercase tracking-widest text-xs hover:border-on-surface transition-all active:scale-95 w-full sm:w-auto text-center"
              >
                Book Demo
              </button>
            </div>
          </div>

          {/* Right Column: Square Image */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-full lg:mx-0">
            {/* The Image Container */}
            <div className="relative aspect-square w-full bg-surface-container-low border border-outline-variant/20 p-3 shadow-2xl overflow-hidden">
              <img 
                src="./hero1.jpg" 
                alt="Arova Technical Architecture" 
                className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700"
              />
              
              {/* Premium Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-on-surface -translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-on-surface translate-x-1 translate-y-1"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Positioning Strip */}
      <section className="py-12 border-y border-outline-variant/20 bg-surface-container-low/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-headline uppercase tracking-[0.2em] text-xs md:text-sm text-on-surface font-bold">
            Built for businesses that want automation.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeHero;