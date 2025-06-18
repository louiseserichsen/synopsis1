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

  const commonTextStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#000',
  };

  return (
    <div
      style={{
        padding: '50px 20px',
        textAlign: 'center',
        ...commonTextStyle,
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: 15,
          ...commonTextStyle,
        }}
      >
        Fra tandlægen
      </h1>
      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: 30,
          ...commonTextStyle,
        }}
      >
        Her kan du læse beskeder fra din tandlæge.
      </p>

      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
          backgroundColor: '#f9f9f9',
          borderRadius: 8,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          padding: 20,
          ...commonTextStyle,
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              backgroundColor: '#fff',
              marginBottom: 15,
              padding: 15,
              borderRadius: 8,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              ...commonTextStyle,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#000',
                  ...commonTextStyle,
                }}
              >
                {message.dentist}
              </span>
              <span
                style={{
                  color: '#555',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                {message.date}
              </span>
            </div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                ...commonTextStyle,
              }}
            >
              {message.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fratandlægen;
