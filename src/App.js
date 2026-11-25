import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Themes.js";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import useReveal from "./components/ui/useReveal";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  useReveal();

  return (
    <ThemeProvider theme={theme}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <About />
        <Skills />
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Education />
        <Contact />
      </main>
      <Footer />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </ThemeProvider>
  );
}

export default App;
