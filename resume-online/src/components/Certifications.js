import React from 'react';
import Card from './Card'; // Import Card component
import frontGear from '../styles/front-gear3.jpg'; // Front image for the card
import backGear from '../styles/back-gear3.jpg'; // Back image for the card

const Certifications = () => {
  return (
    <section className="cards-container"> {/* Added the cards-container class */}
      {/* Certifications Card */}
      <Card
        title="Professional Certifications"
        frontImage={frontGear}
        backImage={backGear}
        dataAos="zoom-in-right"
      >
      <ul className="certification-list">
        <li>
          <strong>AWS Certified Solutions Architect - Associate</strong><br />
          Amazon Web Services (AWS) | Achieved: 04/2023 | Expires: 04/2026<br />
          Certification validates expertise in designing scalable, secure, and cost-optimized cloud architectures using AWS services.
        </li>
        <li>
          <strong>AWS Certified Developer - Associate</strong><br />
          Amazon Web Services (AWS) | Achieved: 03/2023 | Expires: 03/2026<br />
          Focuses on developing and maintaining AWS-based applications, with emphasis on serverless technologies, automation, and cloud-native development practices.
        </li>
      </ul>
      </Card>
    </section>
  );
};

export default Certifications;
