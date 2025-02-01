import React from 'react';
import Card from './Card'; // Import Card component
import frontGear from '../styles/front-gear2.jpg'; // Front image for the card
import backGear from '../styles/back-gear2.jpg'; // Back image for the card

const Summary = () => {
  return (
    <section className="cards-container"> {/* Added the cards-container class */} 
      {/* Summary Card */}
      <Card
        title="Professional Summary"
        frontImage={frontGear}
        backImage={backGear}
        dataAos="zoom-in-right"
      >
      <p>
        Master’s student in Software Engineering with experience in cloud operations, 
        machine learning workflows, and software development. Proficient in Python, Kubernetes, 
        MySQL, and AWS, focusing on developing and supporting data pipelines and implementing 
        MLOps best practices. Skilled in optimizing workflows and building scalable, cloud-based solutions.
      </p>
      </Card>
    </section>
  );
};

export default Summary;
