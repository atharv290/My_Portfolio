export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  timeframe: string;
  role: string;
  teamContext?: string;
  technologies: string[];
  problem: string;
  contributions: string[];
  nodes: { title: string; detail: string }[];
  results: { value: string; label: string }[];
  demo?: string;
}
export const profile = {
  name: "Atharva Joshi",
  email: "atharvj938@gmail.com",
  github: "https://github.com/atharv290",
  linkedin: "https://linkedin.com/in/atharva-joshi-34292a281",
  resume: "/Atharva-Joshi-Resume.pdf",
};
export const projects: Project[] = [
  {
    slug: "segmenta",
    title: "SEGMENTA",
    subtitle: "LCD Design Automation",
    category: "BACKEND ENGINEERING",
    summary:
      "Building the API and database foundation for an LCD design automation platform.",
    timeframe: "May 2026 – Present",
    role: "Software Engineering Intern",
    teamContext: "5-member development team at Singularis Technology Solutions",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Swagger / OpenAPI"],
    problem:
      "An LCD design automation platform needs backend services, structured data, and clear contracts that connect the frontend to the backend.",
    contributions: [
      "Developed 15+ RESTful APIs with Node.js, Express.js, and PostgreSQL using MVC architecture.",
      "Designed PostgreSQL schemas and documented REST API contracts with Swagger/OpenAPI.",
      "Collaborated on API design, database optimization, code reviews, and backend integration.",
    ],
    nodes: [
      {
        title: "Frontend",
        detail:
          "Frontend–backend integration supported by documented REST API contracts. Frontend ownership is not attributed here.",
      },
      {
        title: "REST APIs",
        detail:
          "My contribution: 15+ RESTful APIs built with Node.js and Express.js using MVC architecture.",
      },
      {
        title: "PostgreSQL",
        detail:
          "My contribution: PostgreSQL schema design, with team collaboration on database optimization.",
      },
      {
        title: "API contracts",
        detail:
          "My contribution: Swagger/OpenAPI documentation to support reliable frontend–backend integration.",
      },
    ],
    results: [
      { value: "15+", label: "RESTful APIs developed" },
      { value: "5", label: "members in the development team" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Interoperability",
    subtitle: "Connecting medical terminology",
    category: "APIs & HEALTHCARE",
    summary:
      "Connecting AYUSH and ICD-11 terminology through FHIR APIs and automated mapping workflows.",
    timeframe: "Jul 2025 – Nov 2025",
    role: "Backend services, mapping workflows & authentication",
    technologies: ["Node.js", "Express.js", "React.js", "OAuth 2.0", "FHIR"],
    problem:
      "AYUSH-to-ICD-11 terminology mapping requires services that process medical records across terminology systems.",
    contributions: [
      "Developed Node.js and Express.js backend services for terminology mapping using FHIR APIs.",
      "Automated mapping with rule-based and API-driven classification workflows.",
      "Implemented OAuth 2.0 authentication and multilingual REST APIs for 500+ terminology records.",
    ],
    nodes: [
      {
        title: "Terminology",
        detail: "AYUSH medical terminology records form the mapping input.",
      },
      {
        title: "Mapping services",
        detail:
          "Rule-based and API-driven classification workflows implemented with Node.js and Express.js.",
      },
      {
        title: "FHIR APIs",
        detail:
          "FHIR API integration supports AYUSH-to-ICD-11 healthcare terminology mapping.",
      },
      {
        title: "OAuth 2.0",
        detail:
          "OAuth 2.0 authentication is implemented alongside multilingual REST APIs.",
      },
    ],
    results: [
      { value: "500+", label: "medical terminology records processed" },
    ],
    demo: "https://ayushbytes.vercel.app/",
  },
  {
    slug: "photoshare",
    title: "PhotoShare",
    subtitle: "AI-driven photography marketplace",
    category: "FULL STACK & MACHINE LEARNING",
    summary:
      "A photography marketplace with data-driven price recommendations and a faster database layer.",
    timeframe: "Jan 2025 – Jun 2025",
    role: "Full-stack development, pricing model & query optimization",
    technologies: ["Flask", "MySQL", "scikit-learn", "JWT"],
    problem:
      "A photography marketplace needs authenticated access, useful pricing recommendations, and responsive data access.",
    contributions: [
      "Built a full-stack marketplace using Flask, MySQL, and JWT authentication, tested with 50+ users.",
      "Implemented dynamic pricing using Linear Regression to generate data-driven price recommendations.",
      "Optimized MySQL queries and REST APIs, reducing average response latency from approximately 400ms to 260ms.",
    ],
    nodes: [
      {
        title: "Marketplace",
        detail: "Full-stack photography marketplace tested with 50+ users.",
      },
      {
        title: "Flask APIs",
        detail:
          "Flask backend with JWT authentication and optimized REST APIs.",
      },
      {
        title: "MySQL",
        detail:
          "Query optimization contributed to a reported reduction in average response latency.",
      },
      {
        title: "Price model",
        detail:
          "Linear Regression with scikit-learn generates price recommendations.",
      },
    ],
    results: [
      { value: "35%", label: "lower average response latency" },
      { value: "50+", label: "users involved in testing" },
    ],
    demo: "https://pdl-v2.onrender.com/",
  },
  {
    slug: "smart-helmet",
    title: "Smart Helmet",
    subtitle: "Connected safety, embedded in hardware",
    category: "IoT & EMBEDDED SYSTEMS",
    summary:
      "Helmet compliance, accident detection, and location-aware emergency SMS alerts built around ESP32.",
    timeframe: "Jan 2026 – May 2026",
    role: "Compliance logic, accident detection & sensor integration",
    technologies: ["ESP32", "IoT", "Embedded C", "GPS", "MQ-3"],
    problem:
      "A connected helmet system needs to link helmet compliance with ignition control and detect events that require an alert.",
    contributions: [
      "Developed ESP32-based helmet compliance logic integrated with vehicle ignition control.",
      "Implemented accident detection with automated emergency SMS alerts and GPS tracking.",
      "Integrated MQ-3 alcohol detection with real-time alert triggering.",
    ],
    nodes: [
      {
        title: "Detection",
        detail:
          "Helmet compliance logic, accident detection, and MQ-3 alcohol detection.",
      },
      {
        title: "ESP32",
        detail:
          "Embedded C logic on ESP32 supports the connected safety system.",
      },
      {
        title: "SMS + GPS",
        detail:
          "Automated emergency SMS alerts and GPS tracking are reported in the resume.",
      },
      {
        title: "Ignition",
        detail:
          "Helmet compliance logic is integrated with vehicle ignition control.",
      },
    ],
    results: [{ value: "<10s", label: "reported emergency SMS alert time" }],
  },
];
export const experience = [
  {
    date: "MAY 2026 — PRESENT",
    title: "Software Engineering Intern",
    company: "Singularis Technology Solutions · SEGMENTA",
    description:
      "15+ RESTful APIs, PostgreSQL schemas, and OpenAPI contracts. Collaborating with a five-member engineering team.",
  },
  {
    date: "JAN — MAR 2026",
    title: "Freelance Full-Stack Developer",
    company: "CodeNova Tech Solutions",
    description:
      "Delivered four production feature releases. Reduced page load time by 25% with code splitting and lazy loading; achieved a 90+ Lighthouse SEO score.",
    link: "https://www.codenovatechsolutions.in/",
  },
  {
    date: "JUN — JUL 2023",
    title: "Backend Development Intern",
    company: "Sumago Infotech",
    description:
      "Developed 15+ REST APIs and backend modules in Core PHP and MySQL. Worked on indexing and API integration in a five-member team.",
  },
];
