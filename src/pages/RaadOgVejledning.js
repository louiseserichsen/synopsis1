import React from 'react';

const RaadOgVejledning = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Råd og vejledning</h1>
        <p>Her finder du nyttig information om tandpleje og hvad du kan gøre ved tandproblemer.</p>

        <br /><br /><br /><br />

        {/* Firkanterne til at skrive i */}
        <div style={styles.inputContainer}>
          {/* Første række med tre kasser */}
          <textarea
            value="Sådan forebygger du huller."
            readOnly
            style={styles.textarea}
          />
          <textarea
            value="Hvilken tandbørste skal jeg vælge?"
            readOnly
            style={styles.textarea}
          />
          <textarea
            value="Hvornår skal man kontakte tandlægen?"
            readOnly
            style={styles.textarea}
          />
          {/* Anden række med tre kasser */}
          <textarea
            value="Hvad gør jeg ved tandkødsproblemer?"
            readOnly
            style={styles.textarea}
          />
          <textarea
            value="Hvordan kan jeg opretholde en god mundhygiejne?"
            readOnly
            style={styles.textarea}
          />
          <textarea
            value="Hvad skal jeg gøre ved tandfølsomhed?"
            readOnly
            style={styles.textarea}
          />
        </div>

        {/* Søgefelt nederst */}
        <input
          type="text"
          placeholder="Søg efter emner..."
          style={styles.searchInput}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    marginTop: '40px',
  },
  inputContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '50px',
    marginTop: '20px',
    marginBottom: '40px', // Giver luft over søgefeltet
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: '#f4f4f4',
    resize: 'none',
    overflow: 'auto',
  },
  searchInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default RaadOgVejledning;
