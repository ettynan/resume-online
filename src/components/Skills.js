import React from 'react';

const Skills = () => {
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        <li><strong>Languages:</strong> Python, Java, JavaScript</li>
        <li><strong>Containerization:</strong> Kubernetes, Docker</li>
        <li><strong>Databases:</strong> SQL (MySQL), NoSQL (MongoDB, DynamoDB)</li>
        <li><strong>Frameworks:</strong> Flask, Django</li>
        <li><strong>Scripting:</strong> Bash, Python, PowerShell</li>
        <li><strong>CI/CD:</strong> Kubeflow Pipelines, GitHub Actions</li>
        <li><strong>Cloud:</strong> AWS (IAM, CloudFormation, EKS, S3, EC2), Terraform, GCP</li>
        <li><strong>Other Skills:</strong> Linux, JSON, Scikit-learn, MLOps, Pandas, Numpy</li>
      </ul>
    </section>
  );
};

export default Skills;
