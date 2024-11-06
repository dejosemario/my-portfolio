import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopliveryImg from "@/public/shopliveryImg.png";
import jointSecurityImg from "@/public/jointSecurityImg.png";
import fundinImg from "@/public/fundinImg.png";
import girmaImg from "@/public/girmaImg.png";

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
    title: "Frontend Developer",
    location: "Ibadan, Nigeria",
    description:
      "Collaborated on the frontend aspect of e-commerce app Shoplivery. Balanced frontend and backend tasks using ReactNative, TypeScript, Tailwind CSS, and Native-base.",
    icon: React.createElement(FaReact),
    date: "January 2023 - Present",
  },
  {
    title: "Frontend Developer",
    location: "Ibadan, Nigeria",
    description:
      "Developed Joint Security Network’s web app, ensuring seamless UX and integration with backend services using NextJs, Tailwind CSS, and RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - December 2022",
  },
  {
    title: "Frontend Developer",
    location: "Anambra, Nigeria",
    description:
      "Led the frontend development of Fundin during the SMFest Hackathon. The platform enables professionals to showcase their expertise and receive grants.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - October 2022",
  },
  {
    title: "Frontend Developer",
    location: "Anambra, Nigeria",
    description:
      "Contributed to the development of Girma, a platform that helps startups secure funding. Focused on the frontend with ReactJS, JavaScript, and Tailwind CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - September 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Shoplivery",
    description:
      "An e-commerce platform providing easy access to goods and services. Worked as a frontend developer with ReactNative, TypeScript, and Tailwind CSS.",
    tags: ["ReactNative", "TypeScript", "Tailwind CSS", "Native-base"],
    imageUrl: shopliveryImg,
    link: "https://shoplivery.vercel.app",
  },
  {
    title: "Joint Security Network",
    description:
      "A platform that connects clients with professional security services. I was responsible for frontend development using NextJs and Tailwind CSS.",
    tags: ["NextJs", "JavaScript", "Tailwind CSS"],
    imageUrl: jointSecurityImg,
    link: "https://joint-power-security.vercel.app/",
  },
  {
    title: "Fundin",
    description:
      "A donation application where skilled professionals can showcase their expertise to receive grants. Built during the SMFest Hackathon.",
    tags: ["NextJs", "TypeScript", "Tailwind CSS", "SASS"],
    imageUrl: fundinImg,
    link: "https://smfesthackathon.vercel.app/",
  },
  {
    title: "Girma",
    description:
      "A platform that helps startups secure funding through mentorship and strategic training. Developed the frontend using ReactJS and Tailwind CSS.",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "SASS"],
    imageUrl: girmaImg,
    link: "http://girma-gamma.vercel.app/",
  },
] as const;

export const skillsData = [
  "ReactNative",
  "TypeScript",
  "React",
  "NextJs",
  "NestJs",
  "Tailwind CSS",
  "Native-base",
  "JavaScript",
  "Node.js",
  "RESTful APIs",
  "Git",
  "MongoDB",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Redux",
  "Framer Motion",
  "Agile Methodologies",
] as const;
