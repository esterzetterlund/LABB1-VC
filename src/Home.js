import React from 'react';
import './style.css'; // Se till att länka till din CSS

const Home = () => {
  return (
    <div>
      
      <br />
      <hr />
      <main>
        <section className="innehåll">
          <br />
          <br />
          <h3>Välkommen till min CV-hemsida!</h3>
          <p>Ni ska få börja med att se en bild på mig så ni vet vem ni har att göra med!</p>
          <div className="kolumn">
          <img
            src="Labb1/thumbnail_IMG_7503.jpg"
            alt="Ester Zetterlund på sitt gamla jobb som servitris"
            width="300"
            height="400"
          />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Ester Zetterlund</p>
      </footer>
    </div>
  );
};

export default Home;
