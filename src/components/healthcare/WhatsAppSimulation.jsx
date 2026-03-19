import { useState, useEffect, useRef } from 'react';

const CHAT_SCRIPT = [
  { sender: 'user', text: 'hi' },
  { sender: 'bot', text: 'Welcome! May I have your full name?' },
  { sender: 'user', text: 'Rahul Sharma' },
  { sender: 'bot', text: 'Just to confirm — your name is Rahul Sharma? Reply YES or retype.' },
  { sender: 'user', text: 'yes' },
  { sender: 'bot', text: 'What is the reason for your visit?' },
  { sender: 'user', text: 'tooth pain' },
  { sender: 'bot', text: 'Here are our next available dates:\n1. Monday, March 17 (3 slots)\n2. Wednesday, March 19 (2 slots)\n\nReply with a number, "Monday", "23rd", or "March 23"\nReply *back* to change your reason.' },
  { sender: 'user', text: 'monday' },
  { sender: 'bot', text: 'Available times on Monday, March 17:\n1. 9:00 AM\n2. 10:00 AM\n\nReply *back* to choose a different date.' },
  { sender: 'user', text: '9am' },
  { sender: 'bot', text: 'Confirm: Rahul Sharma · tooth pain · Monday 9:00 AM\n\nReply YES, NO, or *back*.' },
  { sender: 'user', text: 'yes' },
  { sender: 'bot', text: '✅ Appointment Confirmed! See you Monday at 9:00 AM.\n\nReply *reschedule* anytime to change it.' }
];

function WhatsAppSimulation() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  // CHANGED: We now reference the container itself, not an empty div at the bottom
  const chatContainerRef = useRef(null);

  // CHANGED: This safely scrolls ONLY the inner div, leaving the main website alone
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (currentIndex < CHAT_SCRIPT.length) {
      const currentStep = CHAT_SCRIPT[currentIndex];
      
      let typingDelay = 0;
      let sendDelay = 0;

      if (currentStep.sender === 'bot') {
        typingDelay = 600;
        sendDelay = typingDelay + Math.min(1500, currentStep.text.length * 20); 
        
        const typingTimer = setTimeout(() => setIsTyping(true), typingDelay);
        const sendTimer = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, currentStep]);
          setCurrentIndex(prev => prev + 1);
        }, sendDelay);

        return () => { clearTimeout(typingTimer); clearTimeout(sendTimer); };
      } else {
        sendDelay = 1200;
        const sendTimer = setTimeout(() => {
          setMessages(prev => [...prev, currentStep]);
          setCurrentIndex(prev => prev + 1);
        }, sendDelay);

        return () => clearTimeout(sendTimer);
      }
    } else {
      const loopTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(loopTimer);
    }
  }, [currentIndex]);

  return (
    <div className="relative z-10 bg-white rounded-xl shadow-2xl p-4 max-w-sm mx-auto border border-outline-variant/10 flex flex-col h-[450px]">
      
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-3 mb-4 shrink-0">
        <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white shrink-0 shadow-sm relative">
          <span className="material-symbols-outlined text-xl">medical_services</span>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h4 className="font-bold text-sm text-on-surface">Arova Healthcare Bot</h4>
          <p className="text-[10px] text-tertiary font-bold uppercase tracking-widest">
            {isTyping ? <span className="text-[#25D366] animate-pulse">typing...</span> : 'Always Online'}
          </p>
        </div>
      </div>
      
      {/* Chat History */}
      {/* CHANGED: Added ref={chatContainerRef} to this container */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-[#FEF5C3] text-on-surface-variant text-[10px] px-3 py-1.5 rounded-md text-center max-w-[90%] shadow-sm">
            <span className="material-symbols-outlined text-[10px] align-middle mr-1">lock</span>
            Messages and calls are end-to-end encrypted. No one outside of this chat, not even Arova, can read or listen to them.
          </div>
        </div>

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.3s_ease-out]`}>
            <div className={`
              px-4 py-2.5 text-sm max-w-[85%] shadow-sm whitespace-pre-wrap leading-relaxed
              ${msg.sender === 'user' 
                ? 'bg-tertiary text-on-tertiary rounded-2xl rounded-tr-none' 
                : 'bg-surface-container-low text-on-surface rounded-2xl rounded-tl-none'}
            `}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-surface-container-low px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm">
              <div className="w-1.5 h-1.5 bg-outline-variant rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-outline-variant rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-outline-variant rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Fake Input Footer */}
      <div className="mt-4 pt-3 border-t border-outline-variant/10 shrink-0">
        <div className="bg-surface-container-low rounded-full px-4 py-2.5 text-xs text-on-surface-variant flex justify-between items-center">
          <span className="opacity-70">Type a message...</span>
          <span className="material-symbols-outlined text-sm text-outline-variant">send</span>
        </div>
      </div>

    </div>
  );
}

export default WhatsAppSimulation;