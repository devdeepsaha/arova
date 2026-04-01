import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const SecretPanel = () => {
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  
  // Skill Tag System State
  const [customSkill, setCustomSkill] = useState('');
  const PREDEFINED_SKILLS = [
    "Fast Builder", "Problem Solver", "Strong Communicator", 
    "Independent Worker", "Team Player", "Security Aware", 
    "Attention to Detail", "Creative Thinker", "High Ownership", "Quick Learner"
  ];

  // Form State
  const [formData, setFormData] = useState({
    full_name: '', 
    role: 'Software Engineering Intern', 
    duration: '3 Months',
    performance_badge: 'Top 10% Performer', 
    avatar_url: '', 
    hub_location: 'Kolkata, India',
    summary: '', 
    skills: [], 
    status: 'Active'
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchInterns();
    });
  }, []);

  const fetchInterns = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('interns')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error) setInterns(data);
    setLoading(false);
  };

  // --- IMAGE UPLOAD & RESIZE LOGIC ---
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
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
            const { data, error } = await supabase.storage
              .from('intern-avatars')
              .upload(fileName, blob);

            if (error) throw error;

            const { data: urlData } = supabase.storage
              .from('intern-avatars')
              .getPublicUrl(fileName);

            setFormData({ ...formData, avatar_url: urlData.publicUrl });
            setMsg({ text: 'Photo uploaded successfully!', type: 'success' });
            setUploading(false);
          }, 'image/jpeg', 0.8);
        };
      };
    } catch (err) {
      setMsg({ text: 'Upload failed: ' + err.message, type: 'error' });
      setUploading(false);
    }
  };

  // --- SKILL TAG HELPERS ---
  const toggleSkill = (skill) => {
    const currentSkills = Array.isArray(formData.skills) ? formData.skills : [];
    const newSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : currentSkills.length < 10 ? [...currentSkills, skill] : currentSkills;
    setFormData({ ...formData, skills: newSkills });
  };

  const addCustomSkill = (e) => {
    if (e.key === 'Enter' && customSkill.trim() !== '') {
      e.preventDefault();
      const cleanSkill = customSkill.trim();
      if (!formData.skills.includes(cleanSkill) && formData.skills.length < 10) {
        setFormData(prev => ({ ...prev, skills: [...prev.skills, cleanSkill] }));
      }
      setCustomSkill('');
    }
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

  const handleDelete = async (id) => {
    if (!window.confirm("Confirm deletion? This is permanent.")) return;
    const { error } = await supabase.from('interns').delete().eq('id', id);
    if (!error) {
      setInterns(interns.filter(i => i.id !== id));
      setMsg({ text: 'Record removed.', type: 'success' });
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const statuses = ['Active', 'Completed', 'Extended'];
    const nextStatus = statuses[(statuses.indexOf(currentStatus) + 1) % statuses.length];
    
    const { error } = await supabase.from('interns').update({ status: nextStatus }).eq('id', id);
    if (!error) {
      setInterns(interns.map(i => i.id === id ? { ...i, status: nextStatus } : i));
    }
  };

  const handleIssue = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Processing...', type: 'info' });

    const { error } = await supabase.from('interns').insert([formData]);

    if (error) setMsg({ text: error.message, type: 'error' });
    else {
      setMsg({ text: 'Intern Issued Successfully!', type: 'success' });
      setFormData({ full_name: '', role: 'Software Engineering Intern', duration: '3 Months', performance_badge: 'Top 10% Performer', avatar_url: '', hub_location: 'Kolkata, India', summary: '', skills: [], status: 'Active' });
      fetchInterns();
      setActiveTab('all');
    }
  };

  // --- DATA LOGIC ---
  const filteredInterns = interns.filter(i => {
    const matchesSearch = i.full_name.toLowerCase().includes(search.toLowerCase()) || (i.verification_id && i.verification_id.toLowerCase().includes(search.toLowerCase()));
    const matchesRole = filterRole === 'All' || i.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const stats = {
    total: interns.length,
    devs: interns.filter(i => i.verification_id?.includes('-DEV-')).length,
    dsgn: interns.filter(i => i.verification_id?.includes('-DSGN-')).length,
    active: interns.filter(i => i.status === 'Active').length,
  };

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center bg-stone-950 text-white p-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-6 p-10 bg-stone-900 rounded-xl border border-white/5 shadow-2xl">
          <div className="text-center">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-tighter">Arova HQ</h2>
            <p className="text-[10px] text-stone-500 tracking-[0.3em] mt-2 font-bold uppercase">Admin Console</p>
          </div>
          <input type="email" placeholder="Email" className="bg-stone-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="bg-stone-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-emerald-600 hover:bg-emerald-500 transition-colors py-3 rounded-lg font-bold text-xs uppercase tracking-widest">Authorize</button>
          {msg.text && <p className={`text-[10px] text-center font-bold uppercase ${msg.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>{msg.text}</p>}
        </form>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-24 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen bg-stone-50">
      {/* Stats Section */}
      <div className="flex flex-wrap lg:justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tighter uppercase text-stone-900">Arova Analytics</h1>
          <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Admin: {session.user.email}</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'Total', val: stats.total, color: 'text-stone-900' },
            { label: 'Engineering', val: stats.devs, color: 'text-blue-600' },
            { label: 'Design', val: stats.dsgn, color: 'text-purple-600' },
            { label: 'Active', val: stats.active, color: 'text-emerald-600' }
          ].map(s => (
            <div key={s.label} className="bg-white px-6 py-4 rounded-xl border border-stone-200 shadow-sm text-center min-w-[120px]">
              <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">{s.label}</span>
              <span className={`text-2xl font-bold ${s.color}`}>{s.val}</span>
            </div>
          ))}
          <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className="px-4 text-[10px] font-bold uppercase text-red-500 hover:bg-red-50 rounded-lg transition-colors">Logout</button>
        </div>
      </div>

      <div className="flex gap-8 border-b border-stone-200 mb-8">
        <button onClick={() => setActiveTab('all')} className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'all' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400'}`}>Records</button>
        <button onClick={() => setActiveTab('issue')} className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'issue' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400'}`}>+ New Issue</button>
      </div>

      {activeTab === 'all' && (
        <div className="animate-in fade-in duration-500">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input type="text" placeholder="Search by name or ID..." className="flex-grow bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-emerald-500" value={search} onChange={e => setSearch(e.target.value)} />
            <select className="bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none" value={filterRole} onChange={e => setFilterRole(e.target.value)}>
              <option value="All">All Departments</option>
              <option value="Software Engineering Intern">Engineering (DEV)</option>
              <option value="UI/UX Design Intern">Design (DSGN)</option>
              <option value="Marketing Intern">Marketing (MKT)</option>
            </select>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400">Identity</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400">Verification Ref</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredInterns.map((intern) => (
                  <tr key={intern.id} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={intern.avatar_url || 'https://via.placeholder.com/40'} className="w-10 h-10 rounded-full object-cover border border-stone-200 bg-stone-100" />
                        <div>
                          <span className="block text-sm font-bold text-stone-900">{intern.full_name}</span>
                          <span className="block text-[10px] text-stone-400 uppercase font-bold">{intern.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-[11px] font-bold text-emerald-700 tracking-tighter uppercase">{intern.verification_id}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleToggleStatus(intern.id, intern.status)}
                        className={`text-[9px] font-black px-3 py-1 rounded-full uppercase transition-all shadow-sm
                        ${intern.status === 'Active' ? 'bg-blue-500 text-white' : 
                          intern.status === 'Completed' ? 'bg-stone-200 text-stone-600' : 'bg-purple-500 text-white'}`}
                      >
                        {intern.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => { navigator.clipboard.writeText(intern.verification_id); alert('ID Copied!'); }} className="p-2 text-stone-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-sm">content_copy</span></button>
                        <button onClick={() => handleDelete(intern.id)} className="p-2 text-stone-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
                        <a href="/verify" target="_blank" className="p-2 text-stone-400 hover:text-stone-900 transition-colors"><span className="material-symbols-outlined text-sm">visibility</span></a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'issue' && (
        <form onSubmit={handleIssue} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 rounded-2xl border border-stone-200 shadow-sm animate-in fade-in duration-500">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Legal Name</label>
            <input required className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Identity Capture</label>
            <div className="flex items-center gap-4 py-2">
               <input type="file" accept="image/*" onChange={handleImageUpload} className="text-[10px] uppercase font-bold text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-stone-100 hover:file:bg-stone-200 cursor-pointer" />
               {uploading && <span className="text-[9px] font-black text-emerald-600 animate-pulse uppercase">Compressing...</span>}
               {formData.avatar_url && <span className="material-symbols-outlined text-emerald-500 text-sm">verified_user</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Arova Department</label>
            <select className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
              <option value="Software Engineering Intern">Engineering (DEV)</option>
              <option value="UI/UX Design Intern">Design (DSGN)</option>
              <option value="Marketing Intern">Marketing & Sales (MKT)</option>
              <option value="HR Intern">Human Resources (HR)</option>
              <option value="General Intern">General (GEN)</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Initial Status</label>
            <select className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Extended">Extended</option>
            </select>
          </div>

          {/* New Skill Tag System Integration */}
          <div className="flex flex-col gap-4 md:col-span-2 bg-stone-50 p-6 rounded-xl border border-stone-200">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Skill Matrix ({formData.skills.length}/10)</label>
            </div>
            <div className="flex flex-wrap gap-2">
              {PREDEFINED_SKILLS.map((skill) => {
                const isSelected = formData.skills.includes(skill);
                return (
                  <button key={skill} type="button" onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all border ${isSelected ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-stone-200 text-stone-500 hover:border-emerald-500/40'}`}>
                    {skill}
                  </button>
                );
              })}
            </div>
            <input type="text" placeholder="Custom skill + Enter (e.g. Laravel, AWS)..." className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-emerald-500" value={customSkill} onChange={(e) => setCustomSkill(e.target.value)} onKeyDown={addCustomSkill} disabled={formData.skills.length >= 10} />
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-1.5 bg-stone-900 text-white px-3 py-1 rounded-md text-[9px] font-bold uppercase">
                  {skill}
                  <button type="button" onClick={() => toggleSkill(skill)} className="hover:text-red-400 transition-colors">
                    <span className="material-symbols-outlined text-[10px]">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Professional Summary</label>
            <textarea rows="4" className="border-2 border-stone-100 focus:border-emerald-500 rounded-xl bg-transparent p-4 outline-none resize-none text-sm" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} />
          </div>

          <button disabled={uploading} className="md:col-span-2 bg-stone-900 text-white py-5 rounded-xl font-black uppercase text-xs tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl active:scale-[0.98] disabled:opacity-30">Deploy Certificate</button>
          {msg.text && <p className={`md:col-span-2 text-center text-[10px] font-bold uppercase ${msg.type === 'error' ? 'text-red-500' : 'text-emerald-600'}`}>{msg.text}</p>}
        </form>
      )}
    </main>
  );
};

export default SecretPanel;