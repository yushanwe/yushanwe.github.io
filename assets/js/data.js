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
  affiliation: "University of Michigan and Shanghai Jiao Tong University",
  lab: "",
  tagline:
    "I study how machines can understand human intent through natural interaction and translate it into meaningful action.",
  photo: "figures/sophie2.jpg",
  photoAlt: "Portrait of Yushan Wei",
  email: "yushanwe@umich.edu",
  lastUpdated: "October 2026",

  // Order controls both the sidebar nav and the scroll-spy.
  nav: [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "featured-projects", label: "Featured Projects" },
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
    image: "figures/ecsr_workflow.png",
    imageAlt: "SceneCopilot workflow from user input through zone extraction, validation, and scene population.",
    description: "SceneCopilot is an LLM-assisted 3D scene authoring system that enables users to create and refine complex environments through natural language and direct manipulation. By introducing editable spatial zones and explicit placement constraints, the system gives users greater control over AI-generated scenes while preserving the efficiency of automated generation. I led the development of key components, including reference image retrieval, interactive zone editing, spatial constraint management, and scene layout generation. Through this project, I explored how intermediate representations can bridge high-level user intent and low-level AI execution.",
    role: "First Author: System Design & Full-Stack Development. Led the design and implementation of editable zones, reference retrieval, spatial constraints, and scene editing interactions. Contributed to the system architecture, integration, and evaluation.",
    tags: ["Human-AI Co-Creation", "3D Authoring", "Spatial Computing", "LLMs"],
    year: "",
    links: [],
    detail: false,
  },
  {
    slug: "atmaker",
    title: "[Submitted to CHI 2027] ATMaker: Conversationally Authoring Visual Assistive Tools",
    tagline: "Empowering blind and low-vision users to create personalized visual assistance through conversational AI.",
    image: "figures/sure_cover.png",
    imageAlt: "ATMaker conversational authoring workflow shown across mobile tool creation and use interfaces.",
    description: "ATMaker is a conversational platform that enables blind and low-vision users to create bespoke camera-based assistive tools using AI coding agents. Users can describe their needs in natural language and video demonstrations, refine their ideas through conversations with a brainstorming agent, and deploy tools that provide visual assistance through smartphones and smartglasses. I developed model routing and execution strategies that enable generated tools to balance latency, accuracy, and task requirements. I also contributed to the system architecture and smartglasses integration, exploring how agentic systems can translate user-defined goals into functional, personalized applications.",
    role: "Second Author: AI System Design & Development. Developed task-dependent model routing and execution strategies, refactored code-agent integration, and implemented Ray-Ban Meta smartglasses support. Contributed to system integration and iterative prototyping.",
    note: "I’ll be presenting ProgramAT++, a project that preceded ATMaker, at UIST 2026. Feel free to meet me there!",
    tags: ["Human-AI Interaction", "Accessibility", "Agentic AI", "Multimodal AI"],
    year: "",
    links: [],
    detail: false,
  },
  {
    slug: "interactive-driving-simulator",
    title: "Interactive Driving Simulator for Visual Demand Research",
    tagline: "Building controllable virtual driving environments to study human attention and visual demand.",
    image: "figures/mdp_cover.png",
    imageAlt: "Interactive driving simulator running in Unreal Engine from the driver's perspective.",
    youtubeId: "TkuUZyAIt4g",
    videoUrl: "https://youtu.be/TkuUZyAIt4g?si=hYYQrBg8KkCK7ufR",
    videoLabel: "Play the interactive driving simulator demonstration",
    description: "This project develops an interactive driving simulator for studying drivers' visual attention and behavior under controlled traffic conditions. Built with Unreal Engine, the simulator combines physical driving controls, virtual road environments, and programmable AI traffic to support experiments on visual demand. As the Traffic Subteam Lead, I developed traffic behavior control and vehicle navigation mechanisms to create configurable driving scenarios. I also contributed to rapid scene prototyping to accelerate experimental data collection. This experience introduced me to human-centered simulation, behavioral experimentation, and interactive virtual environments.",
    role: "Traffic Subteam Lead: Unreal Engine Development. Led AI traffic development, implemented vehicle behavior and navigation logic, and contributed to rapid scenario generation and experimental prototyping.",
    tags: ["Simulation", "Human Factors", "Unreal Engine", "Autonomous Agents"],
    year: "",
    links: [],
    detail: false,
  },
];

