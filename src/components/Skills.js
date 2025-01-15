import React from 'react';
import Card from './Card'; // Import Card component
import frontGear from '../styles/front-gear1.jpg'; // Front image for the card
import backGear from '../styles/back-gear1.jpg'; // Back image for the card

const Skills = () => {
  return (
    <section className="cards-container"> {/* Added the cards-container class */}
      {/* Skills Card */}
      <Card
        title="Skills"
        frontImage={frontGear}
        backImage={backGear}
        dataAos="zoom-in-left"
      >
        <ul>
          <li>
            <strong>Languages:</strong> Python, Java, JavaScript
          </li>
          <li>
            <strong>Containerization:</strong> Kubernetes, Docker
          </li>
          <li>
            <strong>Databases:</strong> SQL (MySQL), NoSQL (MongoDB, DynamoDB)
          </li>
          <li>
            <strong>Frameworks:</strong> Flask, Django
          </li>
          <li>
            <strong>Scripting:</strong> Bash, Python, PowerShell
          </li>
          <li>
            <strong>CI/CD:</strong> Kubeflow Pipelines, GitHub Actions
          </li>
          <li>
            <strong>Cloud:</strong> AWS (IAM, CloudFormation, EKS, S3, EC2),
            Terraform, GCP
          </li>
          <li>
            <strong>Other Skills:</strong> Linux, JSON, Scikit-learn, MLOps,
            Pandas, Numpy
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default Skills;
