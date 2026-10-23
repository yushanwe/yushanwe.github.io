/* ============================================================
   SITE CONTENT
   ------------------------------------------------------------
   Everything on this website is generated from the data below.
   To update the site, edit these objects — no HTML changes needed.
   Anything marked TODO / "Placeholder" is waiting on real content.
   ============================================================ */

const SITE = {
  name: "Yushan Wei",
  role: "Senior Undergraduate Student",
  affiliation: "University of Michigan · Shanghai Jiao Tong University",
  lab: "",
  tagline:
    "I study how machines can understand human intent through natural interaction and translate it into meaningful action.",
  photo: "sophie2.jpg",
  photoAlt: "Portrait of Yushan Wei",
  email: "yushanwe@umich.edu",
  lastUpdated: "October 2026",

  // Order controls both the sidebar nav and the scroll-spy.
  nav: [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "activities", label: "Activities" },
    { id: "beyond", label: "Beyond Research" },
  ],

  links: [
    { id: "cv", label: "CV", href: "YushanWei_CV.pdf", icon: "file" },
    { id: "email", label: "Email", href: "mailto:yushanwe@umich.edu", icon: "mail" },
    { id: "github", label: "GitHub", href: "https://github.com/yushanwe", icon: "github" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/yushan-wei-903500383", icon: "linkedin" },
    { id: "scholar", label: "Scholar", href: "#", icon: "scholar" }, // TODO
  ],

  interests: [
    "Human intent understanding",
    "3D scene authoring",
    "Assistive technologies",
    "Interactive simulation",
    "XR & wearables",
    "Multimodal sensing",
  ],

  about: [
    "I'm Yushan Wei, a senior undergraduate student studying for Computer Science BSE and Math minor at the University of Michigan and Mechanical Engineering BSE at Shanghai Jiao Tong University.",
    "My research interests lie in how machines can understand human intent through natural interactions and translate subtle movements, gestures, or high-level instructions into meaningful actions.",
    "My previous research explores this question through 3D scene authoring, personalized assistive technologies, and interactive simulation. Moving forward, I'm excited to investigate more embodied and immersive forms of interaction, especially through XR, wearables, and multimodal sensing.",
    "I'm applying for PhD programs starting in Fall 2027!",
  ],

  aboutBold: [
    "Computer Science BSE and Math minor at the University of Michigan",
    "Mechanical Engineering BSE at Shanghai Jiao Tong University",
    "PhD programs starting in Fall 2027",
  ],
};

/* ---------------------------------------------------------------
   RESEARCH PROJECTS
   `slug` powers the detail page at project.html?p=<slug>
   Set `detail: false` to hide the "Read more" link for a project.
   --------------------------------------------------------------- */
const PROJECTS = [
  {
    slug: "scenecopilot",
    title: "[Submitted to CHI 2027] SceneCopilot: Human-AI Co-Creation of 3D Scenes by Integrating Editable Zones and Constraints",
    tagline: "Bridging human creativity and AI generation through editable spatial structures.",
    image: "",
    imageAlt: "",
    description: "SceneCopilot is an LLM-assisted 3D scene authoring system that enables users to create and refine complex environments through natural language and direct manipulation. By introducing editable spatial zones and explicit placement constraints, the system gives users greater control over AI-generated scenes while preserving the efficiency of automated generation. I led the development of key components, including reference image retrieval, interactive zone editing, spatial constraint management, and scene layout generation. Through this project, I explored how intermediate representations can bridge high-level user intent and low-level AI execution.",
    role: "First Author · System Design & Full-Stack Development. Led the design and implementation of editable zones, reference retrieval, spatial constraints, and scene editing interactions. Contributed to the system architecture, integration, and evaluation.",
    tags: ["Human-AI Co-Creation", "3D Authoring", "Spatial Computing", "LLMs"],
    year: "",
    links: [],
    detail: false,
  },
  {
    slug: "atmaker",
    title: "[Submitted to CHI 2027] ATMaker: Conversationally Authoring Visual Assistive Tools",
    tagline: "Empowering blind and low-vision users to create personalized visual assistance through conversational AI.",
    image: "",
    imageAlt: "",
    description: "ATMaker is a conversational platform that enables blind and low-vision users to create bespoke camera-based assistive tools using AI coding agents. Users can describe their needs in natural language and video demonstrations, refine their ideas through conversations with a brainstorming agent, and deploy tools that provide visual assistance through smartphones and smartglasses. I developed model routing and execution strategies that enable generated tools to balance latency, accuracy, and task requirements. I also contributed to the system architecture and smartglasses integration, exploring how agentic systems can translate user-defined goals into functional, personalized applications.",
    role: "Second Author · AI System Design & Development. Developed task-dependent model routing and execution strategies, refactored code-agent integration, and implemented Ray-Ban Meta smartglasses support. Contributed to system integration and iterative prototyping.",
    tags: ["Human-AI Interaction", "Accessibility", "Agentic AI", "Multimodal AI"],
    year: "",
    links: [],
    detail: false,
  },
  {
    slug: "interactive-driving-simulator",
    title: "Interactive Driving Simulator for Visual Demand Research",
    tagline: "Building controllable virtual driving environments to study human attention and visual demand.",
    image: "SIM.png",
    imageAlt: "Interactive driving simulator built with Unreal Engine.",
    description: "This project develops an interactive driving simulator for studying drivers' visual attention and behavior under controlled traffic conditions. Built with Unreal Engine, the simulator combines physical driving controls, virtual road environments, and programmable AI traffic to support experiments on visual demand. As the Traffic Subteam Lead, I developed traffic behavior control and vehicle navigation mechanisms to create configurable driving scenarios. I also contributed to rapid scene prototyping to accelerate experimental data collection. This experience introduced me to human-centered simulation, behavioral experimentation, and interactive virtual environments.",
    role: "Traffic Subteam Lead · Unreal Engine Development. Led AI traffic development, implemented vehicle behavior and navigation logic, and contributed to rapid scenario generation and experimental prototyping.",
    tags: ["Simulation", "Human Factors", "Unreal Engine", "Autonomous Agents"],
    year: "",
    links: [],
    detail: false,
  },
];

