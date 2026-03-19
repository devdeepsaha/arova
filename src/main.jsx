// src/main.jsx
import { ViteSSG } from 'vite-ssg';
import App from './App';
import { routes } from './routes';
import './index.css';

// ViteSSG handles the creation of the app and the router automatically
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    // Scroll to top on route change
    if (isClient) {
      router.afterEach(() => {
        window.scrollTo(0, 0);
      });
    }
  }
);