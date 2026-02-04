import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css';
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from './sections/About';
import Skills from "./sections/Skills";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import Reviews from "./sections/Reviews";
import { Toaster } from 'react-hot-toast';
import Certifications from "./sections/Certifications"

function App() {
  return (
    <>
      <NavBar />

      <section id='home'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='certifications'>
        <Certifications />
      </section>

      <section id='reviews'>
        <Reviews />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <Footer />
      <Toaster position="top-right" />
    </>
  )
}

export default App;
