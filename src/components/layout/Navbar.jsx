import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// NEW: Import the modal and toast
import SetupPlanModal from '../shared/SetupPlanModal';
import Toast from '../shared/Toast';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // NEW: State for the Setup Plan Modal and Toast
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Health Care', path: '/healthcare' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-surface/80 backdrop-blur-lg shadow-[0_12px_40px_rgba(50,50,50,0.06)]">
        <div className="flex justify-between items-center px-6 lg:px-12 py-6 max-w-[1440px] mx-auto">
          
          <div className="flex items-center gap-3">
            <img src="/arova.webp" alt="Arova Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl lg:text-2xl tracking-wider text-inverse-surface uppercase font-avant-garde font-bold">
              Arova Technologies
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-space-grotesk text-sm tracking-tight transition-all duration-200 pb-1 border-b-2 
                  ${location.pathname === link.path 
                    ? 'text-primary font-bold border-tertiary' 
                    : 'text-on-surface-variant font-medium border-transparent hover:text-primary hover:border-tertiary/40'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CHANGED: Button now opens the Setup Plan Modal */}
            <button 
              onClick={() => setIsSetupModalOpen(true)}
              className="bg-primary hover:opacity-80 transition-all duration-300 text-on-primary px-6 py-2 rounded-sm text-sm font-bold tracking-tight ml-2"
            >
              Get a Setup Plan
            </button>
          </div>

          <button 
            className="lg:hidden text-primary p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-lg py-6 px-6 flex flex-col gap-6 border-t border-outline-variant/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-space-grotesk text-base tracking-tight transition-all duration-200 pl-3 border-l-2
                  ${location.pathname === link.path 
                    ? 'text-primary font-bold border-tertiary' 
                    : 'text-on-surface-variant font-medium border-transparent hover:text-primary hover:border-tertiary/40'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CHANGED: Mobile button now opens the Setup Plan Modal */}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsSetupModalOpen(true);
              }}
              className="bg-primary hover:opacity-80 transition-all duration-300 text-on-primary px-6 py-3 rounded-sm text-base font-bold tracking-tight w-full mt-2"
            >
              Get a Setup Plan
            </button>
          </div>
        )}
      </nav>

      {/* NEW: Render the Modal and Toast outside the <nav> but inside the component */}
      <SetupPlanModal 
        isOpen={isSetupModalOpen} 
        onClose={() => setIsSetupModalOpen(false)} 
        onShowToast={handleShowToast} 
      />
      
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: '' })} 
      />
    </>
  );
}

export default Navbar;