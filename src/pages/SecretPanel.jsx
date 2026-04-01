import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';

const SecretPanel = () => {
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'issue'
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  
  // Form State
  const [formData, setFormData] = useState({
    full_name: '', role: 'Software Engineering Intern', duration: '3 Months',
    performance_badge: 'Top 10% Performer', avatar_url: '', hub_location: 'Kolkata, India',
    summary: '', skills: '', status: 'Active'
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
      // 1. Resize Image using Canvas
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = async () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400; // Small size for DB/Storage efficiency
          const scaleSize = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(async (blob) => {
            const fileName = `${Date.now()}-${file.name}`;
            // 2. Upload to Supabase Storage
            const { data, error } = await supabase.storage
              .from('intern-avatars')
              .upload(fileName, blob);

            if (error) throw error;

            // 3. Get Public URL
            const { data: urlData } = supabase.storage
              .from('intern-avatars')
              .getPublicUrl(fileName);

            setFormData({ ...formData, avatar_url: urlData.publicUrl });
            setMsg({ text: 'Photo processed and uploaded!', type: 'success' });
            setUploading(false);
          }, 'image/jpeg', 0.7); // 70% quality compression
        };
      };
    } catch (err) {
      setMsg({ text: 'Upload failed: ' + err.message, type: 'error' });
      setUploading(false);
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
    if (!window.confirm("Are you sure? This will revoke the intern's verification forever.")) return;
    const { error } = await supabase.from('interns').delete().eq('id', id);
    if (!error) {
      setInterns(interns.filter(i => i.id !== id));
      setMsg({ text: 'Intern deleted successfully', type: 'success' });
    }
  };

  const handleIssue = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Generating ID...', type: 'info' });
    const skillArray = typeof formData.skills === 'string' ? formData.skills.split(',').map(s => s.trim()) : formData.skills;

    const { error } = await supabase.from('interns').insert([{ ...formData, skills: skillArray }]);

    if (error) setMsg({ text: error.message, type: 'error' });
    else {
      setMsg({ text: 'Intern successfully added to Arova ecosystem.', type: 'success' });
      setFormData({ full_name: '', role: 'Software Engineering Intern', duration: '3 Months', performance_badge: 'Top 10% Performer', avatar_url: '', hub_location: 'Kolkata, India', summary: '', skills: '', status: 'Active' });
      fetchInterns();
      setActiveTab('all');
    }
  };

  // --- DATA FILTERING ---
  const filteredInterns = interns.filter(i => {
    const matchesSearch = i.full_name.toLowerCase().includes(search.toLowerCase()) || i.verification_id.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === 'All' || i.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // --- STATS ---
  const stats = {
  total: interns.length,
  devs: interns.filter(i => i.verification_id.includes('-DEV-')).length,
  designers: interns.filter(i => i.verification_id.includes('-DSGN-')).length,
  marketing: interns.filter(i => i.verification_id.includes('-MKT-')).length,
};

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center bg-stone-950 text-white p-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-6 p-10 bg-stone-900 rounded-xl border border-white/5 shadow-2xl">
          <div className="text-center">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-tighter">Arova Internal</h2>
            <p className="text-[10px] text-stone-500 tracking-[0.3em] mt-2">DASHBOARD ACCESS</p>
          </div>
          <input type="email" placeholder="Admin Email" className="bg-stone-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="bg-stone-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-emerald-600 hover:bg-emerald-500 transition-colors py-3 rounded-lg font-bold text-xs uppercase tracking-widest">Authorize</button>
          {msg.text && <p className={`text-[10px] text-center font-bold uppercase ${msg.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>{msg.text}</p>}
        </form>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-24 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen bg-stone-50">
      {/* Header & Stats */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tighter uppercase text-stone-900">Arova HQ Dashboard</h1>
          <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mt-1">Authorized: {session.user.email}</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white px-6 py-4 rounded-xl border border-stone-200 shadow-sm text-center">
            <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Total Interns</span>
            <span className="text-2xl font-bold text-stone-900">{stats.total}</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl border border-stone-200 shadow-sm text-center">
            <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Top Performers</span>
            <span className="text-2xl font-bold text-emerald-600">{stats.top}</span>
          </div>
          <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className="px-4 text-[10px] font-bold uppercase text-red-500 hover:bg-red-50 rounded-lg transition-colors">Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-stone-200 mb-8">
        <button onClick={() => setActiveTab('all')} className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'all' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400'}`}>All Interns</button>
        <button onClick={() => setActiveTab('issue')} className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'issue' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400'}`}>+ Issue New ID</button>
      </div>

      {/* SEARCH & FILTERS (Only in 'all' tab) */}
      {activeTab === 'all' && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input type="text" placeholder="Search by name or ID..." className="flex-grow bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" value={search} onChange={e => setSearch(e.target.value)} />
          <select className="bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm outline-none" value={filterRole} onChange={e => setFilterRole(e.target.value)}>
            <option value="All">All Roles</option>
            <option value="Software Engineering Intern">Software Eng</option>
            <option value="UI/UX Design Intern">UI/UX Design</option>
            <option value="Marketing Intern">Marketing</option>
          </select>
          <button onClick={() => {
            const csv = interns.map(i => `${i.full_name},${i.verification_id},${i.role}`).join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = 'arova_interns.csv'; a.click();
          }} className="bg-stone-900 text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">Export CSV</button>
        </div>
      )}

      {/* CONTENT: ALL INTERNS TABLE */}
      {activeTab === 'all' && (
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400">Intern</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400">Verification ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase text-stone-400">Badge</th>
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
                        <span className="block text-[10px] text-stone-400 uppercase font-medium">{intern.role}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs font-bold text-emerald-700 tracking-tighter uppercase">{intern.verification_id}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-sm uppercase ${intern.performance_badge.includes('Top') ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-600'}`}>{intern.performance_badge}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase ${intern.status === 'Active' ? 'text-blue-500' : 'text-stone-400'}`}>{intern.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => { navigator.clipboard.writeText(intern.verification_id); alert('ID Copied!'); }} className="p-2 text-stone-400 hover:text-emerald-600 transition-colors"><span className="material-symbols-outlined text-sm">content_copy</span></button>
                      <button onClick={() => handleDelete(intern.id)} className="p-2 text-stone-400 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
                      <a href={`/verify`} target="_blank" className="p-2 text-stone-400 hover:text-stone-900 transition-colors"><span className="material-symbols-outlined text-sm">open_in_new</span></a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredInterns.length === 0 && <div className="p-20 text-center text-stone-400 text-sm font-medium">No interns found in the records.</div>}
        </div>
      )}

      {/* CONTENT: ISSUE FORM */}
      {activeTab === 'issue' && (
        <form onSubmit={handleIssue} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 rounded-2xl border border-stone-200 shadow-sm animate-in fade-in duration-500">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Full Name</label>
            <input required className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Photo Upload (Direct)</label>
            <div className="flex items-center gap-4 py-2">
               <input type="file" accept="image/*" onChange={handleImageUpload} className="text-xs text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" />
               {uploading && <span className="text-[10px] font-bold text-emerald-600 animate-pulse uppercase">Processing...</span>}
               {formData.avatar_url && <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
  <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Role / Department</label>
  <select 
    className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" 
    value={formData.role} 
    onChange={e => setFormData({...formData, role: e.target.value})}
  >
    <option value="Software Engineering Intern">Engineering (DEV)</option>
    <option value="UI/UX Design Intern">Design (DSGN)</option>
    <option value="Marketing Intern">Marketing & Sales (MKT)</option>
    <option value="HR Intern">Human Resources (HR)</option>
    <option value="General Intern">General (GEN)</option>
  </select>
        </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Status</label>
            <select className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Extended">Extended</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Performance Badge</label>
            <input className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.performance_badge} onChange={e => setFormData({...formData, performance_badge: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Key Skills (Comma separated)</label>
            <input className="border-b-2 border-stone-100 focus:border-emerald-500 transition-colors bg-transparent py-3 text-lg outline-none" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Summary</label>
            <textarea rows="4" className="border-2 border-stone-100 focus:border-emerald-500 rounded-xl bg-transparent p-4 outline-none resize-none text-sm" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} />
          </div>

          <button disabled={uploading} className="md:col-span-2 bg-stone-900 text-white py-5 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-lg active:scale-[0.98] disabled:bg-stone-300">Issue Official Certificate</button>
          {msg.text && <p className={`md:col-span-2 text-center text-[10px] font-bold uppercase tracking-widest ${msg.type === 'error' ? 'text-red-500' : 'text-emerald-600'}`}>{msg.text}</p>}
        </form>
      )}
    </main>
  );
};

export default SecretPanel;