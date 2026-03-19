import { Link } from 'react-router-dom';
// NEW: Import the simulation component
import WhatsAppSimulation from './WhatsAppSimulation';

function HealthcareHero({ onOpenModal, onOpenSetupModal }) {
  return (
    <section className="relative px-6 md:px-12 pt-16 pb-20 md:py-32 max-w-[1440px] mx-auto min-h-screen md:min-h-[819px] flex flex-col justify-center blueprint-bg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 mt-8 md:mt-0">
          <span className="inline-block py-1 px-3 bg-tertiary/10 text-tertiary font-label text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
            Arova Healthcare
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-on-surface mb-6 md:mb-8">
            A Clinic Operating System, <br className="hidden sm:block" />
            <span className="text-tertiary">Built for WhatsApp.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-8 md:mb-10">
            AROVA Healthcare transforms how clinics manage appointments, patients, and schedules — by bringing everything into a seamless, WhatsApp-first workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button 
              onClick={onOpenSetupModal}
              className="bg-primary text-on-primary px-10 py-4 rounded-sm font-headline font-bold uppercase tracking-widest hover:shadow-xl transition-all w-full sm:w-auto text-center"
            >
              Get Setup Plan
            </button>
            <button 
              onClick={onOpenModal}
              className="bg-surface-container-lowest border border-outline-variant/20 px-10 py-4 rounded-sm font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all w-full sm:w-auto text-center"
            >
              Book Demo
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          
          {/* CHANGED: Dropped in the new animated component! */}
          <WhatsAppSimulation />
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-4 md:-right-10 w-48 md:w-64 h-48 md:h-64 bg-tertiary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-4 md:-left-10 w-40 md:w-48 h-40 md:h-48 bg-primary/5 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default HealthcareHero;