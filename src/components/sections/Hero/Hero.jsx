import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaDownload
} from "react-icons/fa";
import aryanImg from "../../../assets/Images/aryan.png";
import styles from "./Hero.module.css";

// resume upload
import { getSettings } from "../../../services/api";

const Hero = () => {
  const [text, setText] = useState("");
  const words = [
    "Full Stack Developer",
    "Data Analystic Developer",
    "ML Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    let charIndex = 0;
    let wordIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100);
    };

    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  // resume upload logics
  const [resume, setResume] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await getSettings();
        if (res.data.data.length > 0) {
          setResume(res.data.data[0].resume);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchResume();
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Background decorative elements */}
      <div className={styles.decorStar1}>✦</div>
      <div className={styles.decorStar2}>✦</div>
      <div className={styles.decorCircle1}></div>
      <div className={styles.decorCircle2}></div>

      <div className={styles.heroInner}>
        {/* Left — Text */}
        <div className={styles.heroLeft}>
          <p className={styles.greeting}>This is your developer</p>
          <h1 className={styles.name}>
            Aryan <span>Chauhan</span>
          </h1>
          <h2 className={styles.typed}>
            {text}
            <span className={styles.cursor}>|</span>
          </h2>
          <p className={styles.desc}>
            A passionate Full Stack Developer With Data anaysis Developer .
            Building modern web apps with clean code and creative designs and
            data hendling , data visualization with create reports. Currently
            pursuing MCA..
          </p>

          <div className={styles.btnGroup}>
            <a href="#contact" className={styles.primaryBtn}>
              Hire Me
            </a>  
            <a
              href={`http://localhost:5000${resume}`}
              download
              className={styles.secondaryBtn}
            >
              <FaDownload size={14} /> Download CV
            </a>
            
          </div>

          <div className={styles.socials}>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div className={styles.heroRight}>
          <div className={styles.imageBox}>
            <div className={styles.imageWrapper}>
              <img src={aryanImg} alt="Aryan Chauhan" />
            </div>
            {/* Rotating badge */}
            <div className={styles.badge}>
              <svg viewBox="0 0 100 100" className={styles.badgeSvg}>
                <path
                  id="circle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
                <text>
                  <textPath href="#circle">
                    Full Stack • Developer • MCA • VNSGU
                  </textPath>
                </text>
              </svg>
              <span className={styles.badgeStar}>✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
