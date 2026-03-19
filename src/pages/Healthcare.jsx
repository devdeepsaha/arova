import { useState } from "react";

// Import all the healthcare-specific sections from your folder
import HealthcareHero from "../components/healthcare/HealthcareHero";
import ProblemSolution from "../components/healthcare/ProblemSolution";
import HowItWorks from "../components/healthcare/HowItWorks";
import CoreFeatures from "../components/healthcare/CoreFeatures";
import HealthcareCTA from "../components/healthcare/HealthcareCTA";

// Import the shared UI components (Modals & Toast)
import ContactModal from "../components/shared/ContactModal"; 
import SetupPlanModal from "../components/shared/SetupPlanModal";
import Toast from "../components/shared/Toast"; 

function Healthcare() {
  // 1. Manage Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  
  // 2. Manage Toast Notification State
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <>
      {/* Main Page Layout */}
      <main className="relative z-10 pt-16 pb-12">
        
        {/* Pass modal triggers down to the Hero section */}
        <HealthcareHero 
          onOpenModal={() => setIsModalOpen(true)} 
          onOpenSetupModal={() => setIsSetupModalOpen(true)}
        />
        
        {/* Render the rest of the page sections */}
        <ProblemSolution />
        <HowItWorks />
        <CoreFeatures />
        
        {/* Pass modal triggers down to the final CTA section at the bottom */}
        <HealthcareCTA 
          onOpenModal={() => setIsModalOpen(true)} 
          onOpenSetupModal={() => setIsSetupModalOpen(true)}
        />

      </main>

      {/* Render the Shared General Contact Modal (Book Demo) */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onShowToast={handleShowToast} 
      />

      {/* Render the Shared Setup Plan Modal */}
      <SetupPlanModal 
        isOpen={isSetupModalOpen} 
        onClose={() => setIsSetupModalOpen(false)} 
        onShowToast={handleShowToast} 
      />

      {/* Render the Global Toast Notification */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: '' })} 
      />
    </>
  );
}

export default Healthcare;