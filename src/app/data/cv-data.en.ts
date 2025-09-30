import { CVData } from '../models/cv-data.interface';

export const cvDataEn: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "Technical Lead – Business Analyst",
    summary: "Multimedia Engineer with more than five years of experience leading technology projects in the banking and corporate sectors. Skilled at connecting business requirements with technical solutions, working closely with external vendors and cross-functional teams to deliver projects on time and with quality.\n My background includes technical documentation, effort estimation, service integration (APIs, databases), QA audits, and production deployments. I have managed projects through the entire lifecycle—from planning and requirements analysis to testing and go-live—always ensuring alignment with business goals and corporate standards.\nI focus on providing practical, well-documented solutions, fostering clear communication between business and technical areas, and maintaining high quality and consistency in every delivery. This mix of technical leadership and business analysis allows me to guide teams effectively while keeping projects aligned with strategic objectives.",
    contact: {
      email: "byrongonzalez14@gmail.com",
      phone: "(+57) 322 584 8613",
      location: "Cali, Colombia",
      linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
      github: "https://github.com/byrongonzalez14",
      website: "https://byrongonzalez.com.co/"
    }
  },
  experience: [
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      period: "May 2024 – Present",
      description: "• End-to-end project management: from UX/UI design to production deployment, including documentation and support.\n• Frontend Development: building websites and web applications with Angular, Vue, and TypeScript, following usability and responsive design best practices.\n• Backend Development: creating APIs and microservices with Spring Boot and Node.js, connected to PostgreSQL and MySQL databases.\n• Testing & QA: running functional and integration tests, validating acceptance criteria to ensure quality before release.\n• Deployment & DevOps: publishing projects on Vercel, Railway, and Docker, keeping stable development, QA, and production environments.\n• Web styling and design: using SCSS, Tailwind CSS, and Bootstrap to deliver visually appealing and brand-consistent solutions.\n\nServices as a Full Stack Developer:\n• Creation of corporate websites and landing pages optimized for SEO.\n• Development of custom web applications with scalable architecture.\n• Integration of external APIs and microservices.\n• Implementation of data capture forms and dashboards for analytics.\n• Technical support, maintenance, and performance optimization.",
      technologies: ["Angular","Vue.js 3","JavaScript","TypeScript","HTML5","CSS3","SCSS","Tailwind CSS","Bootstrap","Node.js","Express.js","Spring Boot","REST APIs","PostgreSQL","MySQL","Docker","Vercel","Railway","Git","GitHub","SEO","Responsive Design","UX/UI Design"]
    },
    {
      company: "Q-VISION TECHNOLOGIES for BANCO UNION S.A.",
      position: "Development Analyst – Technical Lead",
      period: "June 2022 – May 2024",
      description: "• Main point of contact between business teams and external vendors, helping to coordinate technical and functional tasks.\n• Created and reviewed technical documentation such as architectures, integrations, and data flows.\n• Helped model processes with BPMN to make sure business needs matched technical solutions.\n• Estimated effort and supported project planning, making timelines more realistic and easier to achieve.\n• Joined daily and follow-up meetings, solved technical issues, and kept track of progress with vendors.\n• Participated in User Acceptance Testing (UAT), checking acceptance criteria and supporting business users.\n• Supported QA by running smoke, functional, non-functional, and integration tests to ensure quality.\n• Helped in production rollouts, checking requirements were met and giving support in case of incidents.\n• Worked on ETL projects, preparing reports for different areas of the bank.",
      technologies: ["Angular","Vue.js 3","JavaScript","TypeScript","HTML5","CSS3","Node.js","Express.js","Spring Boot","REST APIs","SQL","PostgreSQL","Oracle Database","GoAnywhere MFT","Docker","Kubernetes","AWS","Azure","CI/CD","GitHub","Agile (Scrum, Kanban)","Jira","Confluence","Lucidchart","Figma","Microservices Architecture","API Gateway","BPMN","ETL"],
      keyProjects: [
        "Added new features to the bank's transactional portal, improving the customer experience.",
        "Migration and improvement of core banking service integrations, reducing errors and response times.",
        "Supported critical deployments in production with no major incidents.",
        "Built reporting processes with ETL that gave managers better access to information for decisions."
      ]
    },
    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst - QA & SEO Specialist",
      period: "March 2018 – June 2022",
      description: "• Coordinated international web projects in AEM, making sure global brand guidelines were followed and deadlines were met.\n• Performed QA audits and created clear reports on site quality, using internal checklists and SEO/accessibility criteria.\n• Verified SEO practices and brand standards on global websites, running crawl analysis and reporting issues.\n• Implemented tracking codes, tags, and data collection forms in LATAM, improving traceability of digital campaigns.\n• Supported BEX Authors and global agencies with crawl reports, guideline validation, and issue resolution.\n• Documented processes and content workflows in BPMN, helping to standardize practices across regional digital projects.",
      technologies: ["HTML5","CSS3","JavaScript","Adobe Experience Manager (AEM)","SEO (Google Analytics, Google Search Console)","Jira","Confluence","Google Workspace","Figma","Adobe Creative Suite (Photoshop, Illustrator)","User Experience (UX)","WordPress","Google Tag Manager","Version Control (Git, GitHub)","Agile (Scrum, Kanban)","BPMN","QA Testing","Accessibility Standards"],
      keyProjects: [
        "Migration of 50+ Colgate websites to AEM, ensuring SEO and accessibility compliance.",
        "Global standardization of SEO and QA practices, improving brand visibility and consistency across different markets.",
        "Implementation of analytics reports and data capture forms for LATAM, supporting data-driven marketing decisions."
      ]
    },
    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (Internship)",
      period: "January 2017 – June 2017",
      description: "• Updated content and improved the user experience of the corporate intranet.\n• Made adjustments in HTML and CSS according to corporate brand guidelines.\n• Assisted in Scrum ceremonies (daily meetings, sprint planning, and reviews).",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "SASS", "Scrum"],
      keyProjects: [
        "Partial redesign of the corporate intranet, improving navigation and page load times."
      ]
    }
  ],
  education: [
    {
      institution: "San Buenaventura University – Cali, Colombia",
      degree: "Multimedia Engineering",
      period: "2012–2018",
      description: "Multimedia Engineering"
    },
    {
      institution: "San Buenaventura University – Cali, Colombia",
      degree: "Diploma in Multimedia Project Design and Construction",
      period: "2017",
      description: "Diploma in Multimedia Project Design and Construction"
    }
  ],
  skills: [
    { name: "JavaScript/TypeScript", level: 5, category: "Programming Languages" },
    { name: "Angular", level: 5, category: "Frontend Frameworks" },
    { name: "Vue 3", level: 4, category: "Frontend Frameworks" },
    { name: "Java / Spring Boot", level: 5, category: "Backend Technologies" },
    { name: "SQL (Oracle, PostgreSQL, MySQL)", level: 5, category: "Databases" },
    { name: "Microservices & REST APIs", level: 4, category: "Software Architecture" },
    { name: "Docker", level: 4, category: "DevOps" },
    { name: "Kubernetes", level: 3, category: "DevOps" },
    { name: "Git / GitHub", level: 5, category: "Version Control" },
    { name: "Jenkins (CI/CD)", level: 4, category: "DevOps" },
    { name: "Postman / SoapUI", level: 4, category: "API Testing" },
    { name: "Jira / Confluence", level: 5, category: "Project Management" },
    { name: "Agile Methodologies (Scrum, Kanban)", level: 5, category: "Methodologies" },
    { name: "Scalable & High Availability Architectures", level: 4, category: "Software Architecture" },
    { name: "Figma", level: 4, category: "Design & Prototyping" },
    { name: "AEM (Adobe Experience Manager)", level: 5, category: "Content Management" }
  ],
  
  projects: [
    {
      name: "encárgate app",
      description: "Landing page project for Encárgate, a TaskRabbit-style platform focused on connecting people with home services quickly and reliably.",
      technologies: ["Vue.js 3", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Git"],
      link: "https://encargate-app.vercel.app/",
      github: "https://github.com/byrongonzalez14/encargate-app.git",
      previewImage: "assets/encargate-thumbnail.PNG"
    },
    {
      name: "VIDRIOS BEDOYA",
      description: "Corporate website for Vidrios Bedoya. Developed with Angular and Bulma, it features a modern and responsive design.",
      technologies: ["Angular","Bulma","TypeScript","HTML5","SCSS","Git","GitHub","UI/UX Design"],
      link: "https://vidrios-bedoya.vercel.app/",
      github: "https://github.com/byrongonzalez14/vidrios-bedoya.git",
      previewImage: "assets/vidrios-bedoya-thumbnail.png"
    },
    {
      name: "La Rivera",
      description: "Website developed in Angular to showcase facilities and services, with a real-time price calculator and integrated bookings. Optimized for mobile and desktop.",
      technologies: ["Angular","Bulma","TypeScript","HTML5","SCSS/SASS","Git","Vercel"],
      link: "https://la-rivera.vercel.app/",
      github: "https://github.com/byrongonzalez14/la-rivera-landing.git",
      previewImage: "assets/la-rivera-thumbnail.png"
    }
  ],
  languages: [
    { name: "English", level: "C1 - Advance" },
    { name: "Spanish", level: "Native" },
  ],
  certifications: [
    {
      name: "EF SET English Certificate (C1) – EF Education First",
      certificateUrl: "https://cert.efset.org/Exe5JG"
    },
    {
      name: "Software Architecture & Design of Modern Large Scale Systems - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-572a3e50-a17d-4fca-9fd1-678e0f1f2bc1/"
    },
    {
      name: "Frontend development with Angular and backend Spring Boot 3, RESTFul, JPA, Spring Security JWT, Redux - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/your-certificate-id"
    },
    {
      name: "BPMN 2.0 Business Process Modelling for Business Analysts - Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-a9a4f333-338f-45fa-983d-7a0e11937b4b/"
    },
    {
      name: "Scrum Master Professional Certificate – CertiProf",
      certificateUrl: "https://www.credly.com/badges/52311806-1a13-4ac3-ad98-2bb9c0b8b7fd"
    },
    {
      name: "Scrum Foundation Professional Certificate – CertiProf",
      certificateUrl: "https://www.credly.com/badges/25bc1630-1712-435b-951d-826a67547259"
    },
    {
      name: "Web Development and Digital Content – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/your-certificate-id"
    },
    {
      name: "Exam Prep Plan Overview: AWS Certified Solutions Architect - Associate – AWS Training and Certification",
      certificateUrl: "assets/certificacion-aws.pdf"
    }
    ,
    {
      name: "Programming Logic: Learn to Program in Any Language – Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-4113573a-6a7d-4aef-a0e7-64c454afd342/"
    }
  ]
};
