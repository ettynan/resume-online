import React from 'react';

// Array holding data for experiences
const experiencesData = [
  {
    title: "Founder",
    company: "TopHat Essentials, LLC",
    dates: "July 2023 - December 2023",
    responsibilities: [
      "Assessed business and operational risks by evaluating product demand, supplier reliability, and fulfillment processes to ensure cost-effective and secure operations.",
      "Conducted risk assessment related to inventory management and order fulfillment, implementing strategies to mitigate supply chain disruptions."
    ],
    achievements: []
  },
  {
    title: "Engineering Consultant",
    company: "Deloitte Digital",
    dates: "January 2022 - July 2023",
    responsibilities: [
      "Supported machine learning workflows by integrating patient health outcome models into an AI healthcare platform, ensuring secure access management and data visualization through AWS IAM and Quicksight.",
      "Delivered training on MLOps best practices, bridging the gap between technical workflows and non-technical stakeholders to enhance ML adoption.",
      "Improved system reliability and optimized data infrastructure, reducing downtime in the data warehouse by 15%, directly enhancing ML pipeline efficiency."
    ],
    achievements: []
  },
  {
    title: "Machine Learning Engineer",
    company: "Freddie Mac",
    dates: "October 2021 - January 2022",
    responsibilities: [
      "Developed end-to-end pipeline capability in support of 800+ data scientists & engineers.",
      "Utilized container technologies (Kubernetes, Docker) and Kubeflow Pipelines for CI/CD.",
      "Managed user roles and permissions in AWS IAM and Kubeflow.",
      "Built, trained, and served Python test models for the development of a data science platform."
    ],
    achievements: []
  },
  {
    title: "Software Engineer",
    company: "Revature",
    dates: "April 2020 - October 2021",
    responsibilities: [
      "Developed SWOT generation web app integrated with Salesforce.",
      "Utilized React, Redux, and CSS with Flask RestPlus, Python, and MongoDB. Containerized with Docker; deployed on AWS with managed IAM roles.",
      "Produced client web application allowing 400+ users (students, teachers, admin) to handle online school activities."
    ],
    achievements: []
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
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <p><strong>{exp.company}</strong> | {exp.dates}</p>
            </div>
            <h4>Responsibilities:</h4>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            {exp.achievements.length > 0 && (
              <>
                <h4>Achievements:</h4>
                <ul>
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
