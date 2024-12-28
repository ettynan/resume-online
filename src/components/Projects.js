import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Personal Projects</h2>

      <div className="project">
        <p className="project-title"><strong>Kubernetes Cluster Setup</strong></p>
        <ul>
          <li>Configured a Kubernetes cluster on GCP, including application deployment and scaling.</li>
          <li>Completed tasks such as managing pod deployments and implementing service discovery.</li>
          <li>Implemented Helm charts for application management and utilized Kubernetes CLI tools for cluster management.</li>
        </ul>
      </div>

      <div className="project">
        <p className="project-title"><strong>Continuous Delivery Pipeline</strong></p>
        <ul>
          <li>Implemented a CI/CD pipeline using Jenkins and GCP. Automated build, test, and deployment processes.</li>
          <li>Configured Jenkins pipelines with scripted and declarative pipelines and integrated with VCS for automated deployments.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
