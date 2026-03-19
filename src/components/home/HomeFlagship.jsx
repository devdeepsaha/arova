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
            <div className="bg-surface-container-low w-full h-[650px] lg:aspect-square lg:h-auto border border-outline-variant/20 p-2 md:p-5 flex flex-col relative overflow-hidden shadow-inner rounded-md">
              
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
              <div className="flex-1 flex bg-surface-bright border border-outline-variant/10 rounded-md overflow-hidden shadow-sm h-full relative">
                
                {/* SIDEBAR - Responsive Width */}
                <div className="w-[70px] sm:w-[25%] border-r border-outline-variant/10 bg-surface-bright p-2 sm:p-4 flex flex-col shrink-0">
                  <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-hidden">
                    <div className="bg-on-surface text-surface rounded-md w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0">+</div>
                    <span className="hidden sm:inline font-bold text-[10px] text-on-surface uppercase tracking-tight truncate">Arova Health</span>
                  </div>
                  
                  <nav className="space-y-1.5">
                    <div onClick={() => setActiveTab('overview')} className={`flex items-center justify-center sm:justify-start gap-2 p-2 rounded cursor-pointer ${activeTab === 'overview' ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant'}`}>
                      <span className="material-symbols-outlined text-sm">grid_view</span> 
                      <span className="hidden sm:inline text-[10px] font-bold">Overview</span>
                    </div>
                    <div onClick={() => setActiveTab('schedules')} className={`flex items-center justify-center sm:justify-start gap-2 p-2 rounded cursor-pointer ${activeTab === 'schedules' ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant'}`}>
                      <span className="material-symbols-outlined text-sm">schedule</span> 
                      <span className="hidden sm:inline text-[10px] font-bold">Schedules</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 p-2 text-on-surface-variant/40">
                      <span className="material-symbols-outlined text-sm">person</span> 
                      <span className="hidden sm:inline text-[10px] font-bold">Patients</span>
                    </div>
                  </nav>

                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-center sm:justify-start gap-2">
                     <div className="w-6 h-6 rounded-full bg-on-surface text-surface flex items-center justify-center text-[10px] font-bold">D</div>
                     <div className="hidden sm:block leading-tight">
                        <p className="text-[9px] font-bold text-on-surface">Dr. Dev</p>
                        <p className="text-[7px] text-on-surface-variant">Admin</p>
                     </div>
                  </div>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 bg-surface/40 p-3 sm:p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                  
                  {activeTab === 'overview' && (
                    <div className="space-y-5 animate-[fadeIn_0.4s_ease-out]">
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-on-surface">Good evening, Dr. Dev</h3>
                        <p className="text-[9px] sm:text-[10px] text-on-surface-variant">Thursday, March 19, 2026</p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { val: "12", label: "Today's Appts", sub: "3 new via WhatsApp" },
                          { val: "08", label: "Available Slots", sub: "Next at 4:30 PM" },
                          { val: "142", label: "Total Patients", sub: "+12 this week" },
                          { val: "890", label: "Total Appts", sub: "98% satisfaction" }
                        ].map((stat, i) => (
                          <div key={i} className="bg-surface-bright p-3 border border-outline-variant/10 rounded-md shadow-sm">
                            <div className="font-black text-lg text-on-surface">{stat.val}</div>
                            <div className="text-[8px] font-bold text-on-surface leading-tight uppercase mb-0.5">{stat.label}</div>
                            <div className="text-[7px] text-on-surface-variant truncate">{stat.sub}</div>
                          </div>
                        ))}
                      </div>

                      {/* Today's Schedule List */}
                      <div className="bg-surface-bright border border-outline-variant/10 rounded-md p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                           <span className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Today's Schedule</span>
                           <span className="text-[8px] bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full font-bold">Active Now</span>
                        </div>
                        <div className="space-y-2">
                           {[
                             { name: "Rahul Sharma", time: "10:30 AM", status: "Confirmed", task: "General Checkup" },
                             { name: "Aditi Rao", time: "11:15 AM", status: "Waiting", task: "Dental Cleaning" }
                           ].map((appt, i) => (
                             <div key={i} className="flex items-center justify-between p-2.5 bg-surface-container-low rounded border border-outline-variant/5">
                                <div className="flex items-center gap-3">
                                   <span className="text-[8px] font-bold text-accent-blue">{appt.time}</span>
                                   <div>
                                      <p className="text-[9px] font-bold text-on-surface">{appt.name}</p>
                                      <p className="text-[7px] text-on-surface-variant">{appt.task}</p>
                                   </div>
                                </div>
                                <span className={`text-[7px] font-bold ${appt.status === 'Confirmed' ? 'text-tertiary' : 'text-error animate-pulse'}`}>{appt.status}</span>
                             </div>
                           ))}
                        </div>
                      </div>

                      {/* Appointment Status Progress */}
                      <div className="bg-surface-bright border border-outline-variant/10 rounded-md p-4 shadow-sm">
                        <span className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant block mb-4">Live Status</span>
                        <div className="space-y-3">
                          {[
                            { label: 'Confirmed', count: 8, color: 'bg-tertiary', width: 'w-[70%]' },
                            { label: 'Pending', count: 3, color: 'bg-accent-blue', width: 'w-[30%]' },
                            { label: 'Completed', count: 12, color: 'bg-on-surface', width: 'w-[90%]' }
                          ].map((item) => (
                            <div key={item.label} className="space-y-1">
                              <div className="flex justify-between text-[8px] font-bold">
                                <span className="text-on-surface-variant">{item.label}</span>
                                <span>{item.count}</span>
                              </div>
                              <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                                <div className={`${item.color} ${item.width} h-full rounded-full`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'schedules' && (
                    <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                      {/* Slot Generator Card */}
                      <div className="bg-surface-bright border border-outline-variant/10 rounded-md p-4 shadow-sm space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Slot Generator</h4>
                          <span className="material-symbols-outlined text-xs">settings_suggest</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="space-y-1">
                             <span className="text-[7px] font-bold text-on-surface-variant uppercase ml-1">Date Range</span>
                             <div className="h-9 bg-surface-container-low rounded border border-outline-variant/10 flex items-center px-3 justify-between">
                                <span className="text-[9px] text-on-surface">19 Mar - 19 Jun 2026</span>
                                <span className="material-symbols-outlined text-sm text-on-surface-variant">calendar_today</span>
                             </div>
                          </div>
                          <div className="space-y-1">
                             <span className="text-[7px] font-bold text-on-surface-variant uppercase ml-1">Active Hours</span>
                             <div className="h-9 bg-surface-container-low rounded border border-outline-variant/10 flex items-center px-3 justify-between">
                                <span className="text-[9px] text-on-surface">09:00 AM - 06:00 PM</span>
                                <span className="material-symbols-outlined text-sm text-on-surface-variant">schedule</span>
                             </div>
                          </div>
                          <button className="w-full bg-on-surface text-surface py-2.5 rounded font-bold text-[9px] uppercase tracking-widest hover:bg-on-surface/90 transition-colors">Populate Schedule</button>
                        </div>
                      </div>

                      {/* Calendar Card */}
                      <div className="bg-surface-bright border border-outline-variant/10 rounded-md p-4 shadow-sm">
                         <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-[10px] text-on-surface">MARCH 2026</span>
                            <div className="flex gap-2">
                               <span className="material-symbols-outlined text-sm border rounded p-0.5 cursor-pointer">chevron_left</span>
                               <span className="material-symbols-outlined text-sm border rounded p-0.5 cursor-pointer">chevron_right</span>
                            </div>
                         </div>
                         <div className="grid grid-cols-7 gap-1 text-[8px] text-center font-black text-on-surface-variant mb-2">
                           {['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d => <div key={d}>{d}</div>)}
                         </div>
                         <div className="grid grid-cols-7 gap-1">
                           {Array.from({length: 31}).map((_, i) => (
                             <div key={i} className={`h-8 flex items-center justify-center text-[9px] border-t border-outline-variant/5 ${i+1 === 19 ? 'bg-accent-blue text-white rounded font-bold' : 'text-on-surface-variant hover:bg-surface-container-low cursor-pointer transition-colors'}`}>
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