/* ---------------------------------------------------------------
   FEATURED ENGINEERING AND SOFTWARE PROJECTS
   --------------------------------------------------------------- */
const FEATURED_PROJECTS = [
  {
    title: "Millennium Falcon — Autonomous Bridge-Crossing Vehicle",
    tagline: "An autonomous vehicle designed to traverse narrow bridges using passive mechanical self-correction.",
    context: "ME2500J, Shanghai Jiao Tong University | Team of 5",
    highlights: [
      "Designed a rear-wheel-driven vehicle with suspended guide rods that passively correct lateral deviations without active steering.",
      "Integrated Arduino-based motor control, color sensing, and a lightweight chassis with 3D-printed components.",
      "Built and tested a prototype that crossed 40 mm and 60 mm bridge sections in a combined 19.89 seconds, within the 120-second requirement.",
    ],
    role: "Contributed to mechanical design, CAD modeling, and mechatronics, including the vehicle structure and passive guiding mechanism, as well as component selection, analysis, assembly, and iterative testing.",
    tags: ["Mechanical Design", "CAD", "Mechatronics", "Prototyping"],
    youtubeId: "p2K4Rs6bQEQ",
    videoUrl: "https://youtube.com/shorts/p2K4Rs6bQEQ?feature=share",
    poster: "figures/me250-poster.jpg",
    videoLabel: "Play the Millennium Falcon bridge-crossing demonstration",
    links: [
      { label: "Presentation", href: "documents/ME250_Group10_Final_Pre.pdf" },
    ],
  },
  {
    title: "Adaptive Climbing Robot — Vertical Infrastructure Inspection",
    tagline: "An adaptable climbing robot designed for automated inspection of vertical cylindrical structures.",
    context: "ME3500J, Shanghai Jiao Tong University | Team of 4",
    highlights: [
      "Developed a climbing concept using motor-driven belts and adjustable lead-screw mechanisms for vertical cylindrical surfaces.",
      "Designed a fail-safe locking concept using self-locking motors to maintain position during power loss.",
      "Proposed sensor-based diameter adjustment and height monitoring for cylindrical structures of different sizes.",
    ],
    role: "Collaborated on mechanical concept development, CAD modeling, climbing and locking mechanisms, design iterations, prototyping, and engineering analysis of structural stability and motor requirements.",
    tags: ["Robotics", "Mechanical Design", "Mechatronics", "CAD"],
    youtubeId: "EqbsPTvT3m8",
    videoUrl: "https://youtu.be/EqbsPTvT3m8",
    poster: "figures/me350-poster.jpg",
    videoLabel: "Play the adaptive climbing robot design demonstration",
    links: [
      { label: "Presentation", href: "documents/ME350 Design Review-1.pdf" },
    ],
  },
  {
    title: "EnSight — AI-Powered Physical Interface Recognition",
    tagline: "An intent-aware visual assistant that helps blind and low-vision users understand and operate unfamiliar physical interfaces.",
    context: "SURE Starter Project | Individual Project",
    highlights: [
      "Built a mobile-first application combining camera recognition, speech interaction, and multimodal AI to identify physical controls.",
      "Designed step-by-step guidance, spatial descriptions, pointing-based confirmation, and personalized control labels.",
      "Implemented customizable response styles and accessibility features, with an average response latency of 8.7 seconds across 15 evaluation trials.",
    ],
    role: "Sole developer responsible for system design, full-stack development, and evaluation.",
    tags: ["Human-AI Interaction", "Computer Vision", "Accessibility", "Multimodal AI"],
    youtubeId: "fqcEnrsVEDg",
    videoUrl: "https://youtu.be/fqcEnrsVEDg",
    poster: "figures/ensight-video-poster.jpg",
    videoLabel: "Play the EnSight application demonstration",
    links: [
      { label: "GitHub", href: "https://github.com/yushanwe/ensight_sure" },
    ],
  },
];

// Reserved for future project entries; these are intentionally not rendered yet.
// UIST: https://youtu.be/KacGFCW8_HI
// MDP: https://youtu.be/TkuUZyAIt4g?si=hYYQrBg8KkCK7ufR

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
    image: "figures/sure_poster.jpg",
    imageAlt: "Yushan Wei presenting her undergraduate research poster at the University of Michigan SURE symposium.",
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
    image: "figures/445ia.jpg",
    imageAlt: "Yushan Wei teaching at a classroom whiteboard.",
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
    image: "figures/web_dev.jpg",
    imageAlt: "Collaborative web interface design materials on a desk.",
    bullets: ["Developed JavaScript-based features for the company's web portal and proposed and implemented three structural improvements."],
  },
];

