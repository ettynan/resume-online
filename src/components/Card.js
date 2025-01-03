import React from 'react';
import '../styles/Card.css';  // Import styles from the styles folder

const Card = ({ title, children }) => {
    return (
      <div className="card">
        <div className="card-inner">
          {/* Front face of the card */}
          <div className="card-front">
            <h3 className="card-title">{title}</h3>
          </div>
  
          {/* Back face of the card */}
          <div className="card-back">
            <div className="card-content">
              {children} {/* This will render the project details */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;