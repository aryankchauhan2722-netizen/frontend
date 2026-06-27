import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Achievements from "./components/sections/Achievements/Achievements";
import Contact from "./components/sections/Contact/Contact";
import "./App.css";

// loading ke liye
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader/Loader";

// Chatboat system import
import Chatbot from "./components/common/Chatbot/Chatbot";

const App = () => {
  // loading animationke liye
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main
        style={{ width: "100%", maxWidth: "100%", padding: "0", margin: "0" }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </BrowserRouter>
  );
};

export default App;
