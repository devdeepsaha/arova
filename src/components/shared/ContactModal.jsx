import { useState } from 'react';

function ContactModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            access_key: "b06f0a64-7322-4a7a-aba4-7510574013fe", 
            name: formData.name,
            email: formData.email,
            phone: fullPhoneNumber,
            message: formData.message,
            subject: `New Project Inquiry from ${formData.name}`,
        })
      });

      if (response.ok) {
        if (typeof onShowToast === 'function') onShowToast('success', "We'll get back to you shortly.");
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
        setStatus('idle');
        onClose();
      } else {
        if (typeof onShowToast === 'function') onShowToast('error', "Please try again or contact us via WhatsApp.");
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      if (typeof onShowToast === 'function') onShowToast('error', "Network error. Please try again.");
      setStatus('idle');
    }
  };

  if (!isOpen) return null;

  // WhatsApp SVG Icon
  const waIcon = (
    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.656-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-xl"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.15)] rounded-md overflow-hidden flex flex-col md:flex-row border border-outline-variant/10 z-10 max-h-[95vh]">
        
        {/* Sidebar / Left Accent (Architectural Info) - Hidden on Mobile */}
        <div className="hidden md:flex md:w-1/3 bg-surface-container-low p-12 flex-col justify-between border-r border-outline-variant/10">
          <div>
            <div className="text-primary font-headline font-black italic text-xl mb-12">AROVA</div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface leading-none mb-6">Let's Talk.</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">Choose how you'd like to reach us to discuss your system architecture.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-tertiary">
              <span className="material-symbols-outlined text-xl">verified</span>
              <span className="font-label text-xs uppercase tracking-widest font-bold">Trusted Engineering</span>
            </div>
            <div className="w-12 h-0.5 bg-tertiary"></div>
          </div>
        </div>

        {/* Main Modal Content */}
        <div className="flex-1 relative bg-surface px-6 pb-8 pt-16 md:px-12 md:pb-12 md:pt-20 overflow-y-auto custom-scrollbar">
          
          {/* Close Button (X) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors z-20"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Mobile Header (Visible only on mobile) */}
          <div className="md:hidden mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface leading-none mb-2">Let's Talk.</h2>
            <p className="text-on-surface-variant text-sm">Choose how you'd like to reach us to discuss your system architecture.</p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-10">
            {/* CHANGED: Option 1 - Removed text labels, aligned icons to the right */}
            <div className="group bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-md hover:shadow-lg transition-all duration-300 hover:border-tertiary/50 flex flex-col justify-between min-h-[100px]">
              <div className="flex justify-end mb-4">
                <div className="flex gap-2">
                  <a href="tel:+918108212872" className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                  </a>
                  <a href="https://wa.me/918108212872" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors shadow-sm">
                    {waIcon}
                  </a>
                </div>
              </div>
              <div className="font-headline font-bold text-base md:text-lg text-on-surface">+91 81082 12872</div>
            </div>

            {/* CHANGED: Option 2 - Removed text labels, aligned icons to the right */}
            <div className="group bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-md hover:shadow-lg transition-all duration-300 hover:border-tertiary/50 flex flex-col justify-between min-h-[100px]">
              <div className="flex justify-end mb-4">
                <div className="flex gap-2">
                  <a href="tel:+918826473943" className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                  </a>
                  <a href="https://wa.me/918826473943" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors shadow-sm">
                    {waIcon}
                  </a>
                </div>
              </div>
              <div className="font-headline font-bold text-base md:text-lg text-on-surface">+91 88264 73943</div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-8 md:mb-10">
            <div className="flex-grow border-t border-outline-variant/20"></div>
            <span className="flex-shrink mx-4 font-label text-[9px] md:text-[10px] tracking-[0.2em] text-outline uppercase font-bold">OR SEND AN EMAIL</span>
            <div className="flex-grow border-t border-outline-variant/20"></div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block font-label text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1 pl-3">Name</label>
                {/* CHANGED: Replaced px-0 with px-3 for better text padding */}
                <input 
                  id="name" 
                  name="name" 
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="E.g. Alexander Wright" 
                  required
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-tertiary transition-colors py-3 px-3 text-on-surface placeholder:text-on-surface-variant/30 font-body text-sm disabled:opacity-50" 
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block font-label text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1 pl-3">Email</label>
                {/* CHANGED: Replaced px-0 with px-3 */}
                <input 
                  id="email" 
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="alex@architecture.com" 
                  required
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-tertiary transition-colors py-3 px-3 text-on-surface placeholder:text-on-surface-variant/30 font-body text-sm disabled:opacity-50" 
                />
              </div>
            </div>

            {/* Phone Field with Country Code Dropdown */}
            <div className="relative">
              <label htmlFor="phone" className="block font-label text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1 pl-3">Phone Number</label>
              <div className="flex items-end gap-2">
                {/* CHANGED: Added px-2 to select input */}
                <select 
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-tertiary py-3 px-2 text-sm font-body cursor-pointer text-on-surface disabled:opacity-50"
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (AU)</option>
                  <option value="+971">+971 (AE)</option>
                </select>
                {/* CHANGED: Replaced px-0 with px-3 */}
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="88000 00000" 
                  required
                  className="flex-1 bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-tertiary transition-colors py-3 px-3 text-on-surface placeholder:text-on-surface-variant/30 font-body text-sm disabled:opacity-50" 
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block font-label text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1 pl-3">Message</label>
              {/* CHANGED: Replaced px-0 with px-3 */}
              <textarea 
                id="message" 
                name="message" 
                rows="3"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                placeholder="Describe your architectural requirements..." 
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-tertiary transition-colors py-3 px-3 text-on-surface placeholder:text-on-surface-variant/30 font-body text-sm resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="group w-full bg-primary hover:bg-primary-dim text-on-primary px-10 py-4 rounded-sm font-headline font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-md disabled:opacity-70 disabled:hover:bg-primary"
              >
                {status === 'submitting' ? (
                  <>
                    Sending... 
                    <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined text-base md:text-lg group-hover:translate-x-1 transition-transform">send</span>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default ContactModal;