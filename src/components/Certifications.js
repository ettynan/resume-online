import React from 'react';

const Certifications = () => {
  return (
    <section>
      <h2 className="section-title">Professional Certifications</h2>
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
    </section>
  );
};

export default Certifications;
