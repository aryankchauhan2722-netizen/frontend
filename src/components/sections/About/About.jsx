import styles from './About.module.css'
import { FaGraduationCap, FaCode, FaDatabase, FaBrain } from 'react-icons/fa'
import useScrollAnimation from '../../../hooks/useScrollAnimation'

const About = () => {
  const ref = useScrollAnimation()

  const cards = [
    {
      icon: <FaCode />,
      title: "Full Stack Dev",
      desc: "Building modern web apps with React, Node.js & MongoDB , HTML, CSS, Javascript, PHP, PhpMyAdmin"
    },
    {
      icon: <FaDatabase />,
      title: "Data Analysis",
      desc: "Power BI, Tableau, Excel, Power Query, DAX Query, SQL  — turning data into insights"
    },
    {
      icon: <FaBrain />,
      title: "ML Enthusiast",
      desc: "Basic ML algorithms, NLP & supervised/unsupervised learning"
    },
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      desc: "CGPA 8.44 | Highest SGPA 9.27 | Consistent top ranker"
    },
  ]

  return (
    <section className={styles.about} id="about" ref={ref}>

      {/* Background decorative */}
      <div className={styles.decorBg1}></div>
      <div className={styles.decorBg2}></div>
      <div className={styles.decorStar1}>✦</div>
      <div className={styles.decorStar2}>✦</div>

      <div className={styles.aboutInner}>

        {/* Left */}
        <div className={styles.aboutLeft}>
          <p className={styles.tag}>WHO I AM</p>
          <h2 className={styles.title}>
            About <span>Me</span>
          </h2>
          <p className={styles.desc}>
            Hey! I'm <strong>Aryan Chauhan</strong> — a passionate Full Stack Developer And Data Analystic Devloper I completed my <strong>BCA from VNSGU in 2026</strong> and
            currently pursuing <strong>MCA</strong>.
          </p>
          <p className={styles.desc}>
            I love building real-world projects that solve actual problems.
            My project <strong>Safe Vehicle</strong> ranked 1st in college with highest marks.
            I've won <strong>Web Development competitions</strong> at C.B. Patel & C.K. Pithawala colleges.
          </p>
          <p className={styles.desc}>
            Beyond web dev, I'm exploring <strdong>Data Analysis</strdong> and
            <strong> Machine Learning</strong> — building my path as a complete tech professional.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>8.44</h3>
              <p>BCA Overall CGPA</p>
            </div>
            <div className={styles.stat}>
              <h3>9.27</h3>
              <p>BCA Highest SGPA</p>
            </div>
            <div className={styles.stat}>
              <h3>6+</h3>
              <p>Competitions Won & BCA Acadamic Awards</p>
            </div>
            <div className={styles.stat}>
              <h3>4+</h3>
              <p>Projects Built (Full Stack & Data anlsysis report Dahsbord)</p>
            </div>
          </div>
        </div>

        {/* Right — Cards */}
        <div className={styles.aboutRight}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About