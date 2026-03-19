import { useState } from "react";
import PricingHero from "../components/pricing/PricingHero";
import PricingBento from "../components/pricing/PricingBento";
import PricingCards from "../components/pricing/PricingCards";
import PricingTable from "../components/pricing/PricingTable";
import PricingCTA from "../components/pricing/PricingCTA";

// NEW: Import the Modal and Toast
import PlanSelectionModal from "../components/shared/PlanSelectionModal";
import Toast from "../components/shared/Toast";

function Pricing() {
  // NEW: State to hold the name of the plan they clicked
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleShowToast = (type, message) => {
    setToast({ type, message });
  };

  return (
    <main className="relative pt-32 pb-12">
      <div className="fixed inset-0 blueprint-grid-image z-0" aria-hidden="true"></div>
      
      <div className="relative z-10">
        <PricingHero />
        
        {/* Pass the state setter down to the cards */}
        <PricingCards onSelectPlan={(plan) => setSelectedPlan(plan)} />
        <PricingTable />
        <PricingBento />
        <PricingCTA />
      </div>

      {/* NEW: Render the Modal. It opens whenever selectedPlan is not null */}
      <PlanSelectionModal 
        isOpen={!!selectedPlan} 
        selectedPlan={selectedPlan}
        onClose={() => setSelectedPlan(null)} 
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

export default Pricing;