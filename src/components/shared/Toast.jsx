import { useEffect } from 'react';

function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] animate-[slideInUp_0.4s_ease-out]">
      <div className={`flex items-center gap-4 px-6 py-4 rounded-sm shadow-2xl border bg-surface ${
        type === 'success' ? 'border-[#25D366]/30' : 'border-error/30'
      }`}>
        <span className={`material-symbols-outlined text-2xl ${
          type === 'success' ? 'text-[#25D366]' : 'text-error'
        }`}>
          {type === 'success' ? 'check_circle' : 'error'}
        </span>
        
        <div>
          <h4 className="font-headline font-bold text-sm text-on-surface">
            {type === 'success' ? 'Message Sent' : 'Submission Failed'}
          </h4>
          <p className="text-xs text-on-surface-variant">{message}</p>
        </div>

        <button onClick={onClose} className="ml-4 text-outline-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  );
}

export default Toast;