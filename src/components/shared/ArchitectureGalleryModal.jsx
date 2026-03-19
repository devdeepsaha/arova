import { useState, useEffect } from 'react';

function ArchitectureGalleryModal({ isOpen, onClose, galleryId }) {
  
  // Dictionary holding the different image sets for each case study
  const galleryData = {
    arova: [
      { id: 1, src: "./case-study/1.jpg", title: "AROVA: System Core Architecture" },
      { id: 2, src: "./case-study/2.jpg", title: "AROVA: Frontend Component Tree" },
      { id: 3, src: "./case-study/3.png", title: "AROVA: Schedule Management" },
      { id: 4, src: "./case-study/4.png", title: "AROVA: Appointments Panel" }
    ],
    devwebstudio: [
      { id: 1, src: "./case-study/5.png", title: "devwebstudio: Lead Routing Logic" },
      { id: 2, src: "./case-study/6.png", title: "devwebstudio: CRM Dashboard UI" },
      { id: 3, src: "./case-study/7.png", title: "devwebstudio: CRM Dashboard UI" },
      { id: 4, src: "./case-study/8.png", title: "devwebstudio: CRM Dashboard UI" },
    ]
  };

  // Safely get the images for the requested ID, default to an empty array
  const currentImages = galleryData[galleryId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Always reset to the first image when a new gallery is opened
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, galleryId]);

  // If the modal is closed or we have no images, don't render anything
  if (!isOpen || currentImages.length === 0) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]">
      {/* Dark Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/90 backdrop-blur-xl" 
        onClick={onClose}
      ></div>
      
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl">close</span>
      </button>

      {/* Main Content Container - CHANGED: Expanded max-w and height to utilize full desktop space */}
      <div className="relative w-full max-w-[95vw] lg:max-w-screen-2xl h-[90vh] flex flex-col z-10">
        
        {/* Header Text */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h3 className="text-white font-headline text-xl md:text-2xl font-bold tracking-tight">
            {currentImages[currentIndex].title}
          </h3>
          <p className="text-white/50 text-[10px] md:text-xs tracking-widest uppercase font-bold mt-2">
            Image {currentIndex + 1} of {currentImages.length}
          </p>
        </div>

        {/* Main Image Display Area */}
        <div className="relative flex-1 bg-black/20 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center group shadow-2xl">
          <img 
            src={currentImages[currentIndex].src} 
            alt={currentImages[currentIndex].title}
            className="w-full h-full object-contain p-2 md:p-4 animate-[fadeIn_0.3s_ease-out]"
          />

          {/* Navigation Arrows (Hidden on mobile, visible on hover on desktop) */}
          <button 
            onClick={prevImage} 
            className="absolute left-2 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center md:opacity-0 group-hover:opacity-100 hover:bg-accent-blue hover:border-accent-blue transition-all backdrop-blur-md"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl">arrow_back</span>
          </button>
          
          <button 
            onClick={nextImage} 
            className="absolute right-2 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center md:opacity-0 group-hover:opacity-100 hover:bg-accent-blue hover:border-accent-blue transition-all backdrop-blur-md"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl">arrow_forward</span>
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="shrink-0 mt-4 md:mt-6 flex justify-center gap-2 md:gap-4 overflow-x-auto pb-2 custom-scrollbar">
          {currentImages.map((img, idx) => (
            <button
              key={img.id}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              className={`relative w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                currentIndex === idx ? 'border-accent-blue opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="Thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ArchitectureGalleryModal;