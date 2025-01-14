// CardData.js

const cardData = {
  education: [
    {
      "title": "Master of Science in Software Engineering",
      "institution": "California State University, Fullerton, CA",
      "expectedGraduation": "May 2026",
      "topics": [
        "Topics of study include: Software Design and Architecture, Agile Software Development, Software Project Management, Software Testing and Quality Assurance, Cloud Computing, and DevOps.",
        {
          "name": "Insertion Sort Android App Project",
          "description": "Developed an Android app implementing the Insertion Sort algorithm with a custom GUI, error handling, and user-friendly design, using Agile/Scrum and XP methodologies."
        },
        {
          "name": "Roblox Game App Project",
          "description": "Led Scrum ceremonies and backlog management for team project, coordinating design & implementation of game mechanics in Roblox Studio to meet user stories and goals."
        }
      ]
    },
    {
      "title": "Graduate Certificate, Computer Science",
      "institution": "Northeastern University, Boston, MA & Seattle, WA",
      "scholarship": "CCIS Graduate Scholarship recipient.",
      "projects": [
        {
          "name": "Food Inspection Report Web App",
          "description": "Designed web app to help users find inspection results for restaurants in Boston. Technologies: Front-end HTML, CSS, JavaScript; Back-end JDBC, Java, Pandas, MySQL. Reduced time to gather information by 50%."
        },
        {
          "name": "Doctor Locating App",
          "description": "Developed a doctor-locating web app for users to find doctors on their insurance plan. Technologies: Angular, HTML, CSS. Uses Google API for location services."
        }
      ]
    }
  ],

  experience: [
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
  ],

  skills: [
    {
      name: "Languages",
      items: ["Python", "Java", "JavaScript"]
    },
    {
      name: "Containerization",
      items: ["Kubernetes", "Docker"]
    },
    {
      name: "Databases",
      items: ["SQL (MySQL)", "NoSQL (MongoDB, DynamoDB)"]
    },
    {
      name: "Frameworks & Tools",
      items: ["Flask", "Django", "Node.js"]
    },
    {
      name: "Scripting",
      items: ["Bash", "Python", "PowerShell"]
    },
    {
      name: "CI/CD",
      items: ["Kubeflow Pipelines", "GitHub Actions"]
    },
    {
      name: "Cloud",
      items: ["AWS (IAM, CloudFormation, EKS, S3, EC2, & etc)", "GenAI", "Terraform", "GCP"]
    },
    {
      name: "Other skills",
      items: ["Linux", "JSON", "Scikit learn", "MLOps", "Pandas", "Numpy"]
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      institution: "Amazon Web Services",
      date: "October 2023"
    },
    {
      name: "Google Cloud Certified - Professional Cloud Architect",
      institution: "Google Cloud",
      date: "December 2023"
    }
  ]
};
  
export default cardData;
  