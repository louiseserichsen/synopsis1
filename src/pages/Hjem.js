import React from 'react';

const Hjem = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Velkommen til vores platform!</h1>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
          src="/dentist.png"  // Bruger stien til public mappen
          alt="3D model example"
          style={{ width: '20%', height: 'auto', borderRadius: '4px', marginRight: '20px' }}  // Billede størrelse og margin
        />
        <div>
          <p>
            Vi er glade for at præsentere en innovativ måde at kommunikere om tandsundhed på. <br /> Vores platform
            bruger avanceret 3D-teknologi for at give dig en bedre forståelse af din tandsundhed. <br /> Her kan du få
            hjælp til at visualisere eventuelle tandproblemer og få vejledning, <br /> der gør det lettere at følge op
            på din behandling.
          </p>
          <h3>Hvad er 3D-modellen?</h3>
          <p>
            Den interaktive 3D-model giver dig mulighed for at se dine tænder på en helt ny måde. <br /> I stedet for
            blot at høre tandlægens ord, kan du selv se dine tænder i 3D og få en præcis visualisering af
            eventuelle problemer. <br /> Dette gør det lettere at forstå, hvad tandlægen forklarer, og hvordan du bedst
            kan tage hånd om din tandsundhed.
          </p>
          <h3>Råd og vejledning:</h3>
          <p>
            Platformen tilbyder praktiske råd og vejledning baseret på din 3D-model. <br /> Du får konkrete
            anbefalinger til, hvordan du kan forbedre din tandpleje, så du kan tage de rette skridt mod sundere
            tænder. <br />  Vi giver dig information på en simpel og forståelig måde, så du kan følge med i din behandling.
          </p>
          <h3>Beskeder fra tandlægen:</h3>
          <p>
            Tandlægen kan sende dig beskeder direkte på platformen. <br /> Dette kan være påmindelser om aftaler, nye
            behandlinger eller yderligere råd. <br />  Du kan altid holde dig opdateret og få hurtig adgang til vigtig
            information om din tandsundhed.
          </p>
          <p>
            Vi håber, at denne platform gør det nemmere for dig at tage kontrol over din tandsundhed og få den
            hjælp, du behøver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hjem;
