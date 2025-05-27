import React from 'react';

const Fratandlægen = () => {
  // Simulerede beskeder fra tandlægen
  const messages = [
    {
      id: 1,
      dentist: 'Tandlægerne i Roskilde',
      date: '2025-05-20',
      message: 'Din tandundersøgelse er færdig, og vi har ikke fundet nogen problemer.',
    },
    {
      id: 2,
      dentist: 'Tandlægerne i Roskilde',
      date: '2025-05-18',
      message: 'Du skal komme til en ny tandrensning om 6 måneder.',
    },
    {
      id: 3,
      dentist: 'Tandlægerne i Roskilde',
      date: '2025-05-15',
      message: 'Vi har modtaget dine røntgenbilleder, og der er ingen synlige huller.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Fra tandlægen</h1>
      <p>Her kan du læse beskeder fra din tandlæge.</p>

      <div style={styles.messagesContainer}>
        {messages.map((message) => (
          <div key={message.id} style={styles.message}>
            <div style={styles.header}>
              <span style={styles.dentist}>{message.dentist}</span>
              <span style={styles.date}>{message.date}</span>
            </div>
            <p style={styles.messageContent}>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  messagesContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  message: {
    backgroundColor: '#ffffff',
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  dentist: {
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    color: '#888',
  },
  messageContent: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
};

export default Fratandlægen;
