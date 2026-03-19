import { useState } from 'react';

function SetupPlanModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    phone: '',
    numDoctors: '',
    bookingMethod: ''
  });
  
  const [status, setStatus] = useState('idle');

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
            // Ensure you use your actual Web3Forms access key here
            access_key: "b06f0a64-7322-4a7a-aba4-7510574013fe", 
            subject: `New Clinic Setup Plan Request from ${formData.fullName}`,
            name: formData.fullName,
            clinic: formData.clinicName,
            phone: formData.phone,
            doctors: formData.numDoctors,
            booking_method: formData.bookingMethod || "Not specified",
        })
      });

      if (response.ok) {
        if (typeof onShowToast === 'function') onShowToast('success', "Request sent! We'll contact you within 24 hours.");
        setFormData({ fullName: '', clinicName: '', phone: '', numDoctors: '', bookingMethod: '' });
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-inverse-surface/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      
      {/* Clickable Backdrop to Close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* The Modal Card */}
      <div className="relative w-full max-w-4xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(50,50,50,0.06)] rounded-md overflow-hidden flex flex-col md:flex-row border border-outline-variant/20 z-10 max-h-[95vh]">
        
        {/* Close Action (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-outline hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Decorative Architectural Side Bar (Editorial Feel) */}
        <div className="hidden md:flex w-16 bg-surface-container-low flex-col items-center py-8 border-r border-outline-variant/10 shrink-0">
          <div className="rotate-180 origin-center whitespace-nowrap text-[10px] tracking-[0.2em] font-label text-outline-variant font-bold translate-y-full" style={{ writingMode: 'vertical-rl' }}>
            AROVA TECHNOLOGY SYSTEM v1.0
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 pt-16 md:p-12 overflow-y-auto custom-scrollbar">
          
          {/* Header Section */}
          <div className="mb-10 text-left">
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tighter leading-tight mb-3">
              Get Your Clinic Setup Plan
            </h1>
            <p className="text-on-surface-variant font-body text-sm max-w-md leading-relaxed">
              We’ll recommend the best setup based on your clinic's specific infrastructure and operational requirements.
            </p>
          </div>

          {/* Form Section */}
          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Full Name</label>
                <div className="relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-tertiary transition-colors">person</span>
                  <input 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    type="text"
                    placeholder="Dr. John Doe"
                    className="w-full pl-8 py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm placeholder:text-outline-variant/50 text-on-surface disabled:opacity-50" 
                  />
                </div>
              </div>

              {/* Clinic Name */}
              <div className="space-y-1.5">
                <label htmlFor="clinicName" className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Clinic Name</label>
                <div className="relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-tertiary transition-colors">local_hospital</span>
                  <input 
                    id="clinicName" 
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    type="text"
                    placeholder="Arova Central Clinic"
                    className="w-full pl-8 py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm placeholder:text-outline-variant/50 text-on-surface disabled:opacity-50" 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="phoneSetup" className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Phone Number</label>
                <div className="relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-tertiary transition-colors">phone</span>
                  <input 
                    id="phoneSetup" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    type="tel"
                    placeholder="+91 88000 00000"
                    className="w-full pl-8 py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm placeholder:text-outline-variant/50 text-on-surface disabled:opacity-50" 
                  />
                </div>
              </div>

              {/* Number of Doctors */}
              <div className="space-y-1.5">
                <label htmlFor="numDoctors" className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">Number of Doctors</label>
                <div className="relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-tertiary transition-colors">group</span>
                  <select 
                    id="numDoctors"
                    name="numDoctors"
                    value={formData.numDoctors}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    className="w-full pl-8 py-2 pr-8 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm text-on-surface appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled hidden>Select size</option>
                    <option value="1">1 Doctor (Solo Practice)</option>
                    <option value="2-5">2–5 Doctors</option>
                    <option value="5+">5+ Doctors</option>
                  </select>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>

            {/* Current Booking Method */}
            <div className="space-y-1.5">
              <label htmlFor="bookingMethod" className="block font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                Current Booking Method <span className="text-outline-variant normal-case font-normal">(Optional)</span>
              </label>
              <div className="relative group">
                <span className="absolute left-0 top-3 material-symbols-outlined text-outline group-focus-within:text-tertiary transition-colors">edit</span>
                <textarea 
                  id="bookingMethod" 
                  name="bookingMethod"
                  value={formData.bookingMethod}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  rows="2"
                  placeholder="E.g. Phone calls, Practo, Walk-ins..."
                  className="w-full pl-8 py-2 bg-transparent border-0 border-b border-outline-variant/40 focus:border-tertiary focus:ring-0 transition-all text-sm placeholder:text-outline-variant/50 text-on-surface resize-none disabled:opacity-50"
                ></textarea>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-6 space-y-4">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full md:w-auto md:px-12 py-4 bg-primary text-surface-bright font-headline font-bold text-base md:text-lg tracking-wide rounded-sm shadow-[0_4px_12px_rgba(28,107,81,0.2)] hover:bg-primary-dim active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:active:scale-100"
              >
                {status === 'submitting' ? (
                  <>Processing <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span></>
                ) : (
                  <>Get My Plan <span className="material-symbols-outlined text-xl">arrow_forward</span></>
                )}
              </button>
              <div className="flex items-center justify-start md:justify-start gap-2 text-outline-variant pt-2">
                <span className="material-symbols-outlined text-sm text-tertiary">bolt</span>
                <p className="font-label text-[10px] uppercase tracking-widest font-bold">
                  Quick response within 24 hours
                </p>
              </div>
            </div>
          </form>

          {/* Footer Architectural Detailing */}
          <div className="mt-12 flex justify-between items-center border-t border-outline-variant/20 pt-6 opacity-60">
            <span className="text-[9px] font-label tracking-widest uppercase text-on-surface-variant font-bold">Secured by Arova</span>
            <span className="text-[9px] font-label tracking-widest uppercase text-on-surface-variant">ID: SET-CL-4022</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SetupPlanModal;