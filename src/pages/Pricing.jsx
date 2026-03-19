import { useState } from 'react'; // 1. ADD THIS IMPORT
import PricingHero from '../components/pricing/PricingHero';
import PricingCards from '../components/pricing/PricingCards';
import PricingTable from '../components/pricing/PricingTable';
import PricingCTA from '../components/pricing/PricingCTA';
import ContactModal from '../components/shared/ContactModal'; // 2. IMPORT THE MODAL
import Toast from '../components/shared/Toast'; // 3. IMPORT TOAST

function Pricing() {
  // 4. ADD THESE STATE DECLARATIONS
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <main className="relative pt-24 pb-12">
      <div className="fixed inset-0 blueprint-grid-image z-0" aria-hidden="true"></div>
      
      <PricingHero />
      
      {/* Pass handleSelectPlan to cards */}
      <PricingCards onSelectPlan={handleSelectPlan} />
      
      <PricingTable />
      
      {/* 5. PASS THE TRIGGER TO CTA */}
      <PricingCTA onOpenModal={() => setIsModalOpen(true)} />

      {/* 6. RENDER THE MODAL AND TOAST */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onShowToast={handleShowToast}
        initialPlan={selectedPlan} // Optional: passes the plan name to the form
      />

      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: '' })} 
      />
    </main>
  );
}

export default Pricing;