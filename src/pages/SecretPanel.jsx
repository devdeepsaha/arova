import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const SecretPanel = () => {
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [customSkill, setCustomSkill] = useState('');
  const PREDEFINED_SKILLS = [
    "Fast Builder", "Problem Solver", "Strong Communicator", 
    "Independent Worker", "Team Player", "Security Aware", 
    "Attention to Detail", "Creative Thinker", "High Ownership", "Quick Learner"
  ];

  // Form State - Notice 'performance_badge' starts empty, and 'certificate_url' is added
  const [formData, setFormData] = useState({
    full_name: '', 
    role: 'Software Engineering Intern', 
    duration: '3 Months',
    performance_badge: '', 
    avatar_url: '', 
    certificate_url: '',
    hub_location: 'Kolkata, India',
    summary: '', 
    skills: [], 
    status: 'Active'
  });
  
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingCert, setUploadingCert] = useState(false);

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

  // --- AVATAR UPLOAD (With Resize) ---
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingAvatar(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = async () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400; 
          const scaleSize = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(async (blob) => {
            const fileName = `avatar-${Date.now()}.jpg`;
            const { error } = await supabase.storage.from('intern-avatars').upload(fileName, blob);
            if (error) throw error;
            const { data: urlData } = supabase.storage.from('intern-avatars').getPublicUrl(fileName);
            setFormData({ ...formData, avatar_url: urlData.publicUrl });
            setMsg({ text: 'Avatar synced successfully', type: 'success' });
            setUploadingAvatar(false);
          }, 'image/jpeg', 0.8);
        };
      };
    } catch (err) {
      setMsg({ text: 'Avatar upload failed: ' + err.message, type: 'error' });
      setUploadingAvatar(false);
    }
  };

  // --- CERTIFICATE UPLOAD (Direct PDF/Image Upload) ---
  const handleCertificateUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingCert(true);
    try {
      // We don't resize certificates, we upload them directly (could be PDF)
      const fileExt = file.name.split('.').pop();
      const fileName = `cert-${Date.now()}.${fileExt}`;
      
      const { error } = await supabase.storage
        .from('intern-certificates')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from('intern-certificates')
        .getPublicUrl(fileName);

      setFormData({ ...formData, certificate_url: urlData.publicUrl });
      setMsg({ text: 'Official Certificate document attached', type: 'success' });
    } catch (err) {
      setMsg({ text: 'Certificate upload failed: ' + err.message, type: 'error' });
    } finally {
      setUploadingCert(false);
    }
  };

  const toggleSkill = (skill) => {
    const current = Array.isArray(formData.skills) ? formData.skills : [];
    const next = current.includes(skill) ? current.filter(s => s !== skill) : current.length < 10 ? [...current, skill] : current;
    setFormData({ ...formData, skills: next });
  };

  const addCustomSkill = (e) => {
    if (e.key === 'Enter' && customSkill.trim() !== '') {
      e.preventDefault();
      const clean = customSkill.trim();
      if (!formData.skills.includes(clean) && formData.skills.length < 10) {
        setFormData(prev => ({ ...prev, skills: [...prev.skills, clean] }));
      }
      setCustomSkill('');
    }
  };

  const handleIssue = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Deploying to Registry...', type: 'info' });
    const { error } = await supabase.from('interns').insert([formData]);
    if (error) setMsg({ text: error.message, type: 'error' });
    else {
      setMsg({ text: 'Identity Certificate Deployed Successfully', type: 'success' });
      setFormData({ full_name: '', role: 'Software Engineering Intern', duration: '3 Months', performance_badge: '', avatar_url: '', certificate_url: '', hub_location: 'Kolkata, India', summary: '', skills: [], status: 'Active' });
      fetchInterns();
      setActiveTab('overview');
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const statuses = ['Active', 'Completed', 'Extended'];
    const nextStatus = statuses[(statuses.indexOf(currentStatus) + 1) % statuses.length];
    const { error } = await supabase.from('interns').update({ status: nextStatus }).eq('id', id);
    if (!error) setInterns(interns.map(i => i.id === id ? { ...i, status: nextStatus } : i));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Confirm deletion? This record will be purged from the registry.")) return;
    const { error } = await supabase.from('interns').delete().eq('id', id);
    if (!error) setInterns(interns.filter(i => i.id !== id));
  };

  const filteredInterns = interns.filter(i => i.full_name.toLowerCase().includes(search.toLowerCase()) || (i.verification_id && i.verification_id.toLowerCase().includes(search.toLowerCase())));

  const stats = {
    total: interns.length,
    devs: interns.filter(i => i.verification_id?.includes('-DEV-')).length,
    dsgn: interns.filter(i => i.verification_id?.includes('-DSGN-')).length,
    active: interns.filter(i => i.status === 'Active').length
  };

  if (!session) {
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
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <div className="md:hidden fixed top-0 left-0 w-full bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 z-40 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="uppercase tracking-[0.2em] text-[12px] font-black text-[#5f5e5e]">Arova Admin</h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="material-symbols-outlined text-primary text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</button>
      </div>

      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>}

      <aside className={`fixed left-0 top-0 h-screen w-64 border-r border-[#b3b2b1]/15 bg-[#fcf9f8]/95 backdrop-blur-2xl flex flex-col p-8 z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="mt-8 md:mt-12 mb-12">
          <h2 className="uppercase tracking-[0.3em] text-[10px] font-black text-[#5f5e5e]">Arova Systems</h2>
          <p className="text-[10px] text-on-surface-variant/60 font-bold uppercase mt-1">Identity Control</p>
        </div>
        <nav className="flex flex-col gap-2">
          {[ { id: 'overview', icon: 'dashboard', label: 'Identity Matrix' }, { id: 'issue', icon: 'verified_user', label: 'Certificate Issue' } ].map(item => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }} className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300 ${activeTab === item.id ? 'bg-[#f6f3f2] text-emerald-800 font-black border-l-2 border-emerald-700' : 'text-[#5f5e5e] opacity-60 hover:opacity-100 hover:bg-stone-50'}`}>
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span className="uppercase tracking-widest text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
        </nav>
        <button onClick={() => { const csv = interns.map(i => `${i.full_name},${i.verification_id}`).join('\n'); const blob = new Blob([csv], { type: 'text/csv' }); const url = window.URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'arova_registry.csv'; a.click(); }} className="mt-auto mb-4 text-[10px] font-black uppercase text-stone-400 hover:text-emerald-700 transition-colors text-left px-4">Export Registry (CSV)</button>
        <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className="text-[10px] font-black uppercase text-red-500 text-left px-4">Terminate Session</button>
      </aside>

      <main className="md:ml-64 pt-24 md:pt-24 px-4 md:px-12 pb-12 min-h-screen blueprint-grid">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-primary uppercase leading-none mt-4 md:mt-0">Secret Panel</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-4">
             <p className="text-on-surface-variant/80 font-bold tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px] uppercase break-all">Administrative Node: {session.user.email}</p>
             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse hidden md:block"></span>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-1000 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {[ { l: 'Total', v: stats.total, c: 'text-primary' }, { l: 'DEV', v: stats.devs, c: 'text-primary' }, { l: 'DSGN', v: stats.dsgn, c: 'text-primary' }, { l: 'Active', v: stats.active, c: 'text-emerald-700' } ].map(s => (
                <div key={s.l} className="bg-surface-container-lowest p-6 md:p-8 rounded-sm shadow-[0_12px_40px_rgba(50,50,50,0.06)] hover:translate-y-[-2px] transition-all border border-outline-variant/5">
                  <p className="uppercase tracking-[0.1em] text-[8px] md:text-[9px] font-black text-stone-400 mb-2 md:mb-4">{s.l}</p>
                  <h3 className={`text-3xl md:text-5xl font-headline font-bold ${s.c}`}>{s.v}</h3>
                </div>
              ))}
            </div>

            <div className="bg-surface-container-lowest rounded-sm border border-outline-variant/10 shadow-2xl w-full">
               <div className="p-4 md:p-6 border-b border-outline-variant/10 flex gap-4 w-full">
                  <span className="material-symbols-outlined text-stone-300">search</span>
                  <input type="text" placeholder="FILTER MATRIX..." className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-full" value={search} onChange={e => setSearch(e.target.value)} />
               </div>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left min-w-[800px]">
                  <thead className="bg-surface-container-low border-b border-outline-variant/10">
                    <tr className="uppercase tracking-widest text-[9px] font-black text-stone-400">
                      <th className="p-4 md:p-6">Identity</th>
                      <th className="p-4 md:p-6">Ref-ID</th>
                      <th className="p-4 md:p-6">Badge</th>
                      <th className="p-4 md:p-6">Status</th>
                      <th className="p-4 md:p-6 text-right">Operation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    {filteredInterns.map(i => (
                      <tr key={i.id} className="hover:bg-surface-container-low/30 transition-colors group">
                        <td className="p-4 md:p-6">
                          <div className="flex items-center gap-4">
                            <img src={i.avatar_url || 'https://via.placeholder.com/40'} className="w-8 h-8 md:w-10 md:h-10 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-stone-100" />
                            <div>
                              <p className="text-xs md:text-sm font-bold text-primary">{i.full_name}</p>
                              <p className="text-[9px] md:text-[10px] text-stone-400 uppercase font-black">{i.role}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 md:p-6 font-mono text-[10px] md:text-xs text-emerald-800 font-bold tracking-tighter">{i.verification_id}</td>
                        <td className="p-4 md:p-6">
                          {i.performance_badge ? (
                             <span className="text-[8px] md:text-[9px] font-black uppercase text-stone-500 border border-stone-200 px-2 py-0.5 rounded-sm whitespace-nowrap">{i.performance_badge}</span>
                          ) : (
                             <span className="text-[8px] md:text-[9px] text-stone-300 italic">None</span>
                          )}
                        </td>
                        <td className="p-4 md:p-6">
                          <button onClick={() => handleToggleStatus(i.id, i.status)} className={`px-2 py-1 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase rounded-sm transition-all ${i.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-100 text-stone-400'}`}>{i.status}</button>
                        </td>
                        <td className="p-4 md:p-6 text-right space-x-2 md:space-x-4">
                          {i.certificate_url && <a href={i.certificate_url} target="_blank" rel="noreferrer" className="material-symbols-outlined text-stone-300 hover:text-emerald-600 transition-colors text-sm md:text-base">description</a>}
                          <button onClick={() => { navigator.clipboard.writeText(i.verification_id); alert('Reference ID Copied'); }} className="material-symbols-outlined text-stone-300 hover:text-emerald-600 transition-colors text-sm md:text-base">content_copy</button>
                          <button onClick={() => handleDelete(i.id)} className="material-symbols-outlined text-stone-300 hover:text-red-500 transition-colors text-sm md:text-base">delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'issue' && (
          <div className="max-w-4xl animate-in slide-in-from-right-8 duration-700 w-full">
            <div className="bg-surface-container-lowest p-6 md:p-12 rounded-sm border border-outline-variant/10 shadow-2xl">
              <form onSubmit={handleIssue} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Full Legal Name</label>
                  <input required className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
                </div>
                
                <div className="space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Identity Capture (Photo)</label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-3">
                     <input type="file" accept="image/*" onChange={handleAvatarUpload} className="text-[8px] md:text-[9px] font-black uppercase text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-stone-900 file:text-white hover:file:bg-emerald-600 cursor-pointer w-full sm:w-auto" />
                     {uploadingAvatar && <span className="text-[9px] font-black text-emerald-600 animate-pulse uppercase">Scaling...</span>}
                     {formData.avatar_url && <span className="material-symbols-outlined text-emerald-500">verified_user</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Role Authorization</label>
                  <select className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-xs md:text-sm font-bold uppercase" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                    <option value="Software Engineering Intern">Engineering (DEV)</option>
                    <option value="UI/UX Design Intern">Design (DSGN)</option>
                    <option value="Marketing Intern">Marketing (MKT)</option>
                    <option value="HR Intern">Human Resources (HR)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Initial Status</label>
                  <select className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-xs md:text-sm font-bold uppercase" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Extended">Extended</option>
                  </select>
                </div>

                {/* NEW: Optional Performance Badge */}
                <div className="space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Performance Badge <span className="text-stone-400 lowercase font-medium tracking-normal">(Optional - leave blank to hide)</span></label>
                  <input className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" placeholder="e.g. Top 10% Performer" value={formData.performance_badge} onChange={e => setFormData({...formData, performance_badge: e.target.value})} />
                </div>

                {/* NEW: Certificate Document Upload */}
                <div className="space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Official Certificate <span className="text-stone-400 lowercase font-medium tracking-normal">(PDF/Image)</span></label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-3">
                     <input type="file" accept=".pdf,image/*" onChange={handleCertificateUpload} className="text-[8px] md:text-[9px] font-black uppercase text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-stone-200 file:text-stone-800 hover:file:bg-emerald-600 hover:file:text-white cursor-pointer w-full sm:w-auto transition-colors" />
                     {uploadingCert && <span className="text-[9px] font-black text-emerald-600 animate-pulse uppercase">Uploading...</span>}
                     {formData.certificate_url && <span className="material-symbols-outlined text-emerald-500">description</span>}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4 md:space-y-6 bg-stone-50 p-4 md:p-8 border border-outline-variant/10">
                  <label className="uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-black text-primary block">Skill Matrix Selection ({formData.skills.length}/10)</label>
                  <div className="flex flex-wrap gap-2">
                    {PREDEFINED_SKILLS.map(s => (
                      <button type="button" key={s} onClick={() => toggleSkill(s)} className={`px-3 py-2 md:px-4 md:py-2 text-[8px] md:text-[9px] font-black uppercase border transition-all ${formData.skills.includes(s) ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-white border-stone-200 text-stone-400 hover:border-emerald-600'}`}>{s}</button>
                    ))}
                  </div>
                  <div className="relative">
                    <input type="text" placeholder="DEPLOY CUSTOM SKILL TAG + ENTER..." className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-[10px] md:text-xs font-bold outline-none focus:border-emerald-600" value={customSkill} onChange={(e) => setCustomSkill(e.target.value)} onKeyDown={addCustomSkill} disabled={formData.skills.length >= 10} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map(s => (
                      <div key={s} className="bg-stone-900 text-white px-2 py-1 md:px-3 md:py-1 text-[8px] md:text-[9px] font-black uppercase flex items-center gap-1 md:gap-2">
                        {s} <span onClick={() => toggleSkill(s)} className="material-symbols-outlined text-[10px] md:text-[12px] cursor-pointer hover:text-red-400">close</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Architectural Summary</label>
                  <textarea rows="4" className="w-full border border-outline-variant/20 bg-white p-3 md:p-4 focus:ring-0 focus:border-tertiary text-xs md:text-sm resize-none" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} />
                </div>

                <button disabled={uploadingAvatar || uploadingCert} className="md:col-span-2 bg-primary text-on-primary py-4 md:py-6 font-headline font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 md:gap-4 shadow-2xl active:scale-[0.98] disabled:opacity-50">
                  Deploy Identity Certificate
                  <span className="material-symbols-outlined text-sm md:text-base">verified</span>
                </button>
                {msg.text && <p className={`md:col-span-2 text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] ${msg.type === 'error' ? 'text-red-500' : 'text-emerald-600'}`}>{msg.text}</p>}
              </form>
            </div>
          </div>
        )}
      </main>
      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-20 z-[-1]"></div>
    </div>
  );
};

export default SecretPanel;