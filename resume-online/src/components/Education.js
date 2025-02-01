import React from 'react';
import Card from './Card'; // Importing the Card component for displaying each project as a card
import frontGear1 from '../styles/front-gear1.jpg'; // Front image for the card
import frontGear2 from '../styles/front-gear2.jpg'; // Front image for the card
import frontGear3 from '../styles/front-gear3.jpg'; // Front image for the card
import backGear1 from '../styles/back-gear1.jpg'; // Back image for the card
import backGear2 from '../styles/back-gear2.jpg'; // Back image for the card
import backGear3 from '../styles/back-gear3.jpg'; // Back image for the card

// Array holding data for each education entry
const educationData = [
  {
    title: 'Master of Science in Software Engineering', // Title of the education
    content: (
      <ul>
        <li><strong>California State University, Fullerton, CA</strong> - Expected graduation: May 2026</li>
        <li>Topics of study: Software Design, Agile, Cloud Computing, and DevOps.</li>
        <li>Insertion Sort Android App Project: Developed an Android app using Insertion Sort.</li>
      </ul>
    ),
    frontImage: frontGear1, // Add the front image here
    backImage: backGear2,   // Add the back image here
  },
  { 
    title: 'Graduate Certificate, Computer Science', // Title of the education
    content: (
      <ul>
        <li><strong>Northeastern University, Boston, MA</strong></li>
        <li>Food Inspection Report Web App: Built a web app for restaurant inspections.</li>
        <li>Doctor Locating App: Developed a doctor-locating web app.</li>
        <li>SharkHack 2019 Winner: Best Social Good Hack.</li>
      </ul>
    ),
    frontImage: frontGear2, // Add the front image here
    backImage: backGear3,   // Add the back image here
  },
  { 
    title: 'MBA, Supply Chain Management', // Title of the education
    content: (
      <ul>
        <li><strong>Portland State University, Portland, OR</strong></li>
        <li>Study abroad—Supply Chain Management and Marketing in China.</li>
        <li><strong>Capstone Project:</strong> Developed a product launch plan for an online central hub.</li>
        <li>Coursework: Forecasting, demand & resource planning, strategy.</li>
      </ul>
    ),
    frontImage: frontGear3, // Add the front image here
    backImage: backGear1,   // Add the back image here
  },
  {
    title: 'BS Chemical Engineering', // Title of the education
    content: (
      <ul>
        <li><strong>Arizona State University, Tempe, AZ</strong></li>
        <li><strong>Capstone Project:</strong> Designed a solution for the Salton Sea’s increasing salinity.</li>
        <li><strong>Technologies:</strong> Aspen, C++, Matlab/Simulink.</li>
      </ul>
    ),
    frontImage: backGear1, // Add the front image here
    backImage: frontGear2,   // Add the back image here
  },
];

// React functional component to render the Education section
const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>

      {/* Container for education cards */}
      <div className="education-cards-container">
        {/* Dynamically render a card for each education entry using the educationData array */}
        {educationData.map((edu, index) => (
          <Card
          key={index} 
          title={edu.title}
          frontImage={edu.frontImage}  // Pass frontImage prop
          backImage={edu.backImage}    // Pass backImage prop
        >
          {edu.content} {/* Display the project's content */}
        </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
