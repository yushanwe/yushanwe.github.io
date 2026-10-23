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
  email: "weiyushansophie@gmail.com",
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
    { id: "cv", label: "CV", href: "assets/files/cv.pdf", icon: "file" }, // TODO: add cv.pdf
    { id: "email", label: "Email", href: "mailto:weiyushansophie@gmail.com", icon: "mail" },
    { id: "github", label: "GitHub", href: "https://github.com/yushanwe", icon: "github" }, // TODO: confirm handle
    { id: "linkedin", label: "LinkedIn", href: "#", icon: "linkedin" }, // TODO
    { id: "scholar", label: "Scholar", href: "#", icon: "scholar" }, // TODO
  ],

  interests: [
    "Human intent understanding",
    "Natural interaction",
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
    slug: "placeholder-project-one",
    title: "Placeholder Research Project One",
    tagline: "Placeholder project tagline.",
    image: "assets/img/project-programat.svg",
    imageAlt: "Placeholder project image.",
    description: "Placeholder project description. Additional project information will be added here.",
    role: "Placeholder role description.",
    tags: ["Placeholder Tag", "Placeholder Tag", "Placeholder Tag"],
    year: "20XX",
    links: [{ label: "Placeholder Link", href: "#" }],
    detail: true,
    overview: "Placeholder project overview. Additional information will be added here.",
    sections: [
      { heading: "Placeholder Heading", body: "Placeholder section content." },
      { heading: "Placeholder Heading", body: "Placeholder section content." },
      { heading: "Placeholder Heading", body: "Placeholder section content." },
    ],
    gallery: [
      { src: "assets/img/project-programat.svg", alt: "Placeholder project image." },
    ],
  },
  {
    slug: "placeholder-project-two",
    title: "Placeholder Research Project Two",
    tagline: "Placeholder project tagline.",
    image: "assets/img/project-3dcopilot.svg",
    imageAlt: "Placeholder project image.",
    description: "Placeholder project description. Additional project information will be added here.",
    role: "Placeholder role description.",
    tags: ["Placeholder Tag", "Placeholder Tag", "Placeholder Tag"],
    year: "20XX",
    links: [{ label: "Placeholder Link", href: "#" }],
    detail: true,
    overview: "Placeholder project overview. Additional information will be added here.",
    sections: [
      { heading: "Placeholder Heading", body: "Placeholder section content." },
      { heading: "Placeholder Heading", body: "Placeholder section content." },
      { heading: "Placeholder Heading", body: "Placeholder section content." },
    ],
    gallery: [],
  },
  {
    slug: "placeholder-project-three",
    title: "Placeholder Research Project Three",
    tagline: "Placeholder project tagline.",
    image: "assets/img/project-haptics.svg",
    imageAlt: "Placeholder project image.",
    description: "Placeholder project description. Additional project information will be added here.",
    role: "Placeholder role description.",
    tags: ["Placeholder Tag", "Placeholder Tag", "Placeholder Tag"],
    year: "20XX",
    links: [{ label: "Placeholder Link", href: "#" }],
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
    year: "20XX",
    status: "under-review",
    links: [{ label: "Placeholder Link", href: "#" }],
  },
  {
    title: "Placeholder Publication Title Two",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: "20XX",
    status: "in-preparation",
    links: [{ label: "Placeholder Link", href: "#" }],
  },
  {
    title: "Placeholder Publication Title Three",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: "20XX",
    status: "published",
    links: [{ label: "Placeholder Link", href: "#" }],
  },
  {
    title: "Placeholder Publication Title Four",
    authors: ["Author Placeholder", "Co-Author Placeholder"],
    venue: "Placeholder Conference or Journal",
    year: "20XX",
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
