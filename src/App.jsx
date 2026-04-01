import { Outlet, useLocation } from 'react-router-dom';
// RECENTLY CHANGED: Updated the import paths to match your actual folder structure
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  const location = useLocation();
  
  // Define paths where the global Navbar/Footer should be HIDDEN
  const isInternalPage = location.pathname.includes('secretpanel');

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Only show Navbar if NOT on the secret panel */}
      {!isInternalPage && <Navbar />}
      
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Only show Footer if NOT on the secret panel */}
      {!isInternalPage && <Footer />}
    </div>
  );
}

export default App;