/* ---------------------------------------------------------------
   SELECTED ACTIVITIES
   `images`: one photo, or two for a stacked collage (2nd is the inset).
   `focus`: CSS object-position for the cropped main photo.
   `short`: label used in the activity donut chart.
   --------------------------------------------------------------- */
const ACTIVITIES = [
  {
    category: "Service",
    title: "Volunteer Teacher, Rural Education Program in Yunnan",
    short: "Volunteer Teaching",
    date: "Dec 2023 - Jan 2024",
    note: "Taught at a rural primary school in Yunnan, designing creative, hands-on lessons for the children.",
    images: ["figures/volunteer_teaching.jpg"],
    imageAlt: "Yushan Wei teaching a class of primary school students in Yunnan.",
    focus: "50% 30%",
  },
  {
    category: "Organization",
    title: "Communications Head of Student Science, Technology, and Innovation Association",
    short: "SSTIA",
    date: "Apr 2024 - Aug 2025",
    note: "Managed official blog and media channels to connect undergraduates with research opportunities.",
    images: ["figures/SSTIA1.jpg", "figures/SSTIA2.jpg"],
    imageAlt: "Yushan Wei speaking at an SSTIA event, and her SolidWorks workshop teaching-assistant badge.",
    focus: "50% 30%",
  },
  {
    category: "Organization",
    title: "Leader of the College Debate Team",
    short: "Debate Team",
    date: "Sep 2024 - Aug 2025",
    note: "Led the college debate team in university-wide competitions, served as a tournament judge, and conducted regular training sessions, including mock debates and debate analysis.",
    images: ["figures/debate1.jpg", "figures/debate2.jpg"],
    imageAlt: "Yushan Wei speaking in a debate round, and a university debate tournament in session.",
    focus: "70% 50%",
  },
  {
    category: "Organization",
    title: "Member of the University Rowing Team",
    short: "Rowing Team",
    date: "Sep 2024 - Apr 2025",
    note: "Trained with the women's four weekly.",
    images: ["figures/rowing.jpg"],
    imageAlt: "Yushan Wei rowing on the river during team training.",
    focus: "50% 30%",
  },
  {
    category: "Organization",
    title: "Activity Lead of the College Psychology Association",
    short: "Psychology Assoc.",
    date: "Dec 2024 - Apr 2025",
    note: "Designed and organized events to improve students' mental health and learning of psychology.",
    images: ["figures/psychology.jpg"],
    imageAlt: "Students at a cozy, candle-lit psychology association event.",
  },
  {
    category: "Organization",
    title: "Member of the University Art Center",
    short: "Art Center",
    date: "Dec 2023 - Apr 2024",
    note: "Hosted the University Singer Competition on stage and worked as its Stage Manager behind the scenes.",
    images: ["figures/hosting.jpg", "figures/stage_manager.jpg"],
    imageAlt: "Yushan Wei hosting the University Singer Competition on stage, and posing by the competition's poster wall.",
    focus: "50% 22%",
  },
];

/* ---------------------------------------------------------------
   BEYOND RESEARCH  —  each entry is drawn as a floating photo bubble.
   --------------------------------------------------------------- */
const BEYOND = [
  {
    icon: "sparkle",
    title: "Tarot Reading",
    body: "I can tell your fortune with tarot cards. Come find me for a reading!",
    image: "figures/tarot.jpg",
    imageAlt: "Yushan Wei smiling while giving a tarot reading.",
    focus: "65% 50%",
  },
  {
    icon: "music",
    title: "Guitar",
    body: "I play piano, harmonica, and guitar (not very well orz).",
    image: "figures/guitar.jpg",
    imageAlt: "Yushan Wei playing an acoustic guitar.",
    focus: "30% 50%",
  },
  {
    icon: "game",
    title: "Board Games",
    body: "I enjoy playing a variety of board games, especially chess, poker, and Avalon.",
    image: "figures/board_games.jpg",
    imageAlt: "A strategy board game in progress.",
  },
  {
    icon: "activity",
    title: "Badminton",
    body: "I play badminton twice a week.",
    image: "figures/badminton.jpg",
    imageAlt: "Yushan Wei and a friend on the badminton court.",
    focus: "35% 40%",
  },
];
