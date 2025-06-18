import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Hjem from './pages/Hjem';
import DineTaender from './pages/DineTaender';
import Fratandlægen from './pages/Fratandlægen';
import RaadOgVejledning from './pages/RaadOgVejledning';
import Login from './pages/login';  // Husk små bogstaver, som din fil hedder

function App() {
  return (
    <>
      <nav style={navStyles.navbar}>
        <img src="/logo.png" alt="Logo" style={navStyles.logo} />
        <div style={navStyles.linksContainer}>
          <Link to="/" style={navStyles.link}>Hjem</Link>
          <Link to="/dine-taender" style={navStyles.link}>Dine tænder</Link>
          <Link to="/fra-tandlaegen" style={navStyles.link}>Fra tandlægen</Link>
          <Link to="/raad-og-vejledning" style={navStyles.link}>Råd og vejledning</Link>
        </div>
        <div style={navStyles.loginButtonContainer}>
          <Link to="/login" style={navStyles.loginButton}>Login</Link>
        </div>
      </nav>

      <main style={{ padding: '20px 10px', maxWidth: 1200, margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/dine-taender" element={<DineTaender />} />
          <Route path="/fra-tandlaegen" element={<Fratandlægen />} />
          <Route path="/raad-og-vejledning" element={<RaadOgVejledning />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

const navStyles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#99D9EA', // Lys blå farve
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between', // Så login-knappen kommer helt til højre
  },
  logo: {
    height: 40,
    marginRight: 40,
  },
  linksContainer: {
    display: 'flex',
    gap: 40,
    flexGrow: 1, // fylder plads mellem logo og login-knap
  },
  link: {
    color: '#004d99',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '600',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  loginButtonContainer: {
    // container til login-knap, placeres yderst til højre
  },
  loginButton: {
    color: '#ffffff',
    backgroundColor: '#004d99',
    padding: '8px 16px',
    borderRadius: 5,
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default App;
