import React from 'react';
import './style.css'; 

const Contact = () => {
  return (
    <div>
      
      <br />
      <hr />
      
      <main>
        <section className="innehåll">
          <br />
          <br />
          <h3>Hör gärna av er vid frågor!</h3>
          <h3>Kontakta mig på</h3>
          <p>Tel: 070-815 09 26</p>
          <p>Email: Esterz@live.se</p>
          <p>Instagram: @esterzetterlundd</p>
          <div className="kolumn">
          <img
            src="Labb1/thumbnail_IMG_0916.jpg"
            alt="Ester Zetterlund med en hund"
            width="300"
            height="400"
          />
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Ester Zetterlund</p>
      </footer>
    </div>
  );
};

export default Contact;
