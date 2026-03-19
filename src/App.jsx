// src/App.jsx
import { RouterView } from 'vite-ssg';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <RouterView />
      </main>
      <Footer />
    </div>
  );
}

export default App;