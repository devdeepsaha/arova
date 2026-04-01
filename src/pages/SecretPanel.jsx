import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const SecretPanel = () => {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    full_name: '', role: 'Software Engineering Intern', duration: '3 Months',
    performance_badge: 'Top 10% Performer', avatar_url: '', hub_location: 'Kolkata, India',
    summary: '', skills: ''
  });
  const [msg, setMsg] = useState({ text: '', type: '' });

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg({ text: error.message, type: 'error' });
    else {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setMsg({ text: 'Logged in successfully', type: 'success' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Saving to Database...', type: 'info' });
    
    const skillArray = formData.skills.split(',').map(s => s.trim());

    const { error } = await supabase
      .from('interns')
      .insert([{ ...formData, skills: skillArray }]);

    if (error) setMsg({ text: 'DB Error: ' + error.message, type: 'error' });
    else {
      setMsg({ text: 'Intern Issued! ID Auto-Generated.', type: 'success' });
      setFormData({ full_name: '', role: 'Software Engineering Intern', duration: '3 Months', performance_badge: 'Top 10% Performer', avatar_url: '', hub_location: 'Kolkata, India', summary: '', skills: '' });
    }
  };

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center bg-stone-950 text-white p-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-6 p-10 bg-stone-900 rounded-xl border border-white/5 shadow-2xl">
          <div className="text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tighter uppercase">Arova Admin</h2>
            <p className="text-[10px] text-stone-500 tracking-[0.3em] mt-2">PRODUCTION GATEWAY</p>
          </div>
          <input 
            type="email" placeholder="Admin Email" 
            className="bg-stone-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" 
            className="bg-stone-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-emerald-600 hover:bg-emerald-500 transition-colors py-3 rounded-lg font-bold text-xs uppercase tracking-widest active:scale-95">Authorize</button>
          {msg.text && <p className={`text-[10px] text-center font-bold uppercase ${msg.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>{msg.text}</p>}
        </form>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 px-12 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter uppercase">Issue Credentials</h1>
          <p className="text-stone-500 text-sm mt-1">Authorized as: {session.user.email}</p>
        </div>
        <button onClick={() => supabase.auth.signOut().then(() => setSession(null))} className="text-[10px] font-bold uppercase tracking-widest text-red-500 hover:underline">Logout</button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Intern Full Name</label>
          <input required className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Avatar URL (Link to Photo)</label>
          <input className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.avatar_url} onChange={e => setFormData({...formData, avatar_url: e.target.value})} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Role / Designation</label>
          <input className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Key Skills (React, Node, etc.)</label>
          <input className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Performance Summary</label>
          <textarea rows="4" className="border-2 border-stone-100 focus:border-emerald-500 rounded-xl bg-transparent p-4 outline-none resize-none text-sm" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} />
        </div>
        <button className="md:col-span-2 bg-stone-900 text-white py-5 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-lg active:scale-[0.98]">Deploy to Blockchain & DB</button>
        {msg.text && <p className={`md:col-span-2 text-center text-[10px] font-bold uppercase tracking-widest ${msg.type === 'error' ? 'text-red-500' : 'text-emerald-600'}`}>{msg.text}</p>}
      </form>
    </main>
  );
};

export default SecretPanel;