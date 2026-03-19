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

            {/* Visual Right (Interactive Dashboard Mini-Mockup) */}
            {/* NEW: Changed w-full aspect-square to h-[600px] lg:aspect-square lg:h-auto. This prevents the mobile view from pancaking the layout. */}
            <div className="bg-surface-container-low w-full h-[600px] lg:aspect-square lg:h-auto border border-outline-variant/20 p-3 md:p-5 flex flex-col relative overflow-hidden shadow-inner rounded-md">
              
              {/* Glass Window Header */}
              <div className="flex justify-between items-center pb-2.5 border-b border-outline-variant/20 mb-2.5 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-tertiary/60"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-label text-[8px] md:text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">OS Dashboard</span>
                  <span className="bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full text-[7px] md:text-[8px] font-bold animate-pulse">Interactive</span>
                </div>
              </div>
              
              {/* Miniature Dashboard Interface */}
              <div className="flex-1 flex bg-surface-bright border border-outline-variant/10 rounded-md overflow-hidden shadow-sm h-full">
                
                {/* Sidebar (Left) */}
                <div className="w-[30%] md:w-[25%] border-r border-outline-variant/10 bg-surface-bright p-2.5 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
                  {/* Logo */}
                  <div className="flex items-center gap-1.5 mb-4 shrink-0">
                    <div className="bg-on-surface text-surface rounded-[3px] w-5 h-5 flex items-center justify-center font-bold text-[10px]">+</div>
                    <div className="leading-tight overflow-hidden">
                      {/* NEW: Added truncate to prevent long text pushing the sidebar width on mobile */}
                      <div className="font-bold text-[7px] md:text-[8px] text-on-surface truncate">Arova HealthCare</div>
                      <div className="text-[5px] md:text-[6px] text-on-surface-variant truncate">Dental Clinic</div>
                    </div>
                  </div>
                  {/* Menu */}
                  <div className="text-[5px] md:text-[6px] text-on-surface-variant font-bold tracking-widest uppercase mb-2 shrink-0">Main Menu</div>
                  
                  {/* Interactive Nav Links */}
                  <div className="space-y-0.5 select-none shrink-0">
                    <div 
                      onClick={() => setActiveTab('overview')}
                      className={`flex items-center gap-1.5 p-1.5 rounded-[3px] cursor-pointer transition-colors ${activeTab === 'overview' ? 'bg-surface-container-high text-on-surface font-semibold text-[7px] md:text-[8px]' : 'text-on-surface-variant text-[7px] md:text-[8px] hover:bg-surface-container-low'}`}
                    >
                      <span className="material-symbols-outlined text-[10px]">grid_view</span> <span className="truncate">Overview</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-1.5 text-on-surface-variant text-[7px] md:text-[8px] opacity-50">
                      <span className="material-symbols-outlined text-[10px]">event</span> <span className="truncate">Appointments</span>
                    </div>
                    <div 
                      onClick={() => setActiveTab('schedules')}
                      className={`flex items-center gap-1.5 p-1.5 rounded-[3px] cursor-pointer transition-colors ${activeTab === 'schedules' ? 'bg-surface-container-high text-on-surface font-semibold text-[7px] md:text-[8px]' : 'text-on-surface-variant text-[7px] md:text-[8px] hover:bg-surface-container-low'}`}
                    >
                      <span className="material-symbols-outlined text-[10px]">schedule</span> <span className="truncate">Schedules</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-1.5 text-on-surface-variant text-[7px] md:text-[8px] opacity-50">
                      <span className="material-symbols-outlined text-[10px]">person</span> <span className="truncate">Patients</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-1.5 text-on-surface-variant text-[7px] md:text-[8px] opacity-50">
                      <span className="material-symbols-outlined text-[10px]">settings</span> <span className="truncate">Settings</span>
                    </div>
                  </div>
                  
                  {/* Bottom User */}
                  <div className="mt-auto flex items-center gap-1.5 border-t border-outline-variant/10 pt-2 shrink-0">
                    <div className="bg-on-surface text-surface rounded-full w-5 h-5 flex items-center justify-center font-bold text-[9px] shrink-0">D</div>
                    <div className="leading-tight overflow-hidden">
                      <div className="font-bold text-[6px] md:text-[7px] text-on-surface truncate">Dr. Dev</div>
                      <div className="text-[5px] text-on-surface-variant truncate">Admin</div>
                    </div>
                  </div>
                </div>

                {/* Main Content Area (Right) */}
                <div className="flex-1 bg-surface/50 p-3 md:p-4 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
                  
                  {/* ===================== OVERVIEW TAB ===================== */}
                  {activeTab === 'overview' && (
                    <div className="flex flex-col gap-3 h-full animate-[fadeIn_0.3s_ease-in-out]">
                      {/* Header */}
                      <div className="shrink-0">
                        <h3 className="font-bold text-[12px] md:text-[14px] text-on-surface mb-0.5">Good evening, Dr. Dev</h3>
                        <p className="text-[6px] md:text-[7px] text-on-surface-variant">Wednesday, March 18, 2026</p>
                      </div>

                      {/* Top Stats Grid - 2 cols on mobile, 4 on desktop for better fit */}
                      {/* NEW: Changed grid-cols-2 md:grid-cols-4 layout to prevent text collision on small phones */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 shrink-0">
                        <div className="bg-surface-bright p-2 border border-outline-variant/10 rounded-[4px] shadow-sm">
                          <div className="font-bold text-[14px] md:text-[16px] text-on-surface mb-0.5">1</div>
                          <div className="font-bold text-[6px] md:text-[7px] text-on-surface leading-tight">Today's Appointments</div>
                          <div className="text-[5px] text-on-surface-variant mt-0.5 truncate">Scheduled for today</div>
                        </div>
                        <div className="bg-surface-bright p-2 border border-outline-variant/10 rounded-[4px] shadow-sm">
                          <div className="font-bold text-[14px] md:text-[16px] text-on-surface mb-0.5">30</div>
                          <div className="font-bold text-[6px] md:text-[7px] text-on-surface leading-tight">Available Slots</div>
                          <div className="text-[5px] text-on-surface-variant mt-0.5 truncate">Open for booking</div>
                        </div>
                        <div className="bg-surface-bright p-2 border border-outline-variant/10 rounded-[4px] shadow-sm">
                          <div className="font-bold text-[14px] md:text-[16px] text-on-surface mb-0.5">3</div>
                          <div className="font-bold text-[6px] md:text-[7px] text-on-surface leading-tight">Total Patients</div>
                          <div className="text-[5px] text-on-surface-variant mt-0.5 truncate">Registered patients</div>
                        </div>
                        <div className="bg-surface-bright p-2 border border-outline-variant/10 rounded-[4px] shadow-sm">
                          <div className="font-bold text-[14px] md:text-[16px] text-on-surface mb-0.5">5</div>
                          <div className="font-bold text-[6px] md:text-[7px] text-on-surface leading-tight">Total Appointments</div>
                          <div className="text-[5px] text-on-surface-variant mt-0.5 truncate">All time</div>
                        </div>
                      </div>

                      {/* Bottom Content Grid */}
                      <div className="flex flex-col gap-2 shrink-0 pb-2">
                        
                        {/* Today's Schedule */}
                        <div className="w-full bg-surface-bright border border-outline-variant/10 rounded-[4px] p-2.5 shadow-sm flex flex-col">
                          <div className="flex justify-between items-center mb-2.5">
                            <span className="font-bold text-[8px] md:text-[9px] text-on-surface">Today's Schedule</span>
                            <span className="bg-accent-lightblue/10 text-accent-lightblue text-[6px] font-bold px-1.5 py-0.5 rounded-[2px]">1 appointment</span>
                          </div>
                          <div className="bg-surface-container-low border border-outline-variant/10 p-2 rounded-[3px] flex items-center justify-between">
                            <div className="flex items-center gap-2 md:gap-3">
                              <span className="font-bold text-[6px] md:text-[7px] text-on-surface w-6 md:w-8 shrink-0">9:00 AM</span>
                              <div className="leading-tight overflow-hidden">
                                <div className="font-bold text-[7px] md:text-[8px] text-on-surface mb-0.5 truncate">Devdeep Saha</div>
                                <div className="text-[5px] md:text-[6px] text-on-surface-variant truncate">My tooth is hurting · 9:00–9:30 AM</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                              <span className="text-[5px] md:text-[6px] font-bold text-accent-lightblue">Completed</span>
                              <div className="w-4 h-4 md:w-5 md:h-5 bg-surface-container-highest/50 rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-[8px] md:text-[10px] text-on-surface-variant">delete</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Appointment Status */}
                        <div className="w-full bg-surface-bright border border-outline-variant/10 rounded-[4px] p-2.5 shadow-sm flex flex-col gap-2">
                          <span className="font-bold text-[8px] md:text-[9px] text-on-surface mb-0.5">Appointment Status</span>
                          
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[6px] md:text-[7px]">
                              <span className="text-on-surface-variant">Confirmed</span><span className="font-bold text-on-surface">0</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-[2px] rounded-full"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[6px] md:text-[7px]">
                              <span className="text-on-surface-variant">Pending</span><span className="font-bold text-on-surface">0</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-[2px] rounded-full"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[6px] md:text-[7px]">
                              <span className="text-on-surface-variant">Completed</span><span className="font-bold text-on-surface">4</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-[2px] rounded-full overflow-hidden">
                              <div className="w-[80%] bg-accent-lightblue h-full"></div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[6px] md:text-[7px]">
                              <span className="text-on-surface-variant">Cancelled</span><span className="font-bold text-on-surface">1</span>
                            </div>
                            <div className="w-full bg-surface-container-high h-[2px] rounded-full overflow-hidden">
                              <div className="w-[20%] bg-error h-full"></div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ===================== SCHEDULES TAB ===================== */}
                  {activeTab === 'schedules' && (
                    <div className="flex flex-col gap-2.5 h-full animate-[fadeIn_0.3s_ease-in-out]">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row justify-between md:items-start gap-1 md:gap-0 shrink-0">
                        <div>
                          <h3 className="font-bold text-[12px] md:text-[14px] text-on-surface mb-0.5">Schedule Management</h3>
                          <p className="text-[6px] md:text-[7px] text-on-surface-variant">Manage appointment availability</p>
                        </div>
                        <div className="flex gap-1.5 md:gap-2">
                          <div className="border border-outline-variant/20 bg-surface-bright px-1.5 py-0.5 md:py-1 rounded text-[6px] md:text-[7px]"><span className="font-bold text-on-surface">34</span> Total</div>
                          <div className="border border-outline-variant/20 bg-surface-bright px-1.5 py-0.5 md:py-1 rounded text-[6px] md:text-[7px]"><span className="font-bold text-tertiary">30</span> Avail</div>
                          <div className="border border-outline-variant/20 bg-surface-bright px-1.5 py-0.5 md:py-1 rounded text-[6px] md:text-[7px]"><span className="font-bold text-accent-lightblue">4</span> Book</div>
                        </div>
                      </div>

                      {/* Slot Generator Card */}
                      <div className="bg-surface-bright border border-outline-variant/10 rounded-[4px] p-2.5 shadow-sm flex flex-col gap-2.5 shrink-0">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-bold text-[8px] md:text-[9px] text-on-surface block">Slot Generator</span>
                            <span className="text-[5px] md:text-[6px] text-on-surface-variant">Bulk-populate slots</span>
                          </div>
                          <span className="material-symbols-outlined text-[10px] md:text-[12px] text-on-surface-variant">remove</span>
                        </div>

                        {/* Active Weekdays */}
                        <div>
                          <span className="text-[4px] md:text-[5px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Active Weekdays</span>
                          <div className="flex flex-wrap gap-0.5 md:gap-1">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                              <div key={day} className="bg-on-surface text-surface px-1.5 md:px-2 py-0.5 rounded-full text-[5px] md:text-[6px] font-bold">{day}</div>
                            ))}
                            {['Sat', 'Sun'].map(day => (
                              <div key={day} className="border border-outline-variant/30 text-on-surface-variant px-1.5 md:px-2 py-0.5 rounded-full text-[5px] md:text-[6px]">{day}</div>
                            ))}
                          </div>
                        </div>

                        {/* Date Range Inputs */}
                        <div>
                          <span className="text-[4px] md:text-[5px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Date Range</span>
                          <div className="grid grid-cols-1 gap-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-[5px] md:text-[6px] text-on-surface-variant w-4">From</span>
                              <div className="flex-1 border border-outline-variant/30 rounded p-1 flex justify-between items-center text-[6px] md:text-[7px]">
                                <span>18 - 03 - 2026</span>
                                <span className="material-symbols-outlined text-[8px] text-outline-variant">calendar_today</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[5px] md:text-[6px] text-on-surface-variant w-4">To</span>
                              <div className="flex-1 border border-outline-variant/30 rounded p-1 flex justify-between items-center text-[6px] md:text-[7px]">
                                <span>18 - 06 - 2026</span>
                                <span className="material-symbols-outlined text-[8px] text-outline-variant">calendar_today</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Start Time */}
                        <div className="flex items-center gap-2">
                          <span className="text-[4px] md:text-[5px] font-bold text-on-surface-variant uppercase tracking-widest w-8">Start Time</span>
                          <div className="flex-1 border border-outline-variant/30 rounded p-1 flex justify-between items-center text-[6px] md:text-[7px]">
                            <span>09:00 AM</span>
                            <span className="material-symbols-outlined text-[8px] text-outline-variant">schedule</span>
                          </div>
                        </div>

                        <button className="w-full bg-on-surface text-surface rounded p-1.5 font-bold text-[6px] md:text-[7px] mt-0.5">Populate Schedule</button>
                      </div>

                      {/* Calendar Card Snippet */}
                      <div className="bg-surface-bright border border-outline-variant/10 rounded-[4px] p-2.5 shadow-sm flex-1 flex flex-col shrink-0 min-h-[140px] md:min-h-[120px] mb-2">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[8px] md:text-[10px] border border-outline-variant/20 rounded p-0.5">chevron_left</span>
                            <span className="font-bold text-[7px] md:text-[9px]">MARCH 2026</span>
                            <span className="material-symbols-outlined text-[8px] md:text-[10px] border border-outline-variant/20 rounded p-0.5">chevron_right</span>
                          </div>
                          <div className="flex border border-outline-variant/20 rounded text-[5px] md:text-[6px]">
                            <span className="px-1.5 py-0.5 bg-surface-container-high font-bold border-r border-outline-variant/20">Month</span>
                            <span className="px-1.5 py-0.5">Week</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 gap-0.5 text-center text-[5px] md:text-[6px] font-bold text-on-surface-variant mb-1 shrink-0">
                          <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                        </div>
                        <div className="grid grid-cols-7 gap-0.5 text-center text-[5px] md:text-[6px] flex-1 overflow-hidden">
                          {/* Calendar Days Visual */}
                          {Array.from({length: 14}).map((_, i) => (
                            <div key={i} className="flex items-start justify-center p-1 border-t border-outline-variant/10 text-on-surface">
                              {i + 1}
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