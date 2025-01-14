import React from 'react';
import Card from './Card'; // Import Card component
import frontGear1 from '../styles/front-gear1.jpg'; // Import the image for the front of card 1
import frontGear2 from '../styles/front-gear2.jpg'; // Import the image for the front of card 2
import frontGear3 from '../styles/front-gear3.jpg'; // Import the image for the front of card 3
import backGear1 from '../styles/back-gear1.jpg'; // Import the image for the back of card 1
import backGear2 from '../styles/back-gear2.jpg'; // Import the image for the back of card 2
import backGear3 from '../styles/back-gear3.jpg'; // Import the image for the back of card 3

const Skills = () => {
  return (
    <section>
      {/* Skills Label with the 'skills-label' class */}
      <div className="card-label">Skills</div>

      <div className="cards-container">
        {/* Languages Skill Card */}
        <Card title="Languages" frontImage={frontGear1} backImage={backGear1} dataAos="zoom-in-right">
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </Card>

        {/* Containerization Skill Card */}
        <Card title="Containerization" frontImage={frontGear2} backImage={backGear2} dataAos="zoom-in-left">
          <ul>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </Card>

        {/* Databases Skill Card */}
        <Card title="Databases" frontImage={frontGear3} backImage={backGear3} dataAos="zoom-in-right">
          <ul>
            <li>SQL (MySQL)</li>
            <li>NoSQL (MongoDB, DynamoDB)</li>
          </ul>
        </Card>

        {/* Frameworks Skill Card */}
        <Card title="Frameworks" frontImage={frontGear1} backImage={backGear1} dataAos="zoom-in-left">
          <ul>
            <li>Flask</li>
            <li>Django</li>
          </ul>
        </Card>

        {/* Scripting Skill Card */}
        <Card title="Scripting" frontImage={frontGear2} backImage={backGear2} dataAos="zoom-in-right">
          <ul>
            <li>Bash</li>
            <li>Python</li>
            <li>PowerShell</li>
          </ul>
        </Card>

        {/* CI/CD Skill Card */}
        <Card title="CI/CD" frontImage={frontGear3} backImage={backGear3} dataAos="zoom-in-left">
          <ul>
            <li>Kubeflow Pipelines</li>
            <li>GitHub Actions</li>
          </ul>
        </Card>

        {/* Cloud Skill Card */}
        <Card title="Cloud" frontImage={frontGear1} backImage={backGear1} dataAos="zoom-in-right">
          <ul>
            <li>AWS (IAM, CloudFormation, EKS, S3, EC2)</li>
            <li>Terraform</li>
            <li>GCP</li>
          </ul>
        </Card>

        {/* Other Skills Card */}
        <Card title="Other Skills" frontImage={frontGear2} backImage={backGear2} dataAos="zoom-in-left">
          <ul>
            <li>Linux</li>
            <li>JSON</li>
            <li>Scikit-learn</li>
            <li>MLOps</li>
            <li>Pandas</li>
            <li>Numpy</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
