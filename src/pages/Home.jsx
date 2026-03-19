import { useState } from "react"; 
import BackgroundGrids from "../components/layout/BackgroundGrids";
import HomeHero from "../components/home/HomeHero";
import HomeFlagship from "../components/home/HomeFlagship";
import HomeFlow from "../components/home/HomeFlow";
import HomeCapabilities from "../components/home/HomeCapabilities";
import HomeCTA from "../components/home/HomeCTA";

// Import both Modals and the Toast
import ContactModal from "../components/shared/ContactModal"; 
import SetupPlanModal from "../components/shared/SetupPlanModal";
import Toast from "../components/shared/Toast"; 

function Home() {
  // States for BOTH modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  
  // State for the Toast
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <>
      <BackgroundGrids />
      
      <main className="relative z-10 pt-24 pb-12">
        <HomeHero onOpenModal={() => setIsModalOpen(true)} />
        <HomeFlagship />
        <HomeFlow />
        <HomeCapabilities />
        
        {/* Pass BOTH open functions down to the CTA */}
        <HomeCTA 
          onOpenModal={() => setIsModalOpen(true)} 
          onOpenSetupModal={() => setIsSetupModalOpen(true)}
        />
      </main>

      {/* Render the General Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onShowToast={handleShowToast} 
      />

      {/* Render the Specific Setup Plan Modal */}
      <SetupPlanModal 
        isOpen={isSetupModalOpen} 
        onClose={() => setIsSetupModalOpen(false)} 
        onShowToast={handleShowToast} 
      />

      {/* Render the Global Toast */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: '' })} 
      />
    </>
  );
}

export default Home;