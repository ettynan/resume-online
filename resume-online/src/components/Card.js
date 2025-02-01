import React from 'react';

const Card = ({ title, children, size, frontImage, backImage, dataAos }) => {
  return (
    <div className={`card ${size}`} data-aos={dataAos}> {/* Apply the AOS animation here */}
      <div className="card-inner">
        {/* Front face of the card */}
        <div className="card-front" style={{ backgroundImage: `url(${frontImage})` }}>
          <h3 className="card-title">{title}</h3>
        </div>

        {/* Back face of the card */}
        <div className="card-back" style={{ backgroundImage: `url(${backImage})` }}>
          <div className="card-content">
            {children} {/* This will render the details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