/* ---------------------------------------------------------------
   PUBLICATIONS
   status: "published" | "under-review" | "in-preparation"
   --------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    title: "SceneCopilot: Human-AI Co-Creation of 3D Scenes by Integrating Editable Zones and Constraints",
    authors: ["Yushan Wei", "et al."],
    venue: "ACM CHI",
    year: "2027",
    status: "under-review",
    summary: "An LLM-assisted authoring system that combines natural-language generation with editable zones and spatial constraints for controllable 3D scene creation.",
    links: [],
  },
  {
    title: "ATMaker: Conversationally Authoring Visual Assistive Tools",
    authors: [],
    venue: "ACM CHI",
    year: "2027",
    status: "under-review",
    summary: "A conversational platform that enables blind and low-vision users to author personalized, camera-based assistive tools with agentic and multimodal AI.",
    links: [],
  },
];

/* ---------------------------------------------------------------
   EXPERIENCE  —  category: "Research" | "Teaching" | "Industry"
   --------------------------------------------------------------- */
const EXPERIENCE = [
  {
    role: "Graduate Research Assistant",
    org: "Placeholder Lab, Placeholder University",
    location: "City, Country",
    date: "2025 — Present",
    category: "Research",
    bullets: [
      "Placeholder — lead the ProgramAT line of work on end-user authoring of assistive technology.",
      "Placeholder — mentor two undergraduate researchers on study design and analysis.",
    ],
  },
  {
    role: "Research Intern",
    org: "Placeholder Research Group",
    location: "City, Country",
    date: "Summer 2025",
    category: "Industry",
    bullets: [
      "Placeholder — prototyped an agentic assistant for spatial content creation.",
    ],
  },
  {
    role: "Teaching Assistant, Introduction to HCI",
    org: "Placeholder University",
    location: "City, Country",
    date: "Fall 2024",
    category: "Teaching",
    bullets: [
      "Placeholder — led weekly design studios for ~40 students and advised final projects.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Placeholder Lab",
    location: "City, Country",
    date: "2023 — 2024",
    category: "Research",
    bullets: ["Placeholder — built wearable haptic prototypes and ran pilot studies."],
  },
];

/* ---------------------------------------------------------------
   SELECTED ACTIVITIES
   --------------------------------------------------------------- */
const ACTIVITIES = [
  {
    category: "Service",
    title: "Student Volunteer, ACM CHI",
    date: "2025",
    note: "Placeholder — supported session logistics and accessibility services on site.",
  },
  {
    category: "Community",
    title: "Placeholder Student Organization",
    date: "2023 — Present",
    note: "Placeholder — organize a reading group and a yearly student research showcase.",
  },
  {
    category: "Debate",
    title: "University Debate Society",
    date: "2022 — 2024",
    note: "Placeholder — competed in British Parliamentary format; coached first-year speakers.",
  },
  {
    category: "Rowing",
    title: "Varsity Rowing Team",
    date: "2022 — 2024",
    note: "Placeholder — trained with the women's eight; learned most of what I know about showing up.",
  },
  {
    category: "Mentoring",
    title: "Undergraduate Research Mentor",
    date: "2025 — Present",
    note: "Placeholder — advise students entering HCI research for the first time.",
  },
  {
    category: "Reviewing",
    title: "Reviewer, Placeholder Venue",
    date: "2025",
    note: "Placeholder — reviewed submissions on accessibility and interaction techniques.",
  },
];

/* ---------------------------------------------------------------
   BEYOND RESEARCH
   --------------------------------------------------------------- */
const BEYOND = [
  {
    icon: "pen",
    title: "Fiction writing",
    body: "Placeholder — I write speculative short fiction, mostly about people living with technology that almost works.",
  },
  {
    icon: "music",
    title: "Guitar",
    body: "Placeholder — fingerstyle, badly and happily. Currently working through something with too many barre chords.",
  },
  {
    icon: "game",
    title: "Games & interactive storytelling",
    body: "Placeholder — I'm drawn to games that use their mechanics to say something the story couldn't.",
  },
  {
    icon: "book",
    title: "Reading",
    body: "Placeholder — a rotating stack of science fiction, design writing, and whatever a friend pushed on me.",
  },
  {
    icon: "map",
    title: "Cities",
    body: "Placeholder — I like walking unfamiliar neighborhoods and noticing how people improvise around infrastructure.",
  },
  {
    icon: "sparkle",
    title: "Imagined worlds",
    body: "Placeholder — speculative tech and XR: what an interface would feel like if the constraints were different.",
  },
];
