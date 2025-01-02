import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import OmMig from './OmMig';
import Home from './Home';
import Contact from './Contact';
import CV from './CV';

function App() {
  useEffect(() => {
    // Påskägg: Klicka för att byta bakgrund
    const easterEggButton = document.createElement('button');
    easterEggButton.textContent = 'Klicka här!';
    easterEggButton.style.position = 'fixed';
    easterEggButton.style.bottom = '20px';
    easterEggButton.style.right = '20px';
    easterEggButton.style.padding = '10px 15px';
    easterEggButton.style.backgroundColor = '#8f4e85';
    easterEggButton.style.color = 'white';
    easterEggButton.style.border = 'none';
    easterEggButton.style.borderRadius = '5px';
    easterEggButton.style.cursor = 'pointer';
    document.body.appendChild(easterEggButton);

 // Event för att byta bakgrund
 easterEggButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Funktion för att generera slumpmässig färg
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

    // Påskägg: Tangentbordssekvens
    let sequence = [];
    const secretCode = '1234';

    const handleKeyDown = (event) => {
      sequence.push(event.key);
      sequence = sequence.slice(-secretCode.length);

      if (sequence.join('') === secretCode) {
        alert('Grattis!! Ett av påskägget är hittat!!');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Rensa eventhandlers och DOM-element vid avladdning
    return () => {
      document.body.removeChild(easterEggButton);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-mig" element={<OmMig />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
