import { CVData } from '../models/cv-data.interface';

export const cvDataEn: CVData = {
  personalInfo: {
    name: "Byron Gonzalez",
    title: "Technical Lead in Service Integration",
    summary: "Multimedia Engineer with over five years of experience leading technology projects, primarily in the banking and corporate sectors. I specialize in bridging the gap between business needs and technical teams, working closely with external development providers and internal stakeholders. My background includes drafting technical documentation, estimating project timelines, integrating third-party services (APIs, databases), and managing production deployments. I’ve led projects through their full lifecycle (from planning and technical scoping to QA and go-live) ensuring deliverables meet quality standards and business goals. I’m focused on practical, well-documented solutions and clear communication between functional and technical areas.",
    contact: {
      email: "byrongonzalez14@gmail.com",
      phone: "(+57) 322 584 8613",
      location: "Cali, Colombia",
      linkedin: "https://www.linkedin.com/in/byrongonzalezing/",
      github: "https://github.com/byrongonzalez14",
      website: "https://byron-Gonzalez.dev"
    }
  },
  experience: [
    {
      company: "Q-VISION TECHNOLOGIES for BANCO UNION S.A.",
      position: "Technical Lead - Development Analyst",
      period: "June 2022 – May 2024",
      description: "Served as the main point of contact between business teams and external development vendors, ensuring alignment across all phases of the project. Created and validated technical documentation, including architectural diagrams, integration flows, and data usage guidelines. Estimated timelines and technical effort for each project phase, helping define realistic development plans. Led daily meetings with providers, tracked progress, addressed technical blockers, and kept deliveries on schedule. Worked alongside QA teams to validate functionality and resolve issues throughout the testing process. Participated in production rollouts, providing support and validation to ensure systems launched smoothly.",
      technologies: ["Angular","Vue.js 3","JavaScript","TypeScript","HTML5","CSS3","Node.js","Express.js","Spring Boot","REST APIs","SQL","PostgreSQL","Oracle Database","GoAnywhere MFT","Docker","Kubernetes","AWS","Azure","CI/CD","GitHub","Agile (Scrum, Kanban)","Jira","Confluence","Lucidchart","Figma","Microservices Architecture","API Gateway"]
    },
    {
      company: "COLGATE - PALMOLIVE",
      position: "Web Content Analyst",
      period: "March 2018 – June 2022",
      description: "Coordinated global web projects through the AEM platform, ensuring adherence to brand and technical guidelines. Worked closely with development, marketing, and design teams across regions to keep delivery timelines on track. Reviewed and tested website updates for SEO, accessibility, and user experience compliance. Implemented tracking codes and created reports based on user behavior and analytics insights.",
      technologies: ["HTML5","CSS3","JavaScript","Adobe Experience Manager (AEM)","SEO (Google Analytics, Google Search Console)","Jira","Confluence","Google Workspace","Figma","Adobe Creative Suite (Photoshop, Illustrator)","User Experience (UX)","WordPress","Google Tag Manager","Version Control (Git, GitHub)","Agile (Scrum, Kanban)"]
    },
    {
      company: "COMFENALCO VALLE DELAGENTE",
      position: "Web Designer (Internship)",
      period: "2019 - 2020",
      description: "Maintained and updated content on the organization's internal portal, enhancing user experience. Made front-end updates using HTML and CSS to align the interface with corporate branding.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "SASS"]
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
    { name: "JavaScript", level: 5, category: "Programming Languages" },
    { name: "Angular", level: 5, category: "Frontend Frameworks" },
    { name: "React", level: 4, category: "Frontend Frameworks" },
    { name: "Node.js", level: 4, category: "Backend Technologies" },
    { name: "Python", level: 3, category: "Programming Languages" },
    { name: "AWS", level: 4, category: "Cloud Platforms" },
    { name: "Docker", level: 4, category: "DevOps" },
    { name: "PostgreSQL", level: 4, category: "Databases" },
    { name: "Git", level: 5, category: "Version Control" },
    { name: "Agile/Scrum", level: 4, category: "Methodologies" }
  ],
  projects: [
    {
      name: "encárgate app - Landing Page",
      description: "Landing page project for Encárgate, a TaskRabbit-style platform focused on connecting people with home services quickly and reliably.",
      technologies: ["Vue.js 3", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Git"],
      link: "https://encargate-app.vercel.app/",
      github: "https://github.com/byrongonzalez14/encargate-app.git"
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      technologies: ["React", "Socket.io", "Express.js", "PostgreSQL", "Redis"],
      link: "https://taskmanager.byron-Gonzalez.dev",
      github: "https://github.com/byron-Gonzalez/task-manager"
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with interactive maps and data visualization.",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      link: "https://weather.byron-Gonzalez.dev",
      github: "https://github.com/byron-Gonzalez/weather-dashboard"
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
    }
  ]
};
