// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Tilføj denne import
import './index.css';
import './globalStyles.css';  // <-- Importer den globale CSS-fil
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Pak App ind i BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Hvis du vil måle performance i din app
reportWebVitals();
