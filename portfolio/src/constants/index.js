import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    icon: meta, // you can keep icons or create custom ones
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
    icon: shopify,
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
    icon: tesla,
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
    icon: starbucks,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };