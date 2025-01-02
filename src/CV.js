import React, { useEffect, useState } from 'react';
import './style.css';

const CV = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hämta CV-data från JSON
    fetch('/CV.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>Ett fel uppstod: {error}</p>;
  }

  if (!data) {
    return <p>Laddar...</p>;
  }

  return (
    <div>
      
      <br />
      <hr />
      
      <main>
        <h3>CV</h3>
        <section>
          <div className="kolumn">
            <h3>Kontakt</h3>
            <p>Ester Zetterlund</p>
            <p>Bergsvägen 10b, 824 50 Hudiksvall</p>
            <p>070-815 09 26</p>
            <p>Esterz@live.se</p>
          </div>

          <div className="kolumn">
            <h3>Profil</h3>
            <p>
              Jag är en glad, rolig och snäll person som studerar
              systemutveckling på två år. Jag har goda kunskaper i
              programmering, problemlösning och teamwork. Jag är intresserad av
              att utveckla innovativa och användarvänliga system som kan göra
              skillnad i samhället.
            </p>
          </div>

          <div className="kolumn">
            <h3>Utbildning</h3>
            {data.education.map((edu, index) => (
              <p key={index}>
                {edu.years}: {edu.title}, {edu.place}
              </p>
            ))}
          </div>

          <div className="kolumn">
            <h3>Arbetserfarenhet</h3>
            {data.work.map((job, index) => (
              <div key={index}>
                <p>
                  <strong>{job.years}:</strong> {job.title}
                </p>
                <ul>
                  {job.tasks.map((task, tIndex) => (
                    <li key={tIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="kolumn">
            <h3>Fritidsintressen</h3>
            <p>
              På fritiden tycker jag om att vara i naturen med mina två hundar,
              vara med kompisar och spela spel. Jag är en aktiv och friluftsliv
              person som gillar att utforska nya platser. Jag är också en social
              och lekfull person som gillar att ha kul och lära mig nya saker.
            </p>
          </div>

          <div className="kolumn">
            <img
              src="Labb1/thumbnail_IMG_7503.jpg"
              alt="Ester Zetterlund med en hund"
              width="300"
              height="400"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;
