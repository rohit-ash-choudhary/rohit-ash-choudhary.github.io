// Personal Information Configuration
// Update this file with your details

const CONFIG = {
  name: "Rohit Ash Choudhary",
  title: "Backend Engineer",
  tagline: "I build backend systems that scale, fail safely, and stay clean.",
  bio: "I build products from scratch. Not just backend code, but full systems that people actually use. I think about what users need, design things that scale, and ship features that solve real problems. If it doesn't work when it matters, it's not good enough. When I'm not building, I travel, listen to music, and write poems. Finding the right words feels a lot like debugging a tricky system. Both need patience and the right approach.",
  skills: ["Java", "Spring Boot","AI", "Kafka", "AWS", "Oracle", "PostgreSQL", "Microservices", "DevOps", "REST API"],
  
  skillsDetailed: {
    programming: ["Java", "Python", "SQL", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
    frameworks: ["Spring Boot", "Spring Cloud", "Hibernate", "JPA", "Microservices", "API Gateway", "Service Discovery", "JSP", "Servlet"],
    applicationServers: ["WebLogic", "Wild-Fly", "Apache Tomcat"],
    tools: ["Docker", "Git", "JUnit", "Mockito", "Apache Kafka", "AI Engineer", "Prompt Engineer"],
    databases: ["Oracle", "MySQL", "MongoDB", "Cassandra"],
    cloudDevOps: ["AWS", "Linux", "Windows", "Unix"]
  },
  
  contact: {
    email: "ashhhchoudhary@gmail.com",
    github: "https://github.com/rohit-ash-choudhary",
    linkedin:"https://www.linkedin.com/in/rohit-ash-choudhary/",
    twitter: "https://x.com/Ashhh_choudhary",
    instagram: "https://instagram.com/ashhh_choudhary"
  },
  
  resume: {
    pdfPath: "Rohitash_ChoudharySDE.pdf" // Path to your PDF resume file
  },
  
  work: [
    {
      company: "Amdocs",
      role: "Software Engineer",
      description: "Built and maintained Spring Boot APIs, implemented OAuth2 security, optimized SQL queries reducing response time by 50%, and automated health checks saving 1000+ hours annually."
    },
    {
      company: "JKTECH",
      role: "Associate Consultant",
      description: "Optimized large-scale databases using indexing and partitioning, automated reporting pipelines, and improved data integrity through backend scripts."
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

  randomFacts: [
    // Life & Recovery
    "In 2022, life forced me to slow down completely.",
    "I temporarily lost strength and sensation in my left leg.",
    "That pause changed how I see progress forever.",
    "Recovery taught me patience before strength.",
    "I rebuilt my routines one day at a time.",
    "By December 2025, I was deadlifting 170 kg.",
    "That strength was earned, not rushed.",
    "I learned progress doesn't respond to urgency.",
    "Discipline became my default mindset.",
    "I trust consistency more than motivation.",
    "The gym is my grounding ritual.",
    "Training clears my head better than anything else.",
    "I respect fundamentals in fitness and life.",
    "I train quietly and let results speak.",
    "I value balance over extremes.",
    "Health taught me discipline better than motivation ever could.",
    "Setbacks taught me how to rebuild, not quit.",
    "I respect long recovery timelines.",
    "I believe growth should feel stable, not chaotic.",
    "Mental clarity matters to me.",
    
    // Music & Writing
    "Music has always been part of my thinking process.",
    "I use music to reset after deep focus sessions.",
    "During college, I did ghostwriting for others.",
    "Some of my lyrics still outperform most mainstream tracks.",
    "Writing taught me precision with words.",
    "Music keeps my creativity alive.",
    
    // Reading & Learning
    "I read books to understand, not to impress.",
    "I prefer slow, intentional reading.",
    "Books help me think beyond my profession.",
    "Reading sharpens how I reason and explain.",
    "Learning is a lifelong habit for me.",
    "Books keep my thinking grounded.",
    
    // Technology & Engineering
    "Technology feels natural to me.",
    "Backend engineering fits how my mind works.",
    "I enjoy problems without obvious answers.",
    "Clean architecture matters more than clever hacks.",
    "I think before I code.",
    "I care deeply about system reliability.",
    "Debugging feels like solving a puzzle.",
    "I optimize only after correctness.",
    "Simplicity is intentional, not accidental.",
    "I build systems to age well.",
    "I enjoy understanding how systems behave in production.",
    "Readability is a feature, not an afterthought.",
    "Strong foundations matter more than fast results.",
    "I value systems that compound over time.",
    "I like building things for real use.",
    "I built my first Chrome extension to solve my own problem.",
    "That experience taught me user-first thinking.",
    "I enjoy creating tools I personally need.",
    "Building small tools excites me as much as big systems.",
    "Shipping something usable matters to me.",
    "I like understanding how things work end-to-end.",
    "I go deep instead of wide.",
    "I measure progress in months and years.",
    "I'm comfortable working without noise or validation.",
    "Calm focus beats loud ambition.",
    "Tech keeps my curiosity active.",
    "All of it feeds into how I build systems.",
    
    // Philosophy & Mindset
    "I don't separate personal growth from professional growth.",
    "I treat life like a long-term project.",
    "I enjoy improving small things consistently.",
    "I pay attention to details that others skip.",
    "I trust quiet progress.",
    "I'm comfortable being underestimated.",
    "I believe resilience is built privately.",
    "I care about building things that last.",
    "I'm always learning, always refining.",
    "I'm still building — patiently, intentionally, forward.",
    
    // Coding & Development Facts
    "I once debugged a production issue at 3 AM and found it was a single missing semicolon.",
    "I've automated so many tasks that my colleagues call me the 'automation wizard'.",
    "I once wrote a script that saved my team 10 hours of manual work every week.",
    "I believe the best code is code that doesn't need to be written.",
    "I'm fascinated by how small optimizations can lead to massive performance improvements.",
    "I enjoy contributing to open-source projects in my spare time.",
    "I can read a stack trace faster than most people read error messages.",
    "I've refactored legacy codebases that others were afraid to touch.",
    "I once reduced database query time from 5 seconds to 50ms with a single index.",
    "I write tests not because I have to, but because I sleep better at night.",
    "I've spent entire weekends debugging a single line of code — and loved it.",
    "I believe every bug is a learning opportunity in disguise.",
    "I've built APIs that handle millions of requests without breaking a sweat.",
    "I can visualize system architecture in my head before writing a single line of code.",
    "I once fixed a memory leak that had been plaguing production for months.",
    "I prefer writing documentation that actually helps people, not just fills space.",
    "I've learned more from code reviews than from any tutorial.",
    "I believe good code should read like a well-written story.",
    "I once optimized a function so well it became 100x faster — and simpler.",
    "I've built systems that run 24/7 without human intervention.",
    "I can spot code smells from a mile away.",
    "I believe in fixing the root cause, not just the symptoms.",
    "I've written code that's still running in production after 5 years.",
    "I once spent 3 days designing a system that took 2 hours to implement.",
    "I believe premature optimization is the root of all evil — but so is no optimization.",
    "I've debugged issues that made no logical sense until they suddenly did.",
    "I can explain complex systems in simple terms — that's my superpower.",
    "I once built a feature in 2 hours that was estimated to take 2 weeks.",
    "I believe the best code is written when you're not trying to impress anyone.",
    "I've learned that the hardest bugs are usually the simplest mistakes."
  ]
};
