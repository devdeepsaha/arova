import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

const PREDEFINED_SKILLS = [
  "Fast Builder", "Problem Solver", "Strong Communicator", 
  "Independent Worker", "Team Player", "Security Aware", 
  "Attention to Detail", "Creative Thinker", "High Ownership", "Quick Learner"
];

const defaultFormState = {
  full_name: '', role: 'Software Engineering Intern', duration: '3 Months',
  performance_badge: '', avatar_url: '', certificate_url: '', hub_location: 'Remote',
  summary: '', skills: [], status: 'Active'
};

// RECENTLY CHANGED: Component now accepts initialData (for editing), onSuccess, and onCancel props
const CertificateForm = ({ initialData, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState(defaultFormState);
  const [customSkill, setCustomSkill] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingCert, setUploadingCert] = useState(false);

  // RECENTLY CHANGED: Populates the form if editing an existing intern
  useEffect(() => {
    if (initialData) setFormData(initialData);
    else setFormData(defaultFormState);
  }, [initialData]);

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
            setUploadingAvatar(false);
          }, 'image/jpeg', 0.8);
        };
      };
    } catch (err) {
      setMsg({ text: 'Avatar upload failed', type: 'error' });
      setUploadingAvatar(false);
    }
  };

  const handleCertificateUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingCert(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `cert-${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage.from('intern-certificates').upload(fileName, file, { cacheControl: '3600', upsert: false });
      if (error) throw error;
      const { data: urlData } = supabase.storage.from('intern-certificates').getPublicUrl(fileName);
      setFormData({ ...formData, certificate_url: urlData.publicUrl });
    } catch (err) {
      setMsg({ text: 'Certificate upload failed', type: 'error' });
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

  // RECENTLY CHANGED: Handles both inserting a new record and updating an existing one, then triggers onSuccess
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Processing Request...', type: 'info' });
    
    // CRITICAL FIX: Separate the database-managed IDs from the editable data
    const { id, created_at, ...cleanUpdateData } = formData;
    
    if (initialData?.id) {
      // Use the clean data for updates
      const { error } = await supabase.from('interns').update(cleanUpdateData).eq('id', initialData.id);
      
      if (error) setMsg({ text: error.message, type: 'error' });
      else onSuccess('Record Updated Successfully');
    } else {
      // Use the clean data for inserts
      const { error } = await supabase.from('interns').insert([cleanUpdateData]);
      
      if (error) setMsg({ text: error.message, type: 'error' });
      else onSuccess('Certificate Deployed');
    }
  };

  return (
    <div className="max-w-4xl animate-in slide-in-from-right-8 duration-700 w-full relative">
      {initialData && (
        <button onClick={onCancel} className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest text-red-500 hover:underline flex items-center gap-1 z-10">
          <span className="material-symbols-outlined text-xs">close</span> Cancel Edit
        </button>
      )}
      <div className="bg-surface-container-lowest p-6 md:p-12 rounded-sm border border-outline-variant/10 shadow-2xl relative">
        <h2 className="text-xl md:text-2xl font-headline font-bold text-primary uppercase mb-8">
          {initialData ? `Editing Record: ${formData.full_name}` : 'Issue New Certificate'}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
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

          <div className="space-y-1">
            <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Duration</label>
            <input className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" placeholder="e.g. 4 Weeks, 3 Months..." value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
          </div>

          <div className="space-y-1">
            <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Work Location</label>
            <input className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" placeholder="e.g. Remote, Kolkata..." value={formData.hub_location} onChange={e => setFormData({...formData, hub_location: e.target.value})} />
          </div>

          <div className="space-y-1">
            <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Performance Badge <span className="text-stone-400 lowercase font-medium tracking-normal">(Optional)</span></label>
            <input className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" placeholder="e.g. Top 10% Performer" value={formData.performance_badge} onChange={e => setFormData({...formData, performance_badge: e.target.value})} />
          </div>

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
            {initialData ? 'Update Record' : 'Deploy Certificate'}
            <span className="material-symbols-outlined text-sm md:text-base">{initialData ? 'update' : 'verified'}</span>
          </button>
          {msg.text && <p className="md:col-span-2 text-center text-[10px] font-black uppercase text-emerald-600">{msg.text}</p>}
        </form>
      </div>
    </div>
  );
};

export default CertificateForm;