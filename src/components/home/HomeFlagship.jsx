import { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeFlagship() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    "Book appointments via WhatsApp",
    "AI-assisted scheduling",
    "Smart dashboard for doctors"
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-lowest p-6 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-outline-variant/10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Left */}
            <div className="space-y-8 md:space-y-10">
              <div className="inline-block px-4 py-2 bg-accent-blue/10 text-accent-blue font-headline font-bold uppercase tracking-widest text-xs rounded-sm">
                AUTOMATE YOUR WORKFLOW
              </div>
              
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-4">
                  AROVA Healthcare
                </h2>
                <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-snug">
                  A WhatsApp-first operating system for clinics.
                </p>
              </div>

              <ul className="space-y-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-accent-blue">check_circle</span>
                    <span className="font-headline font-semibold text-lg text-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                 to="/healthcare"
                 className="bg-accent-blue text-white px-8 py-4 font-headline font-bold uppercase tracking-widest text-xs hover:bg-accent-lightblue transition-all flex justify-center items-center text-center"
                >
                View Product
                </Link>
                <button className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs hover:text-accent-blue transition-colors flex items-center justify-center gap-2 px-4 py-4">
                  See How It Works <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Visual Right (Mockup) */}
            {/* CHANGED: Switched to min-h and max-h to prevent breaking in square desktop modes */}
            <div className="bg-surface-container-low w-full h-[600px] lg:h-[650px] border border-outline-variant/20 p-2 md:p-5 flex flex-col relative overflow-hidden shadow-inner rounded-md">
              
              {/* Header */}
              <div className="flex justify-between items-center pb-2.5 border-b border-outline-variant/20 mb-2.5 shrink-0 px-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-error/80"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant/50"></div>
                  <div className="w-2 h-2 rounded-full bg-tertiary/60"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant font-bold">OS Dashboard</span>
                  <div className="bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full text-[7px] font-bold animate-pulse">Live</div>
                </div>
              </div>
              
              {/* Interface Container */}
              <div className="flex-1 flex bg-surface-bright border border-outline-variant/10 rounded-md overflow-hidden shadow-sm relative min-h-0">
                
                {/* SIDEBAR */}
                <div className="w-[60px] sm:w-[25%] border-r border-outline-variant/10 bg-surface-bright p-2 sm:p-4 flex flex-col shrink-0 h-full">
                  <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-hidden">
                    <div className="bg-on-surface text-surface rounded-md w-5 h-5 flex items-center justify-center font-bold text-xs shrink-0">+</div>
                    <span className="hidden sm:inline font-bold text-[9px] text-on-surface uppercase tracking-tighter truncate">Arova Health</span>
                  </div>
                  
                  <nav className="space-y-1">
                    <div onClick={() => setActiveTab('overview')} className={`flex items-center justify-center sm:justify-start gap-2 p-2 rounded cursor-pointer transition-colors ${activeTab === 'overview' ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                      <span className="material-symbols-outlined text-sm">grid_view</span> 
                      <span className="hidden sm:inline text-[9px] font-bold">Overview</span>
                    </div>
                    <div onClick={() => setActiveTab('schedules')} className={`flex items-center justify-center sm:justify-start gap-2 p-2 rounded cursor-pointer transition-colors ${activeTab === 'schedules' ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                      <span className="material-symbols-outlined text-sm">schedule</span> 
                      <span className="hidden sm:inline text-[9px] font-bold">Schedules</span>
                    </div>
                  </nav>

                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-center sm:justify-start gap-2">
                     <div className="w-5 h-5 rounded-full bg-on-surface text-surface flex items-center justify-center text-[8px] font-bold">D</div>
                     <div className="hidden sm:block leading-tight truncate">
                        <p className="text-[8px] font-bold text-on-surface">Dr. Dev</p>
                        <p className="text-[6px] text-on-surface-variant">Admin</p>
                     </div>
                  </div>
                </div>

                {/* MAIN CONTENT AREA - Added relative and overflow-y-auto to allow scrolling inside the mockup */}
                <div className="flex-1 bg-surface/30 p-3 sm:p-5 overflow-y-auto custom-scrollbar relative h-full">
                  
                  {activeTab === 'overview' && (
                    <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-bold text-xs sm:text-sm text-on-surface">Good evening, Dr. Dev</h3>
                          <p className="text-[8px] sm:text-[9px] text-on-surface-variant">March 19, 2026</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: "12", label: "Appts", color: "text-on-surface" },
                          { val: "08", label: "Slots", color: "text-tertiary" },
                          { val: "142", label: "Patients", color: "text-on-surface" },
                          { val: "890", label: "Total", color: "text-on-surface" }
                        ].map((stat, i) => (
                          <div key={i} className="bg-surface-bright p-2.5 border border-outline-variant/10 rounded shadow-sm">
                            <div className={`font-black text-base ${stat.color}`}>{stat.val}</div>
                            <div className="text-[7px] font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-surface-bright border border-outline-variant/10 rounded p-3 shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                           <span className="font-bold text-[8px] uppercase tracking-[0.2em] text-on-surface-variant">Live Queue</span>
                        </div>
                        <div className="space-y-1.5">
                           {[
                             { name: "Rahul S.", time: "10:30 AM", status: "In Room" },
                             { name: "Aditi R.", time: "11:15 AM", status: "Waiting" }
                           ].map((appt, i) => (
                             <div key={i} className="flex items-center justify-between p-2 bg-surface-container-low rounded border border-outline-variant/5">
                                <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-tertiary"></div>
                                   <p className="text-[8px] font-bold text-on-surface">{appt.name}</p>
                                </div>
                                <span className="text-[7px] font-bold text-accent-blue">{appt.time}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'schedules' && (
                    <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                      <div className="bg-surface-bright border border-outline-variant/10 rounded p-3 shadow-sm space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-[8px] uppercase tracking-widest text-on-surface-variant">Slot Generator</h4>
                          <span className="material-symbols-outlined text-xs text-on-surface-variant">auto_awesome</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-8 bg-surface-container-low rounded border border-outline-variant/10 flex items-center px-2 justify-between">
                            <span className="text-[8px] text-on-surface">19 Mar - 19 Jun</span>
                            <span className="material-symbols-outlined text-xs text-on-surface-variant">calendar_today</span>
                          </div>
                          <div className="h-8 bg-surface-container-low rounded border border-outline-variant/10 flex items-center px-2 justify-between">
                            <span className="text-[8px] text-on-surface">09:00 AM - 06:00 PM</span>
                            <span className="material-symbols-outlined text-xs text-on-surface-variant">schedule</span>
                          </div>
                          <button className="w-full bg-on-surface text-surface py-2 rounded font-bold text-[8px] uppercase tracking-widest">Populate</button>
                        </div>
                      </div>

                      <div className="bg-surface-bright border border-outline-variant/10 rounded p-3 shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-[9px]">March 2026</span>
                          <div className="flex gap-1">
                            <span className="material-symbols-outlined text-xs border rounded cursor-pointer">chevron_left</span>
                            <span className="material-symbols-outlined text-xs border rounded cursor-pointer">chevron_right</span>
                          </div>
                        </div>
                         <div className="grid grid-cols-7 gap-1 text-[6px] text-center font-bold text-on-surface-variant mb-1">
                           {['M','T','W','T','F','S','S'].map(d => <div key={d}>{d}</div>)}
                         </div>
                         <div className="grid grid-cols-7 gap-1">
                           {Array.from({length: 31}).map((_, i) => (
                             <div key={i} className={`h-6 flex items-center justify-center text-[8px] border-t border-outline-variant/5 ${i+1 === 19 ? 'bg-accent-blue text-white rounded-full font-bold' : 'text-on-surface-variant'}`}>
                               {i+1}
                             </div>
                           ))}
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFlagship;