import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  // Updated with the new roles and professional descriptions
  const positions = [
    {
      title: "HR Intern",
      type: "Remote",
      duration: "1 Month",
      description: "Shape the future of our workforce. Assist in talent acquisition, streamline onboarding workflows, and cultivate a high-performance engineering culture."
    },
    {
      title: "Sales Intern",
      type: "Remote / Field",
      duration: "1 Month",
      description: "Drive growth for our B2B SaaS products like Arova. Engage with clinics and enterprise clients to expand our market presence and revenue streams."
    },
    {
      title: "Automation Developer Intern",
      type: "Remote",
      duration: "1 Month",
      description: "Build intelligent workflows and robust scripts. Focus on system automation, data handling, and building custom bot integrations to scale our operations."
    },
    {
      title: "Social Media Intern",
      type: "Remote",
      duration: "1 Month",
      description: "Architect our digital narrative. Manage brand presence, design engaging content strategies, and connect with the broader tech community."
    }
  ];

  return (
    <main className="relative pt-32 pb-24 px-6 lg:px-12 min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>

      {/* Header Section */}
      <section className="w-full max-w-4xl text-center z-10 mb-20">
        <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter text-on-background mb-6 uppercase">
          Build the Future <br /> With Arova
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-lg font-medium">
          We are looking for ambitious interns who want to move beyond "demo projects" and build production-grade systems for the Indian healthcare and tech ecosystem.
        </p>
      </section>

      {/* Verification CTA Section */}
      <section className="w-full max-w-5xl z-10 mb-24">
        <div className="bg-stone-900 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
          <div className="text-center lg:text-left">
            <h2 className="text-white font-headline text-3xl font-bold mb-2 tracking-tight">Already worked with us?</h2>
            <p className="text-stone-400 text-sm font-medium">Verify your internship credentials on our secure blockchain-backed portal.</p>
          </div>
          <Link 
            to="/verify" 
            className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            Verify Certificate
          </Link>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full max-w-5xl z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px flex-grow bg-outline-variant/30"></span>
          <h2 className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Open Internships</h2>
          <span className="h-px flex-grow bg-outline-variant/30"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((job, index) => (
            <div key={index} className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{job.duration}</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">{job.type}</span>
                </div>
                <span className="material-symbols-outlined text-stone-300 group-hover:text-emerald-500 transition-colors">arrow_outward</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 tracking-tight text-stone-900">{job.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">{job.description}</p>
              
              {/* Updated Apply Button - Now points to Google Form */}
              <div className="mt-auto">
                 <a 
                   href="https://forms.gle/F2UvS6aoqsXENDwJA" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-stone-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all group-hover:text-emerald-600 group-hover:border-emerald-600"
                 >
                   Apply Now
                   <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                 </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="mt-24 text-center z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
          Arova is an equal opportunity curator of talent.
        </p>
      </section>
    </main>
  );
};

export default Careers;