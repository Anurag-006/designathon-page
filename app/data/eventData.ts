// data/eventData.ts

export const hackathonData = {
  event: {
    name: "DESIGNATHON",
    tagline: "Where Innovation Meets Design",
    host_institution:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)",
    description:
      "A 24-hour design-focused hackathon bringing together students to solve real-world problems through innovation, collaboration, and technology.",
    start_date: "2027-02-13T09:00:00",
    end_date: "2027-02-14T09:00:00",
    duration_hours: 24,
    prize_pool: "1,00,000",
    location: "VNR VJIET Campus",
    registration: {
      platform: "Unstop",
      registration_link: "https://unstop.com/[your-new-link-here]",
      team_size_min: 2,
      team_size_max: 4,
      registration_deadline: "2027-02-08T23:59:00",
    },
  },
  tracks: [
    {
      id: 1,
      title: "Cyber Security & Digital Inclusion",
      description:
        "Design solutions addressing digital security challenges while promoting inclusive and accessible technology.",
      problem_statements: [
        {
          id: 101,
          title: "Secure Comm Links",
          description:
            "Build a lightweight secure messaging platform for low-connectivity environments.",
        },
        {
          id: 102,
          title: "AI Phishing Detection",
          description:
            "Develop a browser-based AI tool to detect phishing websites in real time.",
        },
        {
          id: 103,
          title: "Identity Vault",
          description:
            "Create a decentralized identity management system for vulnerable users.",
        },
        {
          id: 104,
          title: "Accessibility Overlay",
          description:
            "Design a universal UI wrapper that adjusts site accessibility dynamically.",
        },
        {
          id: 105,
          title: "Threat Intel Scraper",
          description:
            "Build a tool that aggregates local cyber threat data into a unified dashboard.",
        },
      ],
    },
    {
      id: 2,
      title: "Industry 5.0 & Sustainability",
      description:
        "Develop intelligent and sustainable systems integrating IoT, AI, and green technologies.",
      problem_statements: [
        {
          id: 201,
          title: "Smart Energy Grid",
          description:
            "Create a real-time dashboard for monitoring industrial energy consumption.",
        },
        {
          id: 202,
          title: "Waste Automata",
          description:
            "Design a computer vision system to classify manufacturing waste.",
        },
        {
          id: 203,
          title: "Supply Chain Tracker",
          description:
            "Implement a transparent ledger for tracking the carbon footprint of logistics.",
        },
        {
          id: 204,
          title: "Predictive Maintenance",
          description:
            "Use sensor data to predict machinery failure before it occurs.",
        },
        {
          id: 205,
          title: "Eco-Packaging Simulator",
          description:
            "Develop software to calculate the environmental impact of various packaging.",
        },
      ],
    },
    {
      id: 3,
      title: "Open Innovation",
      description:
        "Build innovative solutions across domains using emerging technologies and cross-disciplinary approaches.",
      problem_statements: [
        {
          id: 301,
          title: "Campus AI Assistant",
          description:
            "Develop an AI assistant to help students navigate academic services.",
        },
        {
          id: 302,
          title: "Web3 Ticketing",
          description:
            "Create a blockchain-based event ticketing system to eliminate scalping.",
        },
        {
          id: 303,
          title: "Health Telemetry App",
          description:
            "Design a low-latency app for transmitting remote patient vitals.",
        },
        {
          id: 304,
          title: "AR Navigation",
          description:
            "Build an augmented reality indoor navigation tool for large buildings.",
        },
        {
          id: 305,
          title: "Wildcard Project",
          description:
            "Identify a unique local problem and solve it using open-source hardware.",
        },
      ],
    },
  ],
  schedule: [
    { time: "09:00", event: "Opening Ceremony" },
    { time: "10:00", event: "Problem Statement Briefing" },
    { time: "11:00", event: "Hackathon Begins" },
    { time: "21:00", event: "Midnight Checkpoint" },
    { time: "09:00 (Next Day)", event: "Final Submissions" },
    { time: "11:00", event: "Judging & Evaluation" },
    { time: "13:00", event: "Prize Distribution & Closing Ceremony" },
  ],
  sponsors: [
    {
      name: "[Title Sponsor Name]",
      tier: "Title Sponsor",
      website: "https://example.com",
      logo_url: "/assets/sponsors/title-sponsor-logo.png",
    },
  ],
  faqs: [
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to undergraduate and postgraduate students.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is free.",
    },
    {
      question: "Can we form cross-college teams?",
      answer: "Yes, cross-college teams are allowed.",
    },
    {
      question: "What should we bring?",
      answer:
        "Participants must bring their own laptops, chargers, and required hardware.",
    },
  ],
  contact: {
    email: "designathon@vnrvjiet.in",
    phone: "+91-XXXXXXXXXX",
    socials: {
      instagram: "https://instagram.com/designathon",
      linkedin: "https://linkedin.com/company/designathon",
    },
  },
};
