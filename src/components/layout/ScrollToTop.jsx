// NEW: Created a helper component to manage scroll position on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // NEW: Forces the browser to scroll to the very top left (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Runs this effect whenever the pathname changes

  return null; // This component doesn't render any visible UI
}

export default ScrollToTop;