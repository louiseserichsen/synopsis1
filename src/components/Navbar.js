import React from 'react';
import { Link } from 'react-router-dom';
import './navstyle.css';  // Importer CSS-filen

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <img src="/logo.png" alt="Logo" style={logoStyle} />
      <div style={navLinksStyle}>
        <Link to="/" className="nav-link">Hjem</Link>
        <Link to="/dine-taender" className="nav-link">Dine tænder</Link>
        <Link to="/fra-tandlaegen" className="nav-link">Fra tandlægen</Link>
        <Link to="/raad-og-vejledning" className="nav-link">Råd & vejledning</Link>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#99D9EA',
  padding: '10px 20px',
  position: 'sticky',
  top: 0,
  width: '100%',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  zIndex: 1000,
};

const logoStyle = {
  height: 40,
};

const navLinksStyle = {
  display: 'flex',
  gap: 20,
  marginLeft: 50,
};

export default Navbar;
