// Personal Information Configuration
// Update this file with your details

const CONFIG = {
  name: "Rohit Ash Choudhary",
  title: "Backend Engineer",
  tagline: "I build backend systems that scale, fail safely, and stay clean.",
  bio: "I build products from scratch. Not just backend code, but full systems that people actually use. I think about what users need, design things that scale, and ship features that solve real problems. If it doesn't work when it matters, it's not good enough. When I'm not building, I travel, listen to music, and write lyrics. Finding the right words feels a lot like debugging a tricky system. Both need patience and the right approach.",
  skills: ["Java", "Clojure", "Spring Boot", "Kafka", "ScyllaDB", "Yugabyte", "Redis", "RAG", "AWS", "Grafana", "Prometheus", "Hibernate", "REST API"],
  
  skillsDetailed: {
    programming: ["Java", "Clojure", "Python", "SQL"],
    frameworks: ["Spring Boot", "Spring Cloud", "Hibernate", "JPA", "Microservices", "API Gateway", "Service Discovery", "REST API", "CQRS"],
    applicationServers: ["WebLogic", "WildFly", "Apache Tomcat"],
    tools: ["Apache Kafka", "Docker", "Git", "GitHub", "JUnit", "Mockito", "Swagger", "Postman", "SonarQube", "Jenkins", "Prometheus", "Grafana"],
    databases: ["ScyllaDB", "Yugabyte", "Redis", "Cassandra", "Oracle", "MySQL", "MongoDB"],
    cloudDevOps: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "AWS ECS", "Linux", "Unix", "CI/CD"],
    ai: ["Spring AI", "RAG Pipelines", "MCP", "Prompt Engineering", "OpenAI API"]
  },
  
  contact: {
    email: "ashhh.choudhary@gmail.com",
    github: "https://github.com/rohit-ash-choudhary",
    linkedin:"https://www.linkedin.com/in/rohit-ash-choudhary/",
    twitter: "https://x.com/Ashhh_choudhary",
    instagram: "https://instagram.com/ashhh_choudhary"
  },
  
  resume: {
    pdfPath: "ROHITASH_CHOUDHARY_SDE2.pdf"
  },
  
  work: [
    {
      company: "Helpshift",
      role: "SDE II — Core Platform",
      start: "2025-05",
      end: null,
      location: "India",
      highlights: [
        "Led a Clojure migration of 12TB+ from ScyllaDB to YugabyteDB across a distributed cluster.",
        "Built Spark workflows with dual writes, validation, retries, and resumable jobs.",
        "Cut internal API response time by 35% and supported 18+ database nodes.",
        "Set SLOs in Prometheus and Grafana, cutting production alerts by 30%."
      ],
      tags: ["Clojure", "ScyllaDB", "Yugabyte", "Spark", "Grafana", "Prometheus", "REST", "Distributed Systems"]
    },
    {
      company: "Amdocs",
      role: "Software Development Engineer I",
      start: "2022-03",
      end: "2025-05",
      location: "Gurugram, India",
      highlights: [
        "Shipped 20+ Spring Boot APIs and cut average response time by 35%.",
        "Rolled OAuth 2.0 and JWT across 8 microservices and passed the security audit.",
        "Cut Oracle and MySQL response time by 50% on 100k+ daily transactions.",
        "Kafka between services: 50k+ messages a day, under 10ms average latency.",
        "Automated health checks, saving 1,080+ hours a year and cutting MTTR by 40%."
      ],
      tags: ["Java 17", "Spring Boot", "Kafka", "OAuth2", "JWT", "Hibernate", "Oracle", "MySQL", "AWS", "Docker", "Jenkins", "WildFly"]
    },
    {
      company: "JK Tech",
      role: "Associate Consultant",
      start: "2021-07",
      end: "2022-02",
      location: "India",
      highlights: [
        "Cut query time by 60% on datasets with 10M+ rows using indexing and partitioning.",
        "Removed duplicates across 5 production databases at 92% accuracy.",
        "Automated weekly and monthly reports, saving 8 hours every week."
      ],
      tags: ["SQL", "Python", "Oracle", "Pandas", "Indexing", "Partitioning"]
    }
  ],
  
  products: [
    {
      name: "LaterMe - Schedule Messages for Your Future Self",
      description: "A message scheduling service that lets you send messages to your future self. Write notes, set goals, or reminders that get delivered to you on a specific date. Built with Spring Boot backend featuring scheduled task execution for reliable message delivery. A simple yet powerful tool for reflection and planning ahead.",
      tech: ["Spring Boot", "Spring Scheduler", "Java", "Backend API", "Scheduled Tasks"],
      link: "https://laterme.pages.dev/",
      status: "live"
    },
    {
      name: "DeepWork: Focus the Hours That Matter",
      description: "A web app for deep focus organized by categories. Stay in flow by focusing on one category at a time—work, study, creative, or custom. React frontend with Java Spring Boot and Python in the backend. Built for sustained deep focus with clear category boundaries so you can go deep without context-switching.",
      tech: ["React", "Java", "Spring Boot", "Python", "Web App"],
      link: "#",
      status: "live"
    },
    {
      name: "FocusGate - Distraction Lock",
      description: "Block all websites except 5 allowed sites for a set time period to help you stay focused. A productivity browser extension that helps you stay focused by blocking all websites except up to 5 allowed websites for a set time period. You can use this to focus on any task—whether studying, working, or doing any other productive activity.",
      tech: ["JavaScript", "Chrome Extension API", "Local Storage"],
      link: "https://chromewebstore.google.com/detail/focusgate-distraction-loc/lkiclebelnfobmhpcdkhknjlbppolpma?authuser=0&hl=en",
      status: "live"
    },
    {
      name: "TimeGuard – Daily Limits",
      description: "A Chrome extension that helps you set daily time limits on websites. Track your browsing habits, get reminders when you hit your limits, and stay focused. Built to solve my own problem of spending too much time on distracting sites.",
      tech: ["JavaScript", "Chrome Extension API", "Local Storage"],
      link: "https://chromewebstore.google.com/detail/timeguard-%E2%80%93-daily-limits/lhinglchdahkkhdnfjbfnaafckbdbkpm?hl=en-US&utm_source=ext_sidebar",
      status: "live"
    }
  ],

};