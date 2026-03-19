// src/routes.js
import Home from './pages/Home';
import Healthcare from './pages/Healthcare';
import WebDevelopment from './pages/WebDevelopment';
import About from './pages/About';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export const routes = [
  { path: '/', component: Home },
  { path: '/healthcare', component: Healthcare },
  { path: '/web-development', component: WebDevelopment },
  { path: '/about', component: About },
  { path: '/pricing', component: Pricing },
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/terms', component: TermsOfService },
];