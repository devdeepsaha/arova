import { useState } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutVision from "../components/about/AboutVision";
import AboutCaseStudy from "../components/about/AboutCaseStudy";
import AboutCTA from "../components/about/AboutCTA";

// Import Shared Components
import ContactModal from "../components/shared/ContactModal";
import Toast from "../components/shared/Toast";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <main className="relative pt-24 pb-12">
      {/* Background Grid */}
      <div className="fixed inset-0 blueprint-grid-image z-0" aria-hidden="true"></div>
      
      <AboutHero />
      <AboutPhilosophy />
      <AboutVision />
      <AboutCaseStudy />
      
      {/* Pass the modal trigger to the CTA */}
      <AboutCTA onOpenModal={() => setIsModalOpen(true)} />

      {/* Render Modal & Toast */}
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
    </main>
  );
}

export default About;