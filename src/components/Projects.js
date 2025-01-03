import React from 'react';
import Card from './Card'; // Importing the Card component for displaying each project as a card

// Array holding data for each project
// Each project includes a title, content, and the front/back images
const projectsData = [
  { 
    title: 'Kubernetes Cluster Setup', // Title of the project
    content: (
      <ul>
        {/* List of details describing the project */}
        <li>Configured a Kubernetes cluster on GCP, including application deployment and scaling.</li>
        <li>Managed pod deployments and implemented service discovery.</li>
        <li>Created Helm charts for application management.</li>
        <li>Utilized Kubernetes CLI tools for cluster management.</li>
      </ul>
    ),
    frontImage: 'front-gear.jpg', // Add the front image here
    backImage: 'back-gear.jpg',   // Add the back image here
  },
  { 
    title: 'Continuous Delivery Pipeline', // Title of the project
    content: (
      <ul>
        {/* List of details describing the project */}
        <li>Implemented a CI/CD pipeline using Jenkins and GCP.</li>
        <li>Automated build, test, and deployment processes.</li>
        <li>Configured Jenkins pipelines with both scripted and declarative approaches.</li>
        <li>Integrated with version control systems (VCS) for automated deployments.</li>
      </ul>
    ),
    frontImage: 'front-gear.jpg', // Add the front image here
    backImage: 'back-gear.jpg',   // Add the back image here
  },
];

// React functional component to render the Projects section
const Projects = () => {
  return (
    <section>
      {/* Header for the Projects section */}
      <h2>Projects</h2>
      
      {/* Container for project cards */}
      <div className="cards-container">
        {/* Dynamically render a card for each project using the projectsData array */}
        {projectsData.map((project, index) => (
          <Card
            key={index} 
            title={project.title}
            frontImage={project.frontImage}  // Pass frontImage prop
            backImage={project.backImage}    // Pass backImage prop
          >
            {project.content} {/* Display the project's content */}
          </Card>
        ))}
      </div>
    </section>
  );
};

// Export the Projects component to be used in other parts of the app
export default Projects;
