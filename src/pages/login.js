// login.js
import React from 'react';

function Login() {
  const styles = {
    container: {
      backgroundColor: '#99D9EA',
      fontFamily: 'Arial, sans-serif',
      color: '#000000',
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    form: {
      backgroundColor: 'white',
      padding: '30px 40px',
      borderRadius: '12px',  // <-- rundede kanter på boksen
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: 400,
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      fontFamily: 'Arial, sans-serif',
      color: '#000000',
    },
    label: {
      fontWeight: '600',
      marginBottom: '5px',
      display: 'block',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#004d99',
      color: '#fff',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontFamily: 'Arial, sans-serif',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label style={styles.label} htmlFor="username">Brugernavn</label>
        <input
          style={styles.input}
          type="text"
          id="username"
          name="username"
          placeholder="Indtast brugernavn"
          required
        />

        <label style={styles.label} htmlFor="password">Adgangskode</label>
        <input
          style={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="Indtast adgangskode"
          required
        />

        <button style={styles.button} type="submit">Log ind</button>
      </form>
    </div>
  );
}

export default Login;
