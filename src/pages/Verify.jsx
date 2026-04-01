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

    // Fetching the intern based on the new Role-Aware ID
    const { data, error } = await supabase
      .from('interns')
      .select('*')
      .eq('verification_id', searchId.trim().toUpperCase())
      .single();

    if (error || !data) {
      setError("Invalid Verification ID. Please check the prefix (e.g., DEV, DSGN) and try again.");
      setIntern(null);
    } else {
      setIntern(data);
    }
    setLoading(false);
  };

  return (
    <main className="relative pt-32 pb-24 px-6 lg:px-12 min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-[0.03]"></div>
      
      {/* Search Section */}
      <section className="w-full max-w-2xl text-center z-10 mb-16">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-stone-900 mb-4 uppercase">Identity Verification</h1>
        <p className="text-stone-500 mb-10 max-w-md mx-auto leading-relaxed text-sm font-medium uppercase tracking-widest">
          Validate professional credentials issued by Arova Technologies.
        </p>
        
        <div className="relative group">
          <label className="block text-left font-label text-[10px] uppercase tracking-[0.3em] text-emerald-600 font-black mb-2 ml-1">Credential Reference</label>
          <div className="flex items-center gap-0 border-b-2 border-stone-200 focus-within:border-emerald-500 transition-all duration-300">
            <input 
              className="w-full bg-transparent border-none py-5 text-2xl font-mono focus:ring-0 placeholder:text-stone-300 uppercase tracking-tighter" 
              placeholder="ARV-DEV-XXXXXX-XX" 
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
            />
            <button 
              onClick={handleVerify}
              disabled={loading}
              className="bg-stone-900 hover:bg-emerald-600 text-white font-bold px-10 py-5 transition-all duration-300 active:scale-95 flex items-center gap-3 uppercase text-xs tracking-widest"
            >
              <span>{loading ? 'Validating' : 'Verify'}</span>
              <span className="material-symbols-outlined text-sm">{loading ? 'sync' : 'verified'}</span>
            </button>
          </div>
          {error && <p className="text-red-500 text-[10px] mt-4 text-left font-black uppercase tracking-widest ml-1 animate-pulse">{error}</p>}
        </div>
      </section>

      {/* Result View */}
      {intern && (
        <section className="w-full max-w-4xl z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-stone-100">
            
            {/* Top Identity Block */}
            <div className="px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 bg-gradient-to-br from-white to-stone-50/50">
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full mb-8">
                    <span className="material-symbols-outlined text-emerald-600 text-sm font-bold">verified</span>
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-emerald-700 font-black">Official Record</span>
                  </div>
                  <h2 className="font-headline text-6xl font-bold tracking-tighter text-stone-900 mb-3">{intern.full_name}</h2>
                  <p className="font-headline text-2xl text-emerald-600 tracking-tight font-bold uppercase">{intern.role}</p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-10 border-t border-stone-100 pt-10">
                  <div>
                    <span className="block font-label text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2">Duration</span>
                    <span className="font-headline text-lg font-bold text-stone-800">{intern.duration}</span>
                  </div>
                  <div>
                    <span className="block font-label text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2">Performance</span>
                    <div className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-sm">workspace_premium</span>
                      <span className="font-headline text-lg font-bold text-stone-800">{intern.performance_badge}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center md:items-end justify-between">
                <div className="w-52 h-64 bg-stone-100 rounded-2xl overflow-hidden border-4 border-white shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={intern.avatar_url || 'https://via.placeholder.com/400x500?text=No+Image'} 
                    alt="Authorized Personnel" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="mt-8 text-right">
                  <span className="block font-label text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-1">Deployment Hub</span>
                  <span className="font-headline font-bold text-stone-900">{intern.hub_location}</span>
                </div>
              </div>
            </div>

            {/* Skills & Contribution */}
            <div className="bg-stone-900 px-12 py-14">
              <h3 className="font-label text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-black mb-8 text-center md:text-left">Skill Matrix & Competency</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-stone-400 leading-relaxed text-sm font-medium">
                  {intern.summary}
                </p>
                <div className="flex flex-wrap gap-2 content-start">
                  {intern.skills && intern.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest hover:bg-emerald-500 hover:text-stone-950 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="bg-white px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-stone-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-900 rounded-xl text-emerald-400">
                  <span className="material-symbols-outlined text-2xl">qr_code_2</span>
                </div>
                <div>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-stone-400 font-bold">Authority</span>
                  <span className="font-headline font-black text-xs text-stone-900 uppercase">Arova Tech Systems</span>
                </div>
              </div>
              <div className="flex gap-16 text-right">
                <div>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-stone-400 font-bold">Issue Date</span>
                  <span className="font-headline font-black text-xs text-stone-900 uppercase">
                    {new Date(intern.issue_date || intern.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div>
                  <span className="block font-label text-[10px] uppercase tracking-widest text-stone-400 font-bold">Internal Status</span>
                  <span className={`font-headline font-black text-xs uppercase ${intern.status === 'Active' ? 'text-blue-600' : 'text-stone-500'}`}>
                    {intern.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Download Certificate
            </button>
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-emerald-600/20">
              Confirm for HR
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Verify;