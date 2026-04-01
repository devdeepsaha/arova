import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMsg({ text: error.message, type: 'error' });
    } else {
      const { data } = await supabase.auth.getSession();
      onLoginSuccess(data.session);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface blueprint-grid px-4">
      <div className="max-w-md w-full p-8 md:p-12 bg-surface-container-lowest rounded-sm shadow-2xl border border-outline-variant/10">
        <div className="text-center mb-10">
          <span className="material-symbols-outlined text-primary text-5xl mb-4">lock_open</span>
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary uppercase tracking-tighter">Authorization</h2>
          <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-black mt-2">Arova Admin Gateway</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <input type="email" placeholder="ADMIN USER" className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-4 focus:ring-0 focus:border-tertiary text-sm font-bold" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="ACCESS TOKEN" className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-4 focus:ring-0 focus:border-tertiary text-sm tracking-[0.5em]" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="w-full bg-primary text-on-primary py-5 font-headline font-bold text-xs uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all shadow-xl">Establish Link</button>
          {msg.text && <p className={`text-[10px] text-center font-black uppercase tracking-widest ${msg.type === 'error' ? 'text-red-500' : 'text-emerald-600'}`}>{msg.text}</p>}
        </form>
      </div>
    </main>
  );
};

export default Login;