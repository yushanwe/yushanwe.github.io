/* ============================================================
   SITE CONTENT
   ------------------------------------------------------------
   Everything on this website is generated from the data below.
   To update the site, edit these objects — no HTML changes needed.
   Anything marked TODO / "Placeholder" is waiting on real content.
   ============================================================ */

const SITE = {
  name: "Yushan Wei",
  role: "Ph.D. Student, Human–Computer Interaction", // TODO: confirm
  affiliation: "Placeholder University", // TODO
  lab: "Placeholder Lab", // TODO
  tagline:
    "I build intelligent interactive systems that understand what people are trying to do — and make technology reachable for more of them.",
  photo: "assets/img/profile.svg", // TODO: replace with a real photo (square, ≥600×600)
  photoAlt: "Portrait of Yushan Wei",
  email: "weiyushansophie@gmail.com",
  lastUpdated: "July 2026",

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
    { id: "cv", label: "CV", href: "assets/files/cv.pdf", icon: "file" }, // TODO: add cv.pdf
    { id: "email", label: "Email", href: "mailto:weiyushansophie@gmail.com", icon: "mail" },
    { id: "github", label: "GitHub", href: "https://github.com/yushanwe", icon: "github" }, // TODO: confirm handle
    { id: "linkedin", label: "LinkedIn", href: "#", icon: "linkedin" }, // TODO
    { id: "scholar", label: "Scholar", href: "#", icon: "scholar" }, // TODO
  ],

  interests: [
    "Intelligent interactive systems",
    "Understanding user intent",
    "Accessibility",
    "Wearable computing",
    "Haptics & XR",
  ],

  about: [
    "I'm a researcher in human–computer interaction working on systems that infer what a person is trying to accomplish and meet them there. My work sits between interaction technique design and applied machine intelligence.",
    "Lately I've been thinking about accessible authoring for assistive technology, agentic systems that collaborate on spatial tasks, and how wearable and haptic devices can carry meaning that screens can't.",
  ],
};

/* ---------------------------------------------------------------
   RESEARCH PROJECTS
   `slug` powers the detail page at project.html?p=<slug>
   Set `detail: false` to hide the "Read more" link for a project.
   --------------------------------------------------------------- */
const PROJECTS = [
  {
    slug: "programat",
    title: "ProgramAT / ProgramAT++",
    tagline: "End-user authoring of assistive technology",
    image: "assets/img/project-programat.svg",
    imageAlt:
      "Placeholder diagram of the ProgramAT authoring interface showing a block editor beside a live device preview",
    description:
      "A toolkit that lets occupational therapists and end users build custom assistive technology behaviors without writing code, pairing a block-based editor with live on-device preview. ProgramAT++ extends the system with LLM-assisted suggestions grounded in the user's own task history.",
    role: "Led system design and implementation; ran the formative study and the 12-participant evaluation.",
    tags: ["Accessibility", "End-user programming", "Toolkits"],
    year: "2025",
    links: [
      { label: "Paper", href: "#" }, // TODO
      { label: "Code", href: "#" },
      { label: "Video", href: "#" },
    ],
    detail: true,
    // Detail-page-only content
    overview:
      "Placeholder overview. Describe the problem framing, why existing assistive technology authoring tools fall short, and what ProgramAT contributes.",
    sections: [
      {
        heading: "Motivation",
        body: "Placeholder. Assistive technology is highly individual, but the tooling to customize it assumes programming expertise. Describe the gap here.",
      },
      {
        heading: "System",
        body: "Placeholder. Walk through the architecture: authoring surface, runtime, device abstraction layer, and the LLM assistance loop added in ProgramAT++.",
      },
      {
        heading: "Findings",
        body: "Placeholder. Summarize the evaluation: who participated, what they built, and what the results say about end-user authoring of AT.",
      },
    ],
    gallery: [
      { src: "assets/img/project-programat.svg", alt: "Placeholder screenshot of the ProgramAT editor" },
    ],
  },
  {
    slug: "3dcopilot",
    title: "3DCopilot",
    tagline: "An agentic collaborator for 3D authoring",
    image: "assets/img/project-3dcopilot.svg",
    imageAlt:
      "Placeholder illustration of a 3D modeling canvas with an agent side panel proposing edits",
    description:
      "An agentic assistant for 3D content creation that reads the state of the scene, proposes concrete edits, and explains its reasoning in terms the modeler already uses. The system focuses on keeping the human in control of intent while offloading mechanical steps.",
    role: "Co-designed the interaction model and built the agent-to-scene grounding layer.",
    tags: ["Agentic systems", "3D authoring", "Intent understanding"],
    year: "2025",
    links: [
      { label: "Project", href: "#" }, // TODO
      { label: "Demo", href: "#" },
    ],
    detail: true,
    overview:
      "Placeholder overview of 3DCopilot: what makes 3D authoring hard to assist, and how grounding an agent in scene state changes the interaction.",
    sections: [
      { heading: "Approach", body: "Placeholder." },
      { heading: "Interaction design", body: "Placeholder." },
      { heading: "Status", body: "Placeholder — currently under review." },
    ],
    gallery: [],
  },
  {
    slug: "wearable-haptics",
    title: "Wearable Haptic Signaling", // TODO: real title
    tagline: "Communicating spatial intent on the skin",
    image: "assets/img/project-haptics.svg",
    imageAlt:
      "Placeholder illustration of a wrist-worn haptic device with directional actuators",
    description:
      "A wrist-worn haptic device and encoding scheme for conveying directional and state information without visual attention, studied in both everyday navigation and XR contexts.",
    role: "Placeholder — describe your contribution.",
    tags: ["Wearables", "Haptics", "XR"],
    year: "2024",
    links: [{ label: "Poster", href: "#" }],
    detail: false,
  },
];

/* ---------------------------------------------------------------
   PUBLICATIONS
   status: "published" | "under-review" | "in-preparation"
   --------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    title: "Placeholder Publication Title One",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: 2026,
    status: "under-review",
    links: [{ label: "Placeholder Link", href: "#" }],
  },
  {
    title: "Placeholder Publication Title Two",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: 2025,
    status: "in-preparation",
    links: [{ label: "Placeholder Link", href: "#" }],
  },
  {
    title: "Placeholder Publication Title Three",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: 2025,
    status: "published",
    links: [{ label: "Placeholder Link", href: "#" }],
  },
  {
    title: "Placeholder Publication Title Four",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: 2024,
    status: "published",
    links: [{ label: "Placeholder Link", href: "#" }],
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
