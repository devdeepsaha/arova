import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; // Assuming Footer is here based on your imports
import Home from "./pages/Home";
import Healthcare from "./pages/Healthcare";
import WebDevelopment from "./pages/WebDevelopment";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/layout/ScrollToTop";

// NEW: Import the legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-surface text-on-surface font-body selection:bg-accent-blue selection:text-white relative min-h-screen overflow-x-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* NEW: Added routes for the Legal pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;