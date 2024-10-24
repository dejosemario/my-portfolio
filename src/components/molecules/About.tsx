"use client";

import React from "react";
import SectionHeading from "@/components/atoms/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-bold">Architecture</span>, my passion for
        problem-solving naturally led me toward the world of computers.
        Architecture is inherently about finding solutions, and that same
        mindset sparked my desire to dive into the software world. I sought a
        way to harmonize{" "}
        <span className="font-medium">architecture with technology</span>, and
        my interest in computers never faded.
      </p>
      <p className="mb-3">
        Curiosity drove me deeper into programming, and I began exploring web
        development. However, learning on my own was challenging. The complexity
        of figuring out how everything worked, especially APIs, prompted me to
        pursue formal education, enrolling in a{" "}
        <span className="font-bold">
          Backend diploma program with Altschool
        </span>
        .
      </p>
      <p className="mb-3">
        Now, I am a <span className="font-bold ">full-stack developer</span>,
        with my curiosity as strong as ever. Who knows what lies ahead after
        this? My thirst for knowledge remains unquenched. You may wonder, what
        else am I curious about? Let's save that conversation for later...
      </p>
    </motion.section>
  );
}
