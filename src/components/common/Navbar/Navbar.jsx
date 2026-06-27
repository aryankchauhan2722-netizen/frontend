import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // Jab user scroll kare toh Navbar ka background change ho — transparent se dark!
  const [scrolled, setScrolled] = useState(false);
  // Mobile mein hamburger menu open/close karne ke liye!
  const [menuOpen, setMenuOpen] = useState(false);

  //Page 50px se zyada scroll ho toh scrolled = true ho jaata hai — Navbar ka style change hoga!
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Links hardcode karne ki jagah array banaya — ek jagah se manage karo! Naya link add karna ho toh sirf yahan add karo!
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    //Jab scrolled = true ho toh scrolled class bhi add ho jaati hai — CSS mein alag style denge!
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        𝔸𝕣𝕪𝕒𝕟 <span>ℂ𝕙𝕒𝕦𝕙𝕒𝕟</span>
      </div>

      {/* Array ke har link ke liye automatically <li> banta hai — loop! onClick={() => setMenuOpen(false)} — link click karne pe mobile menu band ho jaaye! */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.navRight}>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin size={22} />
        </a>
        <a href="#contact" className={styles.hireBtn}>
          Hire Me
        </a>
      </div>
      

      {/* Mobile mein 3 lines wala hamburger menu! Click karne pe menuOpen toggle hota hai — CSS se animate karenge X shape mein! */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar;
