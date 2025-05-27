import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';  // Importer Link komponenten
import ToothModel from '../components/ToothModel';

const DineTaender = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      style={{
        maxWidth: '100vw',
        overflowX: 'hidden',
        height: '100vh',
        position: 'relative',
        textAlign: 'center',
        paddingTop: '80px', // Tilføj ekstra plads øverst for at undgå overlap med navbaren
      }}
    >
      {/* Overskrift før 3D-modellen */}
      <h2>3D-model af dine tænder</h2>
      <p>
        Med denne interaktive 3D-model kan du se dit tandsæt fra alle vinkler (360 grader).<br />
        Du kan rotere modellen for at undersøge dine tænder tættere og få indsigt i eventuelle problemer som huller i tænderne, <br /> tandkødssygdomme eller fejljusteringer.<br /><br />
        Modellen giver dig også information om, hvordan du kan forbedre din tandhygiejne og sundhed.<br />
        Oplysningerne hentes fra din seneste tandlægejournal. <br /> <br />
        Klik på specifikke områder for at få rådgivning og vejledning om tandpleje og behandlinger.<br />
      </p>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enablePan={false} />
        <Suspense fallback={null}>
          {/* Ryk modellen op ca. 5px i 3D-rummet → Y: 0.1 */}
          <ToothModel setShowPopup={setShowPopup} position={[0, 0.1, 0]} />
        </Suspense>
      </Canvas>

      {/* Popup besked helt ned under modellen */}
      {showPopup && (
        <Link to="/raad-og-vejledning" style={{ textDecoration: 'none' }}>
          <div
            style={{
              position: 'absolute',
              bottom: '20px', // Popup'en placeres helt nederst
              left: '50%',
              transform: 'translateX(-50%)', // Centrerer popup'en horisontalt
              background: 'white',
              padding: '10px',
              border: '1px solid black',
              zIndex: 10,
              cursor: 'pointer', // Skaber en klikbar effekt
            }}
          >
            Der er hul i denne tand, klik her for at se hvad du kan gøre.
          </div>
        </Link>
      )}
    </div>
  );
};

export default DineTaender;
