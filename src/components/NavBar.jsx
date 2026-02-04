import React, { useState, useEffect } from "react";
import { LuSunMoon, LuLaptopMinimal } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import logo from "../assets/christie.JPG";
import { FaAward } from "react-icons/fa6";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { label } from "framer-motion/client";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", id: "home", icon: <GoHomeFill /> },
    { label: "About", id: "about", icon: <IoPerson /> },
    { label: "Skills", id: "skills", icon: <GiSkills /> },
    { label: "Certifications", id: "certifications", icon: <FaAward /> },
    { label: "Reviews", id: "reviews", icon: <LuLaptopMinimal /> },
    { label: "Contact", id: "contact", icon: <MdContacts /> },
  ];

  const ScrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -60;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // ===== THEME MANAGER (system + manual) =====
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const isDark = storedTheme === "dark";
      document.documentElement.classList.toggle("dark", isDark);
      setDarkMode(isDark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setDarkMode(prefersDark);
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => {
      const override = localStorage.getItem("theme");
      if (!override) {
        document.documentElement.classList.toggle("dark", e.matches);
        setDarkMode(e.matches);
      }
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    const newDark = !isDarkNow;
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    setDarkMode(newDark);
  };

  // ===== ACTIVE SECTION OBSERVER =====
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full filter backdrop-blur-lg  shadow-purple-100 transition-colors duration-500 ease-in-out">
      <div className="flex items-center justify-between sm:gap-10 px-4 py-4">
        <div className="flex items-center gap-4 ">
          <img src={logo} className="w-10 h-10 rounded-full" />
          <h1 className="font-inter text-2xl font-light bg-linear-to-r from-gray-900 to-gray-950 bg-clip-text text-transparent cursor-pointer dark:from-gray-50 dark:to-gray-50">
            CHRISTIANAH
          </h1>
        </div>

        <div className="flex items-center gap-20 md:gap-10">
          {/* Desktop Nav */}
          <ul className="hidden md:flex md:mr-5 md:gap-5 gap-12 font-medium font-quicksand text-gray-700 sm:gap-7 lg:gap-10 lg:mr-15 dark:text-gray-300">
            {navLinks.map(({ label, id }) => (
              <li
                key={id}
                onClick={() => ScrollToSection(id)}
                className="relative cursor-pointer hover:text-rose-700 transition font-medium"
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-rose-800 transition-all duration-300 ${
                    activeSection === id ? "w-5 animate-bounce" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle (Desktop only) */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex md:mr-1 text-xs font-quicksand p-1 rounded-full font-bold mr-5 items-center gap-2 text-zinc-900 dark:text-white lg:px-3"
          >
            {darkMode ? (
              <HiOutlineLightBulb size={22} />
            ) : (
              <LuSunMoon size={22} />
            )}
            <span className="hidden md:block text-medium font-quicksand">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden mr-3 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 cursor-pointer"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-linear-to-r from-gray-950 to-gray-950 dark:bg-white transition-transform duration-300 dark:from-gray-100 dark:to-gray-200 ${
              menuOpen ? "rotate-45 translate-y-2 w-4" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-linear-to-r from-gray-950 to-gray-950 rounded dark:bg-white transition-opacity duration-300 dark:from-gray-100 dark:to-gray-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-linear-to-r from-gray-950 to-gray-700 dark:bg-white transition-transform duration-300 dark:from-gray-100 dark:to-gray-200 ${
              menuOpen ? "-rotate-45 -translate-y-2 w-4" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 h-120 bg-white  w-full dark:bg-zinc-900 shadow-md transform transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-250"
        }`}
      >
        <div className="mt-10 space-y-7 px-6">
          {navLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => ScrollToSection(link.id)}
              className={`flex items-center justify-center font-quicksand text-gray-900 dark:text-gray-200 cursor-pointer transition ${
                activeSection === link.id
                  ? "text-rose-800 font-semibold dark:text-rose-800"
                  : ""
              }`}
            >
              {link.label}
            </p>
          ))}
        </div>

        {/* Mobile Dark Mode Toggle */}
        <button
          onClick={() => {
            toggleTheme();
            setMenuOpen(!menuOpen);
          }}
          className="mx-auto flex items-center mt-8 gap-3 text-xs font-quicksand p-2  bg-white rounded-full font-bold text-zinc-900 dark:text-white dark:bg-zinc-900 "
        >
          <span className="md:block font-medium font-quicksand text-sm">Light</span>
          {darkMode ? <MdToggleOn size={30} className="text-rose-700"/> : <MdToggleOff size={30} className="text-rose-700"/>}
          <span className="md:block font-medium font-quicksand text-sm">Dark</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
