// src/main.jsx
// Change from 'vite-ssg-react' to 'vite-ssg-react/client'
import { ViteSSG, RouterView } from 'vite-ssg-react/client';
import App from './App';
import { routes } from './routes'; // Ensure this path is correct!
import './index.css';

// CRITICAL: You MUST have the 'export' keyword here
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    // Custom logic (optional)
    if (isClient) {
      router.afterEach(() => {
        window.scrollTo(0, 0);
      });
    }
  }
);