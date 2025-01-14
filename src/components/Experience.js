import React, { useState } from 'react';
import cardData from '../components/CardData'; // Import the card data

const Experience = () => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <section>
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-inner">
          <div className="card-front">
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="card-back">
            <ul className="experience-list">
              {cardData.experience.map((exp, index) => (
                <li key={index} className="outer-card">
                  <p><strong>{exp.title}</strong>, {exp.company}</p>
                  <p>{exp.dates}</p>
                  <ul className="responsibility-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  <ul className="achievement-list">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
