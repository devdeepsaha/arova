import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const SecretPanel = () => {
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // overview, interns, issue
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  
  // Skill System State
  const [customSkill, setCustomSkill] = useState('');
  const PREDEFINED_SKILLS = ["Fast Builder", "Problem Solver", "Strong Communicator", "Security Aware", "Quick Learner"];

  // Form State
  const [formData, setFormData] = useState({
    full_name: '', role: 'Software Engineering Intern', duration: '3 Months',
    performance_badge: 'Top 10% Performer', avatar_url: '', hub_location: 'Kolkata, India',
    summary: '', skills: [], status: 'Active'
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchInterns();
    });
  }, []);

  const fetchInterns = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('interns').select('*').order('created_at', { ascending: false });
    if (!error) setInterns(data);
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg({ text: error.message, type: 'error' });
    else {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      fetchInterns();
    }
  };

  const handleIssue = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Deploying...', type: 'info' });
    const { error } = await supabase.from('interns').insert([formData]);
    if (error) setMsg({ text: error.message, type: 'error' });
    else {
      setMsg({ text: 'Identity Certificate Deployed', type: 'success' });
      setFormData({ ...formData, full_name: '', skills: [], summary: '' });
      fetchInterns();
      setActiveTab('overview');
    }
  };

  const toggleSkill = (skill) => {
    const current = formData.skills;
    const next = current.includes(skill) ? current.filter(s => s !== skill) : [...current, skill];
    setFormData({ ...formData, skills: next });
  };

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-surface blueprint-grid">
        <div className="max-w-md w-full p-10 bg-surface-container-lowest rounded-sm shadow-2xl border border-outline-variant/10">
          <div className="text-center mb-10">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">lock_open</span>
            <h2 className="text-3xl font-headline font-bold text-primary uppercase tracking-tighter">Authorization</h2>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">Secure Admin Gateway</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="email" placeholder="Admin Email" className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-4 focus:ring-0 focus:border-tertiary text-sm" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Access Token" className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-4 focus:ring-0 focus:border-tertiary text-sm tracking-widest" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="w-full bg-primary text-on-primary py-4 font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary-dim transition-all">Establish Link</button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-outline-variant/15 bg-surface/70 backdrop-blur-2xl hidden md:flex flex-col p-8 z-40">
        <div className="mt-12 mb-12">
          <h2 className="uppercase tracking-[0.2em] text-[10px] font-black text-primary">Arova Admin</h2>
          <p className="text-[10px] text-on-surface-variant/60 font-bold uppercase mt-1">Identity Registry</p>
        </div>
        <nav className="flex flex-col gap-2">
          {[
            { id: 'overview', icon: 'dashboard', label: 'Overview' },
            { id: 'issue', icon: 'verified_user', label: 'New Issue' }
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all ${activeTab === item.id ? 'bg-surface-container-low text-emerald-800 font-bold border-l-2 border-emerald-700' : 'text-primary opacity-60 hover:opacity-100'}`}>
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span className="uppercase tracking-widest text-[10px]">{item.label}</span>
            </button>
          ))}
        </nav>
        <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className="mt-auto text-[10px] font-bold uppercase text-red-500 text-left px-4">Terminate Session</button>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-24 px-12 pb-12 blueprint-grid min-h-screen">
        <header className="mb-12">
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-primary uppercase">Secret Panel</h1>
          <p className="text-on-surface-variant/80 font-medium tracking-widest text-[10px] uppercase mt-2">Authorized Architectural Console — v2.0.4</p>
        </header>

        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-700">
            {/* Stats Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-surface-container-lowest p-8 rounded-sm shadow-sm border border-outline-variant/5">
                <p className="uppercase tracking-widest text-[9px] font-bold text-stone-400 mb-4">Total Registry</p>
                <h3 className="text-4xl font-headline font-bold text-primary">{interns.length}</h3>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-sm shadow-sm border border-outline-variant/5">
                <p className="uppercase tracking-widest text-[9px] font-bold text-stone-400 mb-4">Engineering</p>
                <h3 className="text-4xl font-headline font-bold text-primary">{interns.filter(i => i.verification_id?.includes('DEV')).length}</h3>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-sm shadow-sm border border-l-4 border-emerald-600">
                <p className="uppercase tracking-widest text-[9px] font-bold text-stone-400 mb-4">Active System</p>
                <h3 className="text-4xl font-headline font-bold text-emerald-700">99.9%</h3>
              </div>
            </div>

            {/* Table */}
            <div className="bg-surface-container-lowest rounded-sm border border-outline-variant/10 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low border-b border-outline-variant/10">
                  <tr className="uppercase tracking-widest text-[9px] font-bold text-stone-400">
                    <th className="p-6">Intern Identity</th>
                    <th className="p-6">Reference ID</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {interns.map(i => (
                    <tr key={i.id} className="hover:bg-surface-container-low/30 transition-colors">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <img src={i.avatar_url || 'https://via.placeholder.com/40'} className="w-10 h-10 rounded-sm object-cover grayscale" />
                          <div>
                            <p className="text-sm font-bold text-primary">{i.full_name}</p>
                            <p className="text-[10px] text-stone-400 uppercase font-bold">{i.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 font-mono text-xs text-emerald-700 font-bold">{i.verification_id}</td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-black uppercase rounded-sm border border-emerald-100">{i.status}</span>
                      </td>
                      <td className="p-6 text-right font-bold text-xs text-stone-300">DETAILS</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'issue' && (
          <div className="max-w-2xl animate-in slide-in-from-right-4 duration-500">
            <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10 shadow-xl">
              <form onSubmit={handleIssue} className="space-y-8">
                <div className="space-y-1">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-primary block">Legal Name</label>
                  <input required className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
                </div>
                
                <div className="space-y-1">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-primary block">Department</label>
                  <select className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm uppercase font-bold" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                    <option value="Software Engineering Intern">Engineering (DEV)</option>
                    <option value="UI/UX Design Intern">Design (DSGN)</option>
                    <option value="Marketing Intern">Marketing (MKT)</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-primary block">Skill Matrix</label>
                  <div className="flex flex-wrap gap-2">
                    {PREDEFINED_SKILLS.map(s => (
                      <button type="button" key={s} onClick={() => toggleSkill(s)} className={`px-3 py-1 text-[9px] font-bold border transition-all ${formData.skills.includes(s) ? 'bg-primary text-white' : 'bg-transparent text-stone-400 border-stone-200'}`}>{s}</button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="uppercase tracking-widest text-[10px] font-bold text-primary block">Contribution Summary</label>
                  <textarea rows="4" className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm resize-none" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} />
                </div>

                <button className="w-full bg-primary text-on-primary py-5 font-headline font-bold text-xs uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all flex items-center justify-center gap-3">
                  Deploy Identity Certificate
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                </button>
                {msg.text && <p className="text-center text-[10px] font-black uppercase tracking-widest text-emerald-600">{msg.text}</p>}
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-20 z-[-1]"></div>
    </div>
  );
};

export default SecretPanel;