import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Healthcare from './pages/Healthcare'
import WebDevelopment from './pages/WebDevelopment'
import About from './pages/About'
import Pricing from './pages/Pricing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Verify from './pages/Verify'
import SecretPanel from './pages/SecretPanel'
import Careers from './pages/Careers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="verify" element={<Verify />} />
          <Route path="secretpanel" element={<SecretPanel />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)