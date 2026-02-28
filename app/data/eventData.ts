// data/eventData.ts

export const hackathonData = {
  event: {
    name: "VNR DESIGNATHON",
    edition: "4th Edition",
    tagline: "COLLABORATE SHARE BRAINSTORM SUCCEED",
    host_institution:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)",
    organized_by:
      "Department of CSE & CSBS in collaboration with CSI SBC VNRVJIET and IUCEE",
    description:
      "A 24-hour national level hackathon focused on rapid prototyping and design-led innovation.",
    start_date: "2026-03-24T09:00:00",
    end_date: "2026-03-25T15:00:00",
    duration_hours: 24,
    prize_pool: "₹1 Lakh",
    location: "VNRVJIET, Hyd",
    registration: {
      platform: "Unstop",
      registration_link:
        "https://unstop.com/hackathons/vnr-design-a-thon-2026-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telangan-1648514",
      team_size_min: 1,
      team_size_max: 3,
      registration_deadline: "2026-03-15T23:59:59",
    },
  },
  tracks: [
    {
      id: 1,
      title: "Open Innovation",
      description:
        "Build innovative solutions across domains using emerging technologies and cross-disciplinary approaches to solve complex real-world problems.",
      problem_statements: [
        {
          id: 101,
          title: "AI-Powered Personal Finance Intelligence System",
          description:
            "Design and develop an AI-powered personal finance agent that delivers deeply personalized financial insights through natural language interactions.",
          requirements: [
            "Structured financial data ingestion (MCP-compatible JSON format)",
            "AI-driven reasoning and contextual response generation",
            "Scenario simulation and predictive financial modeling",
            "Secure authentication and privacy-aware architecture design",
            "Flexible interface (chat-based, voice-based, or mobile-first)",
          ],
          outcomes: [
            "Functional AI-powered personal finance prototype",
            "Demonstration of personalized insights and scenario simulations",
            "Secure user-controlled data interaction workflow",
            "Strategy optimization vs generic budgeting tools",
          ],
        },
        {
          id: 102,
          title: "AI-Based System for Remote Sensing Data Insights",
          description:
            "Develop an AI-based system that integrates Computer Vision and LLMs to automatically analyze satellite images and provide insights through natural language queries.",
          requirements: [
            "Computer Vision models for object detection or land-use analysis",
            "Time-series based change analysis",
            "LLM-based natural language query interface",
            "Support for publicly available satellite datasets (Sentinel, Landsat)",
            "Scalable processing prototype",
          ],
          outcomes: [
            "Automated detection of changes in satellite imagery",
            "Identification of buildings, roads, water bodies, or vegetation",
            "User-friendly system enabling natural language insights",
            "Working prototype with evaluation metrics (accuracy, time)",
          ],
        },
        {
          id: 103,
          title: "Carbon Footprint Tracker for MSMEs",
          description:
            "Design and develop a SaaS-based prototype that enables MSMEs to measure, monitor, and reduce their carbon emissions in a simplified manner.",
          requirements: [
            "Emission data collection and calculation engine (Scope 1 & 2 mandatory)",
            "Comparative analytics and benchmarking module",
            "AI-driven recommendation system for reduction strategies",
            "Compliance-style reporting prototype",
            "Secure cloud-based SaaS data handling",
          ],
          outcomes: [
            "Functional carbon tracking prototype",
            "Demonstration of automated emission calculations",
            "Dashboard displaying emission trends and sustainability goals",
            "Calculation logic clarity and cost-efficiency potential",
          ],
        },
        {
          id: 104,
          title: "Smart Disaster Response Coordination Platform",
          description:
            "Develop a disaster response coordination prototype that integrates satellite data, simulated IoT inputs, and crowd-sourced alerts for situational awareness.",
          requirements: [
            "Integration module for satellite or geospatial data",
            "Simulated IoT sensor data aggregation module",
            "Crowd-sourced alert submission and validation mechanism",
            "Risk analysis or predictive alert engine",
            "GIS-based interactive dashboard for visualization",
          ],
          outcomes: [
            "Functional prototype demonstrating coordination",
            "Multi-source alert processing (real or simulated data)",
            "Dashboard displaying affected zones and resource updates",
            "Alert accuracy and system responsiveness",
          ],
        },
        {
          id: 105,
          title: "AI-Based Urban Traffic Flow Optimization",
          description:
            "Design an AI-driven urban traffic management prototype that leverages computer vision to optimize traffic signal timings dynamically.",
          requirements: [
            "Computer vision module for vehicle detection",
            "Predictive modeling engine for congestion forecasting",
            "Adaptive signal timing simulation algorithm",
            "Real-time or simulated traffic data processing",
            "Centralized monitoring dashboard with traffic analytics",
          ],
          outcomes: [
            "Prototype demonstrating adaptive signal optimization",
            "Live demo of vehicle detection and congestion prediction",
            "Dashboard displaying traffic metrics and signal adjustments",
            "Reduction in simulated waiting time",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Gender Diversity & Inclusion",
      description:
        "Develop solutions to detect bias, promote skill-based equality, and empower underrepresented groups through digital literacy and secure reporting.",
      problem_statements: [
        {
          id: 201,
          title: "AI-Based Bias Detection in Hiring Systems",
          description:
            "Design and develop an AI-driven tool that detects and reports gender bias across recruitment workflows, including job descriptions and screening algorithms.",
          requirements: [
            "NLP-based bias detection for job description analysis",
            "Statistical analysis for shortlisting pattern evaluation",
            "Bias scoring and fairness evaluation framework",
            "Interactive dashboard for bias reporting",
            "Use of provided or sample hiring datasets",
          ],
          outcomes: [
            "Functional prototype identifying bias indicators",
            "Dashboard displaying fairness scores and suggestions",
            "Detection consistency and explainability",
          ],
        },
        {
          id: 202,
          title: "Gender-Neutral Skill Assessment Engine",
          description:
            "Design and develop a blind recruitment system that evaluates candidates purely based on skill-based assessments, eliminating demographic indicators.",
          requirements: [
            "Candidate anonymization and identity masking module",
            "Skill-based assessment engine (coding, aptitude, tests)",
            "Automated scoring and ranking mechanism",
            "Fairness monitoring system",
            "Secure deployment prototype",
          ],
          outcomes: [
            "Functional blind recruitment prototype",
            "Demonstration of skill-based evaluation",
            "Dashboard displaying rankings and fairness indicators",
            "Bias reduction approach and transparency",
          ],
        },
        {
          id: 203,
          title: "Digital Literacy Platform for Rural Women Entrepreneurs",
          description:
            "A multilingual micro-learning platform aimed at empowering rural women entrepreneurs with essential knowledge in finance and e-commerce.",
          requirements: [
            "Multilingual content delivery (at least two languages)",
            "Structured micro-learning modules",
            "Interactive quizzes and progress tracking",
            "Mobile-first and low-bandwidth optimized interface",
            "Engagement monitoring dashboard",
          ],
          outcomes: [
            "Functional learning platform prototype",
            "Demonstration of multilingual access",
            "Dashboard displaying enrollment and completion metrics",
            "Accessibility and learning progression tracking",
          ],
        },
        {
          id: 204,
          title: "AI-Powered Harassment Reporting & Escalation System",
          description:
            "Design and develop a confidential, AI-assisted harassment reporting and escalation platform for workplaces or educational campuses.",
          requirements: [
            "Secure anonymous reporting interface",
            "AI-based complaint classification prototype",
            "Automated escalation workflow design",
            "Role-based access control model",
            "Case tracking and audit trail module",
          ],
          outcomes: [
            "Functional confidential reporting prototype",
            "Demonstration of categorization and escalation flow",
            "Dashboard displaying resolution timelines",
            "Data security and reliability",
          ],
        },
        {
          id: 205,
          title: "Career Re-Entry Platform for Women Professionals",
          description:
            "Design a comprehensive career re-entry platform providing structured mentorship and intelligent job-matching for women returning after career breaks.",
          requirements: [
            "User profiling and career gap assessment module",
            "AI-driven skill gap analysis",
            "Personalized upskilling recommendations",
            "Job-matching prototype",
            "Progress tracking dashboard",
          ],
          outcomes: [
            "Functional re-entry support prototype",
            "Demonstration of skill analysis and job matching",
            "Match relevance score and improvement tracking",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Cyber Security",
      description:
        "Protect critical infrastructure and digital identities through advanced threat detection, anomaly monitoring, and real-time fraud prevention.",
      problem_statements: [
        {
          id: 301,
          title: "AI-Powered Phishing Detection for Indian Enterprises",
          description:
            "An AI/ML-based cybersecurity system capable of detecting phishing emails and domain spoofing attempts in real time.",
          requirements: [
            "Phishing classification model",
            "Multilingual analysis module (English and Regional)",
            "URL/domain risk detection module",
            "Real-time or simulated email scanning",
            "Risk scoring and alert system",
          ],
          outcomes: [
            "Functional phishing detection prototype",
            "Demonstration of email and URL risk detection",
            "Dashboard displaying alerts and risk scores",
            "Metrics: accuracy, precision, and false positive rate",
          ],
        },
        {
          id: 302,
          title: "Deepfake Detection for Digital Identity Verification",
          description:
            "Develop a real-time deepfake detection system capable of identifying manipulated video and audio content during identity verification processes.",
          requirements: [
            "Deepfake detection model (custom or integrated)",
            "Basic audio forgery detection module",
            "Liveness or anti-spoofing demonstration",
            "Risk scoring mechanism",
            "Integration-ready architecture design",
          ],
          outcomes: [
            "Prototype identifying synthetic media artifacts",
            "Demonstration under controlled test scenarios",
            "Dashboard displaying results and risk scores",
            "Robustness and explainability",
          ],
        },
        {
          id: 303,
          title: "IoT Security Risk Monitoring for Smart Campuses",
          description:
            "A comprehensive IoT security monitoring system identifying device-level vulnerabilities and abnormal network behavior.",
          requirements: [
            "IoT device discovery or simulation module",
            "Network anomaly detection engine (sample traffic data)",
            "Threat alert generation system",
            "Risk scoring and prioritization mechanism",
            "Centralized monitoring dashboard",
          ],
          outcomes: [
            "Functional IoT security monitoring prototype",
            "Demonstration of anomaly detection using sample data",
            "Dashboard displaying device health and alerts",
            "Detection rate and response time",
          ],
        },
        {
          id: 304,
          title: "Real-Time Fraud Detection in UPI Transactions",
          description:
            "A real-time predictive fraud detection engine for UPI transactions leveraging anomaly detection and behavioral analytics.",
          requirements: [
            "Fraud detection model",
            "Behavioral profiling and anomaly detection engine",
            "Real-time or simulated transaction monitoring",
            "Risk scoring and alert mechanism",
            "Fraud analytics dashboard",
          ],
          outcomes: [
            "Functional fraud detection prototype",
            "Demonstration of anomaly detection in patterns",
            "Dashboard displaying alerts and transaction trends",
            "Accuracy and false positive rate",
          ],
        },
        {
          id: 305,
          title: "Cyber Threat Intelligence Aggregation Platform",
          description:
            "Design and develop a centralized platform that aggregates open-source cyber threat feeds and transforms them into actionable insights.",
          requirements: [
            "Aggregation of public threat intelligence feeds",
            "Threat data normalization and correlation module",
            "AI-based threat prioritization engine",
            "IOC extraction and enrichment mechanism",
            "Interactive dashboard for threat visualization",
          ],
          outcomes: [
            "Functional CTI prototype integrating multiple sources",
            "Dashboard displaying categorized threats and trends",
            "Demonstration of prioritized risk insights",
            "Coverage and prioritization logic clarity",
          ],
        },
      ],
    },
  ],
  schedule: [
    { time: "09:00 AM", event: "Opening Ceremony" },
    { time: "10:30 AM", event: "Problem Statement Briefing" },
    { time: "11:00 AM", event: "Hackathon Begins" },
    { time: "01:30 PM", event: "Lunch Break" },
    { time: "06:00 PM", event: "Mentor Review - Round 1" },
    { time: "09:00 PM", event: "Dinner" },
    { time: "12:00 AM", event: "Midnight Coding Challenge", isDayTwo: true },
    { time: "08:00 AM", event: "Breakfast" },
    { time: "11:00 AM", event: "Final Submissions & Code Freeze" },
    { time: "12:30 PM", event: "Judging & Presentations" },
    { time: "03:00 PM", event: "Closing Ceremony & Prize Distribution" },
  ],
  sponsors: {
    alliances: {
      official_sponsor: {
        name: "QUALMINDS",
        tier: "Official Sponsor",
        website: "https://qualminds.com",
        logo_url: "/sponsors/Qualminds.png",
      },
      innovation_partner: {
        name: "I&EC",
        tier: "Innovation Partner",
        website: "https://iecindia.org.in/",
        logo_url: "/sponsors/iec.png",
      },
    },
  },
  faqs: [
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to undergraduate and postgraduate students from all engineering backgrounds.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in Designathon 2026 is free of cost.",
    },
    {
      question: "Can we form cross-college teams?",
      answer:
        "Yes, you are encouraged to form diverse teams with members from different colleges.",
    },
    {
      question: "What is the 1st round submission?",
      answer:
        "The 1st round submission is an initial ideation and feasibility report due by March 15th at 23:59:59 PM.",
    },
  ],
  contact: {
    email: "csbsdesignathon@vnrvjiet.in",
    socials: {
      instagram: "https://instagram.com/vnr_designathon",
      linkedin: "https://linkedin.com/in/designathon-vnrvjiet",
    },
    registration_link:
      "https://unstop.com/hackathons/vnr-design-a-thon-2026-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telangan-1648514",
  },
};
