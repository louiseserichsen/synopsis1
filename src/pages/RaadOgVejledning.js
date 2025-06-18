import React, { useState, useRef } from 'react';

const RaadOgVejledning = () => {
  const [popupInfo, setPopupInfo] = useState({ visible: false, content: '', coords: { x: 0, y: 0 } });
  const [bottomSearchTerm, setBottomSearchTerm] = useState('');
  const containerRef = useRef(null);

  const questions = [
    { title: 'Sådan forebygger du huller.', content: 'Information om forebyggelse af huller.' },
    { title: 'Hvilken tandbørste skal jeg vælge?', content: 'Vejledning i valg af tandbørste.' },
    { title: 'Hvornår skal man kontakte tandlægen?', content: 'Tidspunkter for at kontakte tandlægen.' },
    { title: 'Hvad gør jeg ved tandkødsproblemer?', content: 'Råd om tandkødsproblemer.' },
    { title: 'Hvordan kan jeg opretholde en god mundhygiejne?', content: 'Tips til god mundhygiejne.' },
    { title: 'Hvad skal jeg gøre ved tandfølsomhed?', content: 'Behandling af tandfølsomhed.' },
  ];

  const extraQuestions = [
    { title: 'Kan jeg få tandblegning?', content: 'Information om tandblegning og hvordan det foregår.' },
    { title: 'Hvordan behandler jeg dårlig ånde?', content: 'Tips og behandling mod dårlig ånde.' },
  ];

  const handleBoxClick = (content, event) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    setPopupInfo({
      visible: true,
      content,
      coords: { x, y }
    });
  };

  const closePopup = () => {
    setPopupInfo({ visible: false, content: '', coords: { x: 0, y: 0 } });
  };

  const commonTextStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#000',
  };

  return (
    <div style={{ ...styles.container, ...commonTextStyle }} ref={containerRef}>
      <h1 style={{ fontWeight: '700', fontSize: '2.5rem', marginBottom: 15, ...commonTextStyle }}>
        Råd og vejledning
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 30, ...commonTextStyle }}>
        Her finder du nyttig information om tandpleje og hvad du kan gøre ved tandproblemer.
      </p>

      <div style={styles.inputContainer}>
        {questions.map((q, i) => (
          <div
            key={i}
            style={{ ...styles.box, ...commonTextStyle }}
            onClick={(e) => handleBoxClick(q.content, e)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleBoxClick(q.content, e); }}
          >
            {q.title}
          </div>
        ))}
      </div>

      <div style={{ ...styles.inputContainer, marginTop: '40px' }}>
        {extraQuestions.map((q, i) => (
          <div
            key={'extra-' + i}
            style={{ ...styles.box, ...commonTextStyle }}
            onClick={(e) => handleBoxClick(q.content, e)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleBoxClick(q.content, e); }}
          >
            {q.title}
          </div>
        ))}
      </div>

      {popupInfo.visible && (
        <div
          style={{
            position: 'absolute',
            top: popupInfo.coords.y + 10,
            left: popupInfo.coords.x + 10,
            zIndex: 9999,
            maxWidth: 300,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 15,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            ...commonTextStyle,
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div style={{ marginBottom: 10 }}>{popupInfo.content}</div>
          <button
            onClick={closePopup}
            style={{
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              color: '#000',
              borderRadius: 5,
              padding: '5px 10px',
              border: '1px solid #000',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            Luk
          </button>
        </div>
      )}

      <div style={{ ...styles.bottomSearchContainer, ...commonTextStyle }}>
        <input
          type="text"
          placeholder="Søg..."
          value={bottomSearchTerm}
          onChange={(e) => setBottomSearchTerm(e.target.value)}
          style={{ ...styles.bottomSearchInput, fontFamily: 'Arial, sans-serif', color: '#000' }}
          aria-label="Søg i bunden"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  inputContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  box: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    userSelect: 'none',
    transition: 'all 0.3s ease',
  },
  bottomSearchContainer: {
    marginTop: '40px',
    textAlign: 'center',
  },
  bottomSearchInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default RaadOgVejledning;
