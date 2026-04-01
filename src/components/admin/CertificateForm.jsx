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

const CertificateForm = ({ initialData, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState(defaultFormState);
  const [customSkill, setCustomSkill] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingCert, setUploadingCert] = useState(false);

  // Load data if editing
  useEffect(() => {
    if (initialData) setFormData(initialData);
    else setFormData(defaultFormState);
  }, [initialData]);

  const handleAvatarUpload = async (e) => {
    // ... (Keep the exact same canvas resizing logic from the previous monolithic file here)
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
    // ... (Keep the exact same certificate upload logic here)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ text: 'Processing Request...', type: 'info' });
    
    if (initialData?.id) {
      const { error } = await supabase.from('interns').update(formData).eq('id', initialData.id);
      if (error) setMsg({ text: error.message, type: 'error' });
      else onSuccess('Record Updated Successfully');
    } else {
      const { error } = await supabase.from('interns').insert([formData]);
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
          {initialData ? `Editing: ${formData.full_name}` : 'Issue New Certificate'}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
           {/* Paste the exact same form fields from the previous SecretPanel.jsx here */}
           <div className="space-y-1">
             <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Full Legal Name</label>
             <input required className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
           </div>

           <div className="space-y-1">
             <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Identity Capture</label>
             <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-3">
                <input type="file" accept="image/*" onChange={handleAvatarUpload} className="text-[8px] md:text-[9px] font-black uppercase text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-stone-900 file:text-white hover:file:bg-emerald-600 cursor-pointer w-full sm:w-auto" />
                {formData.avatar_url && <span className="material-symbols-outlined text-emerald-500">verified_user</span>}
             </div>
           </div>

           {/* ... Add the rest of the dropdowns (Role, Status, Duration, Hub, Badge, Cert, Skills, Summary) exactly as they were ... */}
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
             <label className="uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black text-primary block">Duration</label>
             <input className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 focus:ring-0 focus:border-tertiary text-sm md:text-base font-bold" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
           </div>

           {/* ... etc ... */}

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