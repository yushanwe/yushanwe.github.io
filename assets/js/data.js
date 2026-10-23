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
    { id: "experience", label: "Experience" },
    { id: "activities", label: "Activities" },
    { id: "beyond", label: "Beyond Research" },
  ],

  links: [
    { id: "cv", label: "CV", href: "YushanWei_CV.pdf", icon: "file" },
    { id: "email", label: "Email", href: "mailto:yushanwe@umich.edu", icon: "mail" },
    { id: "github", label: "GitHub", href: "https://github.com/yushanwe", icon: "github" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/yushan-wei-903500383", icon: "linkedin" },
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
   EXPERIENCE  —  category: "Research" | "Teaching" | "Industry"
   --------------------------------------------------------------- */
const EXPERIENCE = [
  {
    role: "Undergraduate Research Assistant",
    org: "Human-AI Lab and IDEA Lab, University of Michigan",
    location: "Ann Arbor, MI, USA",
    date: "May 2026 - Sep 2026",
    category: "Research",
    bullets: [
      "Extended an accessible system enabling blind and low-vision users to create bespoke camera-based visual assistive tools through natural language and coding agents.",
      "Designed LLM-guided routing strategies to select vision models and execution policies across visual tasks, balancing response accuracy and latency.",
    ],
  },
  {
    role: "Teaching Assistant, EECS 445: Introduction to Machine Learning",
    org: "University of Michigan",
    location: "Ann Arbor, MI, USA",
    date: "Sep 2026 - Dec 2026",
    category: "Teaching",
    bullets: [
      "Led discussion sessions and held office hours, helping students understand machine learning concepts and solve technical problems.",
    ],
  },
  {
    role: "Marketing Intern",
    org: "Alcatel-Lucent Enterprise",
    location: "Shanghai, China",
    date: "Dec 2023 - Jan 2024",
    category: "Industry",
    bullets: ["Developed JavaScript-based features for the company's web portal and proposed and implemented three structural improvements."],
  },
];

/* ---------------------------------------------------------------
   SELECTED ACTIVITIES
   --------------------------------------------------------------- */
const ACTIVITIES = [
  {
    category: "Service",
    title: "Student Volunteer at ACM CHI",
    date: "Nov 2026",
    note: "Supported session logistics and accessibility services on site.",
  },
  {
    category: "Organization",
    title: "Communications Head of Student Science, Technology, and Innovation Association",
    date: "Apr 2024 - Aug 2025",
    note: "Managed official blog and media channels to connect undergraduates with research opportunities.",
  },
  {
    category: "Organization",
    title: "Leader of the College Debate Team",
    date: "Sep 2024 - Aug 2025",
    note: " Led the college debate team in university-wide competitions, served as a tournament judge, and conducted regular training sessions, including mock debates and debate analysis.",
  },
  {
    category: "Organization",
    title: "Member of the University Rowing Team",
    date: "Sep 2024 - Apr 2025",
    note: "Trained with the women's four weekly.",
  },
  {
    category: "Organization",
    title: "Activity Lead of the College Psychology Association",
    date: "Dec 2024 - Apr 2025",
    note: "Designed and organized events to improve students' mental health and learning of psychology.",
  },
  {
    category: "Organization",
    title: "Member of the University Art Center",
    date: "Dec 2023 - Apr 2024",
    note: "Worked as a Stage Manager in the University Singer Competition.",
  },
];

/* ---------------------------------------------------------------
   BEYOND RESEARCH
   --------------------------------------------------------------- */
const BEYOND = [
  {
    icon: "pen",
    title: "Fiction writing",
    body: "I'm a huge fan of Keigo Higashino and I write short detective stories.",
  },
  {
    icon: "music",
    title: "Guitar",
    body: "I play piano, harmonica, and guitar (not very well orz).",
  },
  {
    icon: "game",
    title: "Board Games",
    body: "I enjoy playing a variety of board games, especially chess, poker, and Avalon.",
  },
  {
    icon: "badminton",
    title: "Badminton",
    body: "I play badminton twice a week.",
  },
];
