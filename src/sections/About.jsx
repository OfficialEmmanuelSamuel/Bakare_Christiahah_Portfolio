import React from "react";
import WhatIOffer from "../components/WhatIDo";
import BackgroundImage from "../assets/christy.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen duration-500 py-15 px-6 md:px-12 lg:px-60 bg-linear-to-b 
      from-gray-50 to-white 
      dark:from-zinc-800 dark:to-zinc-900/70"
    >
      <div
        className="absolute inset-0 bg-cover blur bg-no-repeat bg-center filter  sm:blur brightness-75 dark:brightness-100 lg:blur"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 lg:bg-black-70 dark:bg-black/60 "></div>

      <motion.div variants={item}>
        <span className="relative font-quicksand font-medium flex uppercase justify-center py-2 text-xl text-blue-950  dark:text-white">
          About Me
        </span>
        <span className="block mx-auto h-0.5 rounded-full bg-rose-800  w-15 animate-bounce"></span>

        <h2 className="relative text-2xl text-center md:text-4xl font-lato font-bold mb-6 mt-10 text-gray-950 dark:text-white leading-tight">
          Offering the best service
        </h2>

        <p className="relative text-gray-950 font-quicksand font-medium dark:text-white text-lg lg:text-xl leading-relaxed mb-6 lg:text-center">
          I am Bakare Christianah Oluwatobi, highly experienced, solution oriented professional with 5 years of remarkable background in overseeing all aspects of softwares and hardwares development cycle that enhances the data of each reliable client giving resolute satisfaction. Proficient in utilizing a wide variety of hardware tools to provide high quality and cost-effective boost organizational efficiency and productivity. Process unmatched excellent customer service skills to deliver clients/business solution.
        </p>

      </motion.div>
      <WhatIOffer />
    </section>
  );
};

export default About;
