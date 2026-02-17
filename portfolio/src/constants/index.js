import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  sih,
  barbq,
  ecommerce,
  pc
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id : "resume",
  //   title : "Resume"
  // }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Exploring Arudino & IOT",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "DSA C++",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend-Focused Full Stack Developer",
    company_name: "Personal Projects",
    iconBg: "#1F1F2E",
    date: "2026(Jan) - Present",
    points: [
      "Building full-stack web applications using React, Node.js, Express, and MongoDB.",
      "Designing REST APIs, handling authentication, authorization, and database schema design.",
      "Connecting frontend and backend, managing API state, and fixing real-world bugs.",
      "Deploying applications and improving performance, security, and scalability."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Portfolio & UI Projects",
    iconBg: "#2B2F4A",
    date: "2025(June) - Present",
    points: [
      "Developed responsive user interfaces using React, Tailwind CSS, and modern CSS practices.",
      "Implemented animations using Framer Motion and interactive 3D components with Three.js.",
      "Focused on clean UI, reusable components, and mobile-first design.",
      "Improved UI consistency and accessibility across devices."
    ],
  },
  {
    title: "Backend Developer (Learning & Practice)",
    company_name: "Self Learning",
    iconBg: "#3A3F6B",
    date: "2025(August) - Present",
    points: [
      "Practicing backend development with Node.js, Express, and MongoDB.",
      "Working with JWT-based authentication, cookies, sessions, and role-based access control.",
      "Handling real-world backend issues like token expiry, cookies, and API security.",
      "Learning system design basics and scalable backend architecture."
    ],
  },
  {
    title: "DSA Learner (C++)",
    company_name: "Problem Solving",
    iconBg: "#383E56",
    date: "2026 - Present",
    points: [
      "Learning Data Structures and Algorithms using C++.",
      "Practicing arrays, strings, recursion, linked lists, stacks, and queues.",
      "Improving logical thinking and problem-solving skills through regular practice.",
      "Building a strong foundation for interviews and competitive programming."
    ],
  },
];
 
const projects = [
  {
    name: "E-Commerce Website",
    description:
      "Built a full-stack e-commerce platform with user authentication, product management, and REST APIs. Ensured responsive design and secure data handling.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://balajinamkeen-and-his-her-bakestory.onrender.com",
  },
  {
    name: "SIH_UI",
    description:
      "Developed a responsive React UI for a Smart India Hackathon project with reusable components and clean user flow. Focused on scalability and usability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "SIH",
        color: "pink-text-gradient",
      },
    ],
    image: sih,
    source_code_link: "https://sih-ui-react.onrender.com",
  },
  {
    name: "BAR-BQ",
    description:
      "Created a BBQ website clone with smooth GSAP animations and interactive UI elements. Emphasized responsiveness and modern visual effects.",
    tags: [
      {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Responsive",
        color: "pink-text-gradient",
      },
    ],
    image: barbq,
    source_code_link: "https://react-fe-basic-01.onrender.com",
  },
];

export { services, technologies, experiences, projects };