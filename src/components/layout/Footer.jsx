import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full pt-24 pb-12 bg-surface-container-low/95 backdrop-blur-sm border-t border-outline-variant/15 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-bold text-inverse-surface mb-4 block font-headline uppercase">
            Arova Technology
          </span>
          <p className="text-on-surface-variant font-inter text-xs uppercase tracking-widest leading-relaxed">
            Architectural Precision in Digital Craft.
          </p>
        </div>
        
        <div>
          <h5 className="font-label text-xs font-bold text-primary mb-6 uppercase tracking-widest">Expertise</h5>
          <ul className="space-y-4">
            <li><Link className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" to="/web-development">Web Development</Link></li>
            <li><Link className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" to="/healthcare">Arova Healthcare</Link></li>
            <li>
              <a 
                className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" 
                href="https://arovahealthcare.vercel.app" 
                target="_blank" 
                rel="noreferrer"
              >
                Arova Healthcare Login
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-label text-xs font-bold text-primary mb-6 uppercase tracking-widest">Socials</h5>
          <ul className="space-y-4">
            <li><a className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="https://wa.me/918108212872" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-label text-xs font-bold text-primary mb-6 uppercase tracking-widest">Legal</h5>
          <ul className="space-y-4">
            <li><Link className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="font-inter text-xs uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <p className="text-[10px] font-inter uppercase tracking-[0.2em] text-outline opacity-60">
          © 2026 Arova Technology. All Rights Reserved. Engineered for Global Scale.
        </p>
      </div>
    </footer>
  );
}

export default Footer;