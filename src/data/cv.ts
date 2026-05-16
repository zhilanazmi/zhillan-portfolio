export type Experience = {
  company: string;
  role: string;
  type: "internship" | "fulltime" | "freelance" | "organization";
  period: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  stack?: string[];
};

export type Project = {
  title: string;
  blurb: string;
  context: string;
  highlights: string[];
  tags: string[];
  status: "Production" | "Internship" | "Active";
};

export type SkillCategory = {
  name: string;
  icon: "code" | "server" | "database" | "tools" | "ops" | "content";
  items: string[];
};

export const profile = {
  name: "Zhillan Azmi",
  title: "Fullstack Developer",
  role: "Fullstack Developer · Web Developer",
  location: "Bandung, Indonesia",
  email: "zhilannazmi@gmail.com",
  phone: "085159616116",
  website: "https://zhilanazmi.id",
  linkedin: "https://www.linkedin.com/in/zhillan-azmi/",
  github: "https://github.com/zhilanazmi",
  available: true,
  summary:
    "Final-year Informatics student at Institut Teknologi Nasional Bandung with 3+ years of hands-on web development experience. I build user-friendly, responsive web applications using Laravel, JavaScript, and modern stacks — with a side passion for content creation and cybersecurity.",
  longSummary:
    "A final-year student at Institut Teknologi Nasional Bandung. Informatics undergraduate with strong skills in web development and content creation. Active as a Web Developer with over 3 years of experience contributing to user-friendly and responsive web applications. Involved with Plastic Guardian in Bandung, leveraging HTML, CSS, and JavaScript to craft visually appealing designs and optimize landing pages across devices. Experienced in social media content creation with proven success in increasing engagement on Instagram, LinkedIn, and Facebook. Additionally passionate about cybersecurity, including identifying vulnerabilities in applications and websites.",
};

export const stats: { value: string; label: string }[] = [
  { value: "3+", label: "Years building web apps" },
  { value: "6+", label: "Departments centralized" },
  { value: "8+", label: "Roles & internships" },
  { value: "3.63", label: "GPA at ITENAS" },
];

export const experiences: Experience[] = [
  {
    company: "PT. Timah Industri",
    role: "Fullstack Developer — Internship",
    type: "internship",
    period: "Feb 2025 — Jul 2025",
    start: "2025-02",
    end: "2025-07",
    location: "Cilegon, Indonesia",
    bullets: [
      "Implemented a comprehensive SOP Management System, enhancing cross-departmental process standardization.",
      "Built dynamic Organizational Structure Management and department-specific modules (Lab, QC, R&D, Business Dev., Production Planning) with tailored workflows.",
      "Applied role-based User Management & Authentication using Laravel Sanctum for robust data security.",
      "Centralized document management across 6+ departments, reducing information fragmentation and improving operational efficiency.",
      "Engineered an Interactive Flowchart Editor with drag-and-drop interface and real-time collaboration.",
      "Implemented an Embeddable Widget System for seamless integration of business processes into external websites.",
      "Built Multi-Process Support for standardized workflows like Production Planning and Sample Analysis.",
    ],
    stack: ["Laravel", "Laravel Sanctum", "MySQL", "JavaScript", "Tailwind"],
  },
  {
    company: "PT. Alita Praya Mitra",
    role: "Fullstack Developer — Internship",
    type: "internship",
    period: "Sep 2024 — Feb 2025",
    start: "2024-09",
    end: "2025-02",
    location: "Jakarta, Indonesia",
    bullets: [
      "Built Laravel-based logistics management features that streamline shipping and stock transfer processes.",
      "Helped businesses achieve efficiencies in stock and shipping management via a reliable application system.",
      "Focused on backend development and UI integration for ease of access and process efficiency.",
      "Designed, developed, and maintained APIs to support front-end functionalities with high performance and responsiveness.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
  {
    company: "Himpunan Mahasiswa Informatika Bandung",
    role: "Head of Research and Technology Department",
    type: "organization",
    period: "Jan 2025 — Dec 2025",
    start: "2025-01",
    end: "2025-12",
    location: "Bandung, Indonesia",
    bullets: [
      "Lead strategic design and technical implementation to develop academic quality and technological growth via training, education, and performance evaluation of members.",
    ],
  },
  {
    company: "Plastic Guardian",
    role: "Web Developer",
    type: "freelance",
    period: "Sep 2023 — Present",
    start: "2023-09",
    end: "Present",
    location: "Bandung, Indonesia",
    bullets: [
      "Manage landing page to be responsive and optimized across desktops, tablets, and mobile devices.",
      "Provide support and maintenance for existing web applications — troubleshooting and implementing enhancements.",
      "Integrate new features that improve user experience.",
      "Implement attractive and responsive visual designs.",
      "Use Git for version control and collaboration.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    company: "Himpunan Mahasiswa Informatika Bandung",
    role: "Staff of Education and Training",
    type: "organization",
    period: "Jul 2024 — Dec 2024",
    start: "2024-07",
    end: "2024-12",
    location: "Bandung, Indonesia",
    bullets: [
      "Develop and implement programs to improve member soft and hard skills.",
      "Plan education work programs to improve academic performance.",
      "Organize soft skills training related to self-development and personal branding through LinkedIn.",
    ],
  },
  {
    company: "Himpunan Mahasiswa Informatika Bandung",
    role: "Staff of Technology Development",
    type: "organization",
    period: "Aug 2023 — Jun 2024",
    start: "2023-08",
    end: "2024-06",
    location: "Bandung, Indonesia",
    bullets: [
      "Manage and develop the Himpunan Mahasiswa Informatika website.",
      "Integrate new features that improve user experience.",
      "Position HMIF website as a leading information source for technology on campus.",
      "Identify relevant hard-skill needs for informatics students.",
      "Deliver high-quality training to help students develop technical skills for the workforce.",
    ],
  },
  {
    company: "Bump Burger",
    role: "Web Developer",
    type: "freelance",
    period: "Oct 2020 — May 2021",
    start: "2020-10",
    end: "2021-05",
    location: "Bandung, Indonesia",
    bullets: [
      "Manage landing page to be responsive and optimized across desktops, tablets, and mobile devices.",
      "Provide support and maintenance for existing web applications — troubleshooting and implementing updates and enhancements.",
      "Integrate new features that improve user experience.",
      "Develop a web application to make it easier for buyers to find out what products are sold on the website.",
    ],
  },
  {
    company: "When Student Company",
    role: "Web Developer",
    type: "freelance",
    period: "Oct 2019 — Mar 2020",
    start: "2019-10",
    end: "2020-03",
    location: "Bandung, Indonesia",
    bullets: [
      "Manage landing page to be responsive and optimized across desktops, tablets, and mobile devices.",
      "Provide support and maintenance for existing web applications.",
      "Integrate new features that improve user experience.",
      "Develop a web application to introduce When Student Company and showcase products on the website.",
    ],
  },
  {
    company: "When Student Company",
    role: "Marketing Content Creator",
    type: "freelance",
    period: "Oct 2019 — Mar 2020",
    start: "2019-10",
    end: "2020-03",
    location: "Bandung, Indonesia",
    bullets: [
      "Conceptualize, create, and produce engaging content for Instagram feeds.",
      "Collaborate with the marketing team to develop content ideas.",
      "Create a timeline for the type and timing of content uploads.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SOP Management System",
    context: "PT. Timah Industri",
    blurb:
      "A comprehensive Standard Operating Procedure platform unifying processes across 6+ departments.",
    highlights: [
      "Centralized SOPs across 6+ departments to remove information fragmentation.",
      "Role-based user management & authentication via Laravel Sanctum.",
      "Interactive flowchart editor with drag-and-drop and real-time collaboration.",
      "Embeddable widget system to plug processes into external websites.",
    ],
    tags: ["Laravel", "Sanctum", "MySQL", "Real-time", "Drag-and-Drop"],
    status: "Internship",
  },
  {
    title: "Logistics Management Platform",
    context: "PT. Alita Praya Mitra",
    blurb:
      "Laravel-based logistics features that streamline shipping and stock transfer workflows.",
    highlights: [
      "Streamlined shipping & stock transfer flows for end-to-end efficiency.",
      "Backend + UI integration for ease of access and process speed.",
      "Designed and maintained APIs supporting front-end functionality.",
    ],
    tags: ["Laravel", "PHP", "REST API", "MySQL"],
    status: "Internship",
  },
  {
    title: "Plastic Guardian — Landing Page",
    context: "Plastic Guardian",
    blurb:
      "Responsive, attractive landing page optimized across desktops, tablets, and mobile devices.",
    highlights: [
      "Fully responsive design optimized for every screen size.",
      "Ongoing maintenance, feature integration, and visual polish.",
      "Git-based version control for safe iteration.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    status: "Active",
  },
  {
    title: "HMIF ITENAS Website",
    context: "Himpunan Mahasiswa Informatika Bandung",
    blurb:
      "Developed and maintained the student association website as a leading campus tech information source.",
    highlights: [
      "Integrated new features that improve UX.",
      "Positioned HMIF as the go-to source for campus tech news.",
      "Identified hard-skill needs and delivered high-quality training programs.",
    ],
    tags: ["Web", "Content", "UX"],
    status: "Production",
  },
  {
    title: "Bump Burger Website",
    context: "Bump Burger",
    blurb:
      "Responsive product showcase enabling buyers to easily discover what's on the menu.",
    highlights: [
      "Responsive across desktops, tablets, and mobile.",
      "Maintenance, troubleshooting, and feature enhancements.",
      "Improved discoverability of products for buyers.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Production",
  },
  {
    title: "When Student Company Web",
    context: "When Student Company",
    blurb:
      "Web application introducing the company and making products easy to discover.",
    highlights: [
      "Responsive landing experience across devices.",
      "Maintenance, troubleshooting, and UX improvements.",
      "Marketing content production for Instagram feeds.",
    ],
    tags: ["Web", "Marketing", "Content"],
    status: "Production",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages & Frontend",
    icon: "code",
    items: ["JavaScript", "HTML", "CSS", "Front-end Development", "Tailwind"],
  },
  {
    name: "Backend & Frameworks",
    icon: "server",
    items: ["PHP", "Laravel", "Laravel Sanctum", "Node.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: "database",
    items: ["MySQL", "Database Management System (DBMS)"],
  },
  {
    name: "Tools & Workflow",
    icon: "tools",
    items: ["Git", "GitHub", "Web Development"],
  },
  {
    name: "Operations",
    icon: "ops",
    items: ["Linux System Administration", "Linux Operating System"],
  },
  {
    name: "Content & Marketing",
    icon: "content",
    items: ["Social media marketing", "Social media management"],
  },
];

export const educations = [
  {
    school: "Institut Teknologi Nasional Bandung",
    program: "Final-year Undergraduate, Informatics",
    period: "2022 — Present",
    detail: "GPA 3.63 / 4.00",
  },
  {
    school: "SMAN 10 Bandung",
    program: "Natural Science",
    period: "2018 — 2021",
    detail: "Grade 81",
  },
];

export const certifications = [
  { issuer: "Cisco", name: "Introduction to Cybersecurity" },
  { issuer: "Cisco", name: "Networking Basics" },
  { issuer: "Cisco", name: "Networking Essentials" },
  { issuer: "Google", name: "Google Analytics for Beginners" },
  {
    issuer: "CertiProf",
    name: "Cyber Security Foundation Professional Certificate",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
