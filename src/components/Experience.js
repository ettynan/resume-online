import React from 'react';

// Array holding data for experiences
const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "Tech Company XYZ",
    dates: "June 2024 - August 2024",
    responsibilities: [
      "Worked on the development of new features for the company's flagship product.",
      "Collaborated with cross-functional teams to design and implement software solutions."
    ],
    achievements: [
      "Successfully improved the performance of key components, resulting in a 20% increase in speed."
    ]
  },
  {
    title: "Junior Developer",
    company: "Software Solutions Inc.",
    dates: "September 2023 - May 2024",
    responsibilities: [
      "Developed and maintained internal tools for the engineering team.",
      "Participated in code reviews and maintained code quality."
    ],
    achievements: [
      "Helped refactor legacy code, which reduced the bug rate by 30%."
    ]
  }
];

// React functional component to render the Experiences section
const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>

      {/* Added containment here for the experience list */}
      <div className="experience-container">
        <div className="experience-list">
          {experiencesData.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <p><strong>{exp.company}</strong> | {exp.dates}</p>
              <h4>Responsibilities:</h4>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <h4>Achievements:</h4>
              <ul>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
