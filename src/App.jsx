import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PortalProvider } from './context/PortalContext';
import ScrollToTop from './components/common/ScrollToTop';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingChatWidget from './components/chat/FloatingChatWidget';

// Pages
import Home from './pages/Home';
import PanduanPerkara from './pages/PanduanPerkara';
import HasilPanduan from './pages/HasilPanduan';
import PetaAlur from './pages/PetaAlur';
import ChecklistDokumen from './pages/ChecklistDokumen';
import KalkulatorPanjar from './pages/KalkulatorPanjar';
import AsistenAI from './pages/AsistenAI';
import FAQ from './pages/FAQ';
import Kontak from './pages/Kontak';
import NotFound from './pages/NotFound';

function App() {
  return (
    <PortalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/panduan" element={<PanduanPerkara />} />
              <Route path="/hasil-panduan" element={<HasilPanduan />} />
              <Route path="/peta-alur" element={<PetaAlur />} />
              <Route path="/checklist" element={<ChecklistDokumen />} />
              <Route path="/kalkulator" element={<KalkulatorPanjar />} />
              <Route path="/asisten-ai" element={<AsistenAI />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/kontak" element={<Kontak />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingChatWidget />
        </div>
      </BrowserRouter>
    </PortalProvider>
  );
}

export default App;
