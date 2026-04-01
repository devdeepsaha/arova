import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Verify = () => {
  const [searchId, setSearchId] = useState('');
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async () => {
    if (!searchId) return;
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from('interns')
      .select('*')
      .eq('verification_id', searchId.trim().toUpperCase())
      .single();

    if (error || !data) {
      setError("Invalid Verification ID. Please check and try again.");
      setIntern(null);
    } else {
      setIntern(data);
    }
    setLoading(false);
  };

  return (
    <main className="relative pt-32 pb-24 px-12 min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
      
      <section className="w-full max-w-2xl text-center z-10 mb-20">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-on-background mb-4">Verification Portal</h1>
        <p className="text-on-surface-variant mb-12 max-w-md mx-auto leading-relaxed text-sm">Secure credentials validation for Arova Technology interns.</p>
        
        <div className="relative group">
          <label className="block text-left font-label text-[10px] uppercase tracking-widest text-primary mb-2 ml-1">Enter Intern ID</label>
          <div className="flex items-end gap-0 border-b border-outline-variant/40 focus-within:border-tertiary transition-colors duration-300">
            <input 
              className="w-full bg-transparent border-none py-4 text-xl font-headline focus:ring-0 placeholder:text-outline-variant/50 uppercase" 
              placeholder="e.g., ARV-INT-7F3K9Q-A2" 
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
            />
            <button 
              onClick={handleVerify}
              disabled={loading}
              className="bg-primary hover:bg-primary-dim text-on-primary font-headline px-8 py-4 mb-0 transition-all duration-300 active-scale flex items-center gap-2"
            >
              <span>{loading ? '...' : 'Verify'}</span>
              <span className="material-symbols-outlined text-sm text-white">arrow_forward</span>
            </button>
          </div>
          {error && <p className="text-red-500 text-xs mt-4 text-left ml-1">{error}</p>}
        </div>
      </section>

      {intern && (
        <section className="w-full max-w-4xl z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-surface-container-low rounded-md shadow-xl overflow-hidden border border-outline-variant/10">
            <div className="px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-sm mb-8">
                    <span className="material-symbols-outlined text-emerald-700 text-sm">verified</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-emerald-800 font-bold">Verified Intern</span>
                  </div>
                  <h2 className="font-headline text-5xl font-bold tracking-tighter text-stone-900 mb-2">{intern.full_name}</h2>
                  <p className="font-headline text-2xl text-emerald-700 tracking-tight font-medium">{intern.role}</p>
                </div>
                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-outline-variant/10 pt-8">
                  <div>
                    <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Duration</span>
                    <span className="font-headline text-lg font-medium">{intern.duration}</span>
                  </div>
                  <div>
                    <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Status</span>
                    <div className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-700 text-sm">emoji_events</span>
                      <span className="font-headline text-lg font-bold">{intern.performance_badge}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col items-center md:items-end justify-between">
                <div className="w-48 h-60 bg-stone-200 rounded-sm overflow-hidden border border-outline-variant/10 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={intern.avatar_url || 'https://via.placeholder.com/150'} alt="Intern" className="w-full h-full object-cover" />
                </div>
                <div className="mt-8 text-right">
                  <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Hub</span>
                  <span className="font-headline font-medium">{intern.hub_location}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/50 px-12 py-10 border-t border-outline-variant/10">
              <h3 className="font-label text-[10px] uppercase tracking-widest text-primary mb-4">Contribution Summary</h3>
              <p className="text-stone-600 leading-relaxed text-sm max-w-2xl">{intern.summary}</p>
            </div>
            <div className="bg-stone-100 px-12 py-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-500">
               <span>REF: {intern.verification_id}</span>
               <span>Issued: {new Date(intern.issue_date).toLocaleDateString()}</span>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Verify;