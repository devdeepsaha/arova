import { useState } from "react";
import WebDevHero from "../components/webdev/WebDevHero";
import WebDevCapabilities from "../components/webdev/WebDevCapabilities";
import WebDevApproach from "../components/webdev/WebDevApproach";
import WebDevCases from "../components/webdev/WebDevCases";
import WebDevCTA from "../components/webdev/WebDevCTA";

import ContactModal from "../components/shared/ContactModal";
import Toast from "../components/shared/Toast";
import ArchitectureGalleryModal from "../components/shared/ArchitectureGalleryModal";

function WebDevelopment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // CHANGED: This now holds 'arova', 'leadflow', or null
  const [activeGalleryId, setActiveGalleryId] = useState(null); 
  
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <main className="relative pt-24">
      <div className="fixed inset-0 blueprint-grid-image z-0" aria-hidden="true"></div>
      
      <WebDevHero onOpenModal={() => setIsModalOpen(true)} />
      <WebDevCapabilities />
      <WebDevApproach />
      
      {/* CHANGED: We now pass the specific ID up from the button click */}
      <WebDevCases onOpenGallery={(id) => setActiveGalleryId(id)} />
      
      <WebDevCTA onOpenModal={() => setIsModalOpen(true)} />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onShowToast={handleShowToast} 
      />
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: '' })} 
      />

      {/* CHANGED: Pass the active ID to the modal. It opens if the ID is not null. */}
      <ArchitectureGalleryModal 
        isOpen={!!activeGalleryId}
        galleryId={activeGalleryId}
        onClose={() => setActiveGalleryId(null)}
      />
    </main>
  );
}

export default WebDevelopment;