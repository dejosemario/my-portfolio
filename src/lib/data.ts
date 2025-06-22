import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaServer, FaDatabase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNestjs, SiMongodb, SiPostgresql } from "react-icons/si";

import shopliveryImg from "../../public/shopliveryImg.png";
import jointSecurityImg from "../../public/jointSecurityImg.png";
import fundinImg from "../../public/fundinImg.png";
import girmaImg from "../../public/girmaImg.png";
import bumpitImg from "../../public/bumpitImg.jpg"; 
import unspokennImg from "../../public/unspokennImg.png"; 
import teleclinixImg from "../../public/teleclinixImg.png"; 
import eventfulImg from "../../public/eventfulImg.png"; 

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Backend Engineer",
    location: "Remote - USA",
    description:
      "Currently architecting and developing BumpIt, a real-time location-based dating application with instant messaging capabilities using NestJS, MongoDB, Socket.io, and Node.js.",
    icon: React.createElement(SiNestjs),
    date: "February 2025 - Present",
  },
  {
    title: "Backend Engineer",
    location: "Remote - USA",
    description:
      "Developed Unspokenn, a secure platform for sensitive incident reporting with emphasis on user privacy and data protection using NestJS, MongoDB, and Node.js.",
    icon: React.createElement(FaDatabase),
    date: "November 2024 - January 2025",
  },
  {
    title: "Backend Engineer",
    location: "AltSchool Africa Team",
    description:
      "Collaborated with a cross-functional team to build Teleclinix, a comprehensive telemedicine platform enabling secure video consultations using NestJS, PostgreSQL, and Node.js.",
    icon: React.createElement(SiPostgresql),
    date: "November 2024 - January 2025",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "Developed Eventful, a comprehensive full-stack ticketing platform for event creation, ticket sales, and attendee management using Express.js, MongoDB, Redis, React, and TypeScript.",
    icon: React.createElement(FaServer),
    date: "July 2024 - September 2024",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Collaborated on the frontend aspect of e-commerce app Shoplivery. Balanced frontend and backend tasks using ReactNative, TypeScript, Tailwind CSS, and Native-base.",
    icon: React.createElement(FaReact),
    date: "January 2023 - April 2023",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Developed Joint Security Network's web app, ensuring seamless UX and integration with backend services using NextJs, Tailwind CSS, and RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - December 2022",
  },
] as const;

export const projectsData = [
  {
    title: "BumpIt",
    description:
      "A real-time location-based dating application with instant messaging capabilities. Built with NestJS backend, MongoDB for data storage, and Socket.io for real-time features.",
    tags: ["NestJS", "MongoDB", "Socket.io", "Node.js", "Real-time", "Location-based"],
    imageUrl: bumpitImg,
    link: "#", // Add the actual link when available
    category: "backend",
  },
  {
    title: "Unspokenn",
    description:
      "A secure platform for sensitive incident reporting with emphasis on user privacy and data protection. Features comprehensive authentication and encryption protocols.",
    tags: ["NestJS", "MongoDB", "JWT", "Security", "Encryption", "Node.js"],
    imageUrl: unspokennImg,
    link: "https://unspokenn.com",
    category: "backend",
  },
  {
    title: "Teleclinix",
    description:
      "A comprehensive telemedicine platform enabling secure video consultations between patients and healthcare providers. HIPAA compliant with robust security measures.",
    tags: ["NestJS", "PostgreSQL", "HIPAA", "Healthcare", "RESTful APIs", "Node.js"],
    imageUrl: teleclinixImg,
    link: "https://teleclinix-react.vercel.app/",
    category: "backend",
  },
  {
    title: "Eventful",
    description:
      "A comprehensive full-stack ticketing platform designed to simplify event creation, ticket sales, and attendee management with secure payment processing.",
    tags: ["Express.js", "MongoDB", "Redis", "React", "TypeScript", "Payment Integration"],
    imageUrl: eventfulImg,
    link: "https://de-eventful.vercel.app/",
    category: "fullstack",
  },
  {
    title: "Shoplivery",
    description:
      "An e-commerce platform providing easy access to goods and services. Worked as a frontend developer with ReactNative, TypeScript, and Tailwind CSS.",
    tags: ["ReactNative", "TypeScript", "Tailwind CSS", "Native-base"],
    imageUrl: shopliveryImg,
    link: "https://shoplivery.vercel.app",
    category: "frontend",
  },
  {
    title: "Joint Security Network",
    description:
      "A platform that connects clients with professional security services. I was responsible for frontend development using NextJs and Tailwind CSS.",
    tags: ["NextJs", "JavaScript", "Tailwind CSS"],
    imageUrl: jointSecurityImg,
    link: "https://joint-power-security-gold.vercel.app/",
    category: "frontend",
  },
] as const;

export const skillsData = [
  // Backend Technologies
  "Node.js",
  "NestJS",
  "Express.js",
  "RESTful APIs",
  "GraphQL",
  "Socket.io",
  "JWT Authentication",
  "OAuth",
  
  // Databases
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  
  // Frontend Technologies
  "React",
  "ReactNative",
  "TypeScript",
  "JavaScript",
  "NextJs",
  "Tailwind CSS",
  "Native-base",
  
  // DevOps & Tools
  "Docker",
  "CI/CD",
  "AWS",
  "GCP",
  "Git",
  "GitHub",
  
  // Development Methodologies
  "Agile Development",
  "Scrum",
  "TDD",
  "Microservices",
  "System Design",
] as const;

// Optional: Export filtered data for different sections
export const backendProjects = projectsData.filter(project => 
  project.category === "backend" || project.category === "fullstack"
);

export const frontendProjects = projectsData.filter(project => 
  project.category === "frontend" || project.category === "fullstack"
);

export const backendExperience = experiencesData.filter(exp => 
  exp.title.includes("Backend") || exp.title.includes("Full Stack")
);