import React from "react";
import HeroImage from "../assets/christy.jpg";
import HeroPicture from "../assets/christie.jpg";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import FloatingEffects from "../components/FloatingEffects";


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


const Hero = () => {
    const ScrollToContact = () => {
        const section = document.getElementById("contact");
        if (section) {
            const yOffset = -60;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false);
        }
    };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen duration-500 bg-gray-50 dark:bg-zinc-700 flex flex-col items-center justify-center overflow-hidden gap-5 sm:flex-col lg:flex-row"
    >
      
      <div
        className="absolute inset-0 bg-cover blur-3xl bg-no-repeat bg-center filter  sm:blur-3xl brightness-75 dark:brightness-100 lg:blur-3xl"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 lg:bg-black-70 dark:bg-black/60 "></div>
      <FloatingEffects />
      <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="md:flex p-4 gap-5"
            >
                {/* Image / Glass Card */}
                <motion.div variants={item} className="flex justify-center mt-20">
                    <div
                        className="relative rounded-full
                        bg-white/10 dark:bg-white/10
                        backdrop-blur-xl border border-white/30
                        shadow-2xl"
                    >
                        <img
                            src={HeroPicture}
                            alt="Developer"
                            className="w-100 h-full rounded-full object-contain  sm:w-150  lg:w-100"
                        />

                        {/* Glow */}
                        <div className="absolute -inset-1 -z-10 rounded-3xl 
                             bg-linear-to-r from-blue-900 to-blue-900 
                             opacity-30 blur-2xl"
                        />
                    </div>
                </motion.div>
            </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center p-2 lg:text-left sm:px-6 lg:px-8 lg:w-4xl lg:space-y-5">
        <h1 className="text-4xl text-center font-quicksand font-bold bg-linear-to-r from-blue-950 to-blue-950 bg-clip-text text-transparent sm:text-7xl lg:text-8xl drop-shadow-lg min-h-12 dark:from-white dark:to-white">
          Hi, I'm <span className="text-rose-800">Christianah</span> 
        </h1>
        <h2 className="text-xl text-center bg-linear-to-r from-blue-950 to-blue-950 bg-clip-text text-transparent font-quicksand font-bold mt-5 sm:text-3xl lg:text-3xl drop-shadow-lg min-h-12 dark:from-white dark:to-white">
          Mobile Technician and Customer Service Personnel.
        </h2>

        <p className="mt-2 text-lg text-center bg-linear-to-r from-blue-950 to-red-500 bg-clip-text text-transparent cursor-pointer sm:text-xl font-quicksand lg:text-2xl drop-shadow-md dark:from-white dark:to-white">
          Smart solutions to your mobile and IT needs.
        </p>
        <RxDoubleArrowDown size={30} className="mx-auto mt-15 animate-bounce text-blue-950 dark:text-white" />
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:items-left">
          <button
            onClick={ScrollToContact}
            className="mt-8 px-10 py-3 text-lg font-quicksand border-2 mb-10 border-rose-200/20 bg-rose-800 shadow-sm shadow-gray-600 text-white rounded-lg font-medium hover:bg-rose-900  transition-colors lg:mb-0"
          >
            Contact Me
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
