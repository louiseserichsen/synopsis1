import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import RaadOgVejledning from './pages/RaadOgVejledning';
import DineTaender from './pages/DineTaender';
import Hjem from './pages/Hjem';
import Fratandlægen from './pages/Fratandlægen'; // Importer Fratandlægen

function App() {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden', height: '100vh', position: 'relative' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/dine-taender" element={<DineTaender />} />
        <Route path="/raad-og-vejledning" element={<RaadOgVejledning />} />
        <Route path="/fra-tandlaegen" element={<Fratandlægen />} /> {/* Tilføj route for Fra tandlægen */}
      </Routes>
    </div>
  );
}

export default App;
