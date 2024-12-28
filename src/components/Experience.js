import React from 'react';

const Experience = () => {
  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="job">
        <p className="job-title prominent-title">Founder</p>
        <p className="job-duration">07/2023 - 12/2023</p>
        <p className="company-name">TopHat Essentials, LLC</p>
        <ul>
          <li>Opened and operated an online drop-shipping store focusing on safety apparel.</li>
          <li>Conducted market research to identify demand for safety apparel and small equipment.</li>
          <li>Managed e-commerce platform and provided exceptional customer service.</li>
        </ul>
      </div>
      <div className="job">
        <p className="job-title prominent-title">Engineering Consultant</p>
        <p className="job-duration">01/2022 - 07/2023</p>
        <p className="company-name">Deloitte Digital</p>
        <ul>
          <li>Supported machine learning workflows by integrating patient health outcome models into an AI healthcare platform, ensuring secure access management and data visualization.</li>
          <li>Delivered training on MLOps best practices, bridging the gap between technical workflows and non-technical stakeholders to enhance ML adoption.</li>
          <li>Improved system reliability and optimized data infrastructure, reducing downtime by 15%, enhancing ML pipeline efficiency.</li>
        </ul>
      </div>
      <div className="job">
        <p className="job-title prominent-title">Machine Learning Engineer</p>
        <p className="job-duration">10/2021 - 01/2022</p>
        <p className="company-name">Freddie Mac</p>
        <ul>
          <li>Developed end-to-end pipeline capability in support of 800+ data scientists and engineers.</li>
          <li>Utilized Kubernetes, Docker, and Kubeflow Pipelines for CI/CD.</li>
          <li>Built, trained, and served Python test models for development of data science platform.</li>
        </ul>
      </div>
      <div className="job">
        <p className="job-title prominent-title">Software Engineer</p>
        <p className="job-duration">04/2020 - 10/2021</p>
        <p className="company-name">Revature</p>
        <ul>
          <li>Developed SWOT generation web app integrated with Salesforce. Reduced data entry time by 65%.</li>
          <li>Utilized React, Redux, Flask RestPlus, Python, MongoDB. Containerized with Docker; deployed on AWS with managed IAM roles.</li>
          <li>Produced client web app allowing 400+ users to manage online school activities.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;