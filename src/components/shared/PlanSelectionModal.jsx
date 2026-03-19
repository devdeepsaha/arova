import { useState, useEffect } from 'react';

function PlanSelectionModal({ isOpen, onClose, onShowToast, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    notes: ''
  });
  
  const [status, setStatus] = useState('idle');

  // Reset form when opened with a new plan
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, notes: '' }));
      setStatus('idle');
    }
  }, [isOpen, selectedPlan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            // REPLACE WITH YOUR ACTUAL WEB3FORMS KEY
            access_key: "b06f0a64-7322-4a7a-aba4-7510574013fe", 
            subject: `New Request: ${selectedPlan} Plan Setup`,
            // This ensures the plan name is clearly visible in the email you receive
            Requested_Plan: selectedPlan,
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Clinic_Name: formData.clinicName,
            Additional_Notes: formData.notes || "None provided",
        })
      });

      if (response.ok) {
        if (typeof onShowToast === 'function') onShowToast('success', `Request for ${selectedPlan} sent! We'll reach out shortly.`);
        setFormData({ name: '', email: '', phone: '', clinicName: '', notes: '' });
        setStatus('idle');
        onClose();
      } else {
        if (typeof onShowToast === 'function') onShowToast('error', "Failed to send request. Please try again.");
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      if (typeof onShowToast === 'function') onShowToast('error', "Network error. Please try again.");
      setStatus('idle');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-inverse-surface/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-surface-container-lowest shadow-2xl rounded-xl overflow-hidden flex flex-col border border-outline-variant/20 z-10 max-h-[95vh]">
        
        {/* Modal Header */}
        <div className="bg-surface-container-low px-6 py-6 md:px-10 md:py-8 border-b border-outline-variant/10 flex justify-between items-start">
          <div>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-2">Selected Package</span>
            <h2 className="font-headline text-3xl font-bold text-on-surface flex items-center gap-3">
              {selectedPlan} Plan
              <span className="bg-tertiary/10 text-tertiary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Drafting Setup</span>
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-outline-variant hover:text-primary hover:bg-surface-container-high rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-1.5">
                <label className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Full Name</label>
                <input 
                  name="name" type="text" required value={formData.name} onChange={handleChange} disabled={status === 'submitting'}
                  className="w-full py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm disabled:opacity-50" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Email Address</label>
                <input 
                  name="email" type="email" required value={formData.email} onChange={handleChange} disabled={status === 'submitting'}
                  className="w-full py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm disabled:opacity-50" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Phone Number</label>
                <input 
                  name="phone" type="tel" required value={formData.phone} onChange={handleChange} disabled={status === 'submitting'}
                  className="w-full py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm disabled:opacity-50" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Clinic Name</label>
                <input 
                  name="clinicName" type="text" required value={formData.clinicName} onChange={handleChange} disabled={status === 'submitting'}
                  className="w-full py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm disabled:opacity-50" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Any specific requirements? (Optional)</label>
              <textarea 
                name="notes" rows="2" value={formData.notes} onChange={handleChange} disabled={status === 'submitting'}
                className="w-full py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm resize-none disabled:opacity-50"
              ></textarea>
            </div>

            <button 
              type="submit" disabled={status === 'submitting'}
              className="w-full py-4 mt-4 bg-primary hover:bg-primary-dim text-on-primary font-headline font-bold uppercase tracking-widest text-sm rounded-sm transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>Processing <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span></>
              ) : (
                <>Request {selectedPlan} Setup <span className="material-symbols-outlined text-xl">arrow_forward</span></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PlanSelectionModal;