import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import ToothModel from '../components/ToothModel';

const DineTaender = () => {
  const [showPopup, setShowPopup] = useState(false);

  const commonTextStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#000',
  };

  return (
    <div
      style={{
        padding: '40px 30px',
        maxWidth: 1200,
        margin: '0 auto',
        ...commonTextStyle,
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: 30,
          textAlign: 'center',
          ...commonTextStyle,
        }}
      >
        Dine tænder
      </h1>

      <div
        style={{
          display: 'flex',
          gap: 30,
          justifyContent: 'center',
        }}
      >
        {showPopup && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popupTitle"
            style={{
              flex: '0 0 350px',
              backgroundColor: '#99D9EA',
              padding: 25,
              borderRadius: 12,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              fontSize: '1rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              ...commonTextStyle,
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              aria-label="Luk popup"
              style={{
                alignSelf: 'flex-end',
                background: 'transparent',
                border: 'none',
                fontSize: 26,
                color: '#000',
                cursor: 'pointer',
                marginBottom: 10,
              }}
            >
              ×
            </button>
            <h2
              id="popupTitle"
              style={{
                marginBottom: 15,
                ...commonTextStyle,
              }}
            >
              Din tandstatus
            </h2>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.5,
                marginBottom: 15,
                ...commonTextStyle,
              }}
            >
              Din tandlæge har undersøgt dine tænder, og har konkluderet der hul i denne tand.
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.5,
                marginBottom: 15,
                ...commonTextStyle,
              }}
            >
              Vi anbefaler, at du fortsætter med din daglige tandpleje og kommer til kontrol efter behov.
            </p>
            <Link
              to="/raad-og-vejledning"
              style={{
                display: 'inline-block',
                marginTop: 10,
                fontWeight: '600',
                color: '#004d99',
                textDecoration: 'underline',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Se mere i råd og vejledning
            </Link>
          </div>
        )}

        <div
          style={{
            position: 'relative',
            borderRadius: 15,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            overflow: 'hidden',
            flex: '1 1 600px',
          }}
        >
          <Canvas
            style={{
              width: '100%',
              height: 500,
              borderRadius: 15,
              cursor: 'grab',
            }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Suspense fallback={null}>
              <ToothModel setShowPopup={setShowPopup} />
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              maxDistance={10}
              minDistance={2}
            />
          </Canvas>
        </div>

        <div
          style={{
            flex: '0 0 300px',
            backgroundColor: '#99D9EA',
            borderRadius: 15,
            padding: 25,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#000',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: 15,
              color: '#000',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            3D-model 360°
          </h2>
          <p
            style={{
              marginBottom: 15,
              lineHeight: 1.5,
              color: '#000',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Her kan du interagere med 3D-modellen af dine tænder for at få et bedre indblik i din mundhygiejne.
            Klik på tænderne for at få mere information om deres status og anbefalinger.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DineTaender;
