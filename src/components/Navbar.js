import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />

      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Hjem</button>
        </Link>
        <Link to="/dine-taender" style={styles.link}>
          <button style={styles.button}>Dine tænder</button>
        </Link>
        <Link to="/fra-tandlaegen" style={styles.link}> {/* Link til Fra tandlægen */}
          <button style={styles.button}>Fra tandlægen</button>
        </Link>
        <Link to="/raad-og-vejledning" style={styles.link}>
          <button style={styles.button}>Råd & vejledning</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#99D9EA',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 20,
    boxSizing: 'border-box',
  },
  logo: {
    height: '40px',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    marginLeft: '50px',
  },
  button: {
    color: 'white',
    backgroundColor: '#99D9EA',
    border: 'none',
    padding: '10px 18px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  link: {
    textDecoration: 'none',
  },
};

export default Navbar;
