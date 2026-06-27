import styles from "./Projects.module.css";
import ProjectCard from "./ProjectsCards";
// import { projects } from '../../../constants/projects'
import useScrollAnimation from "../../../hooks/useScrollAnimation";

// Backend connectn karne ke liye ye add kiya he
import { useEffect, useState } from "react";
import { getProjects } from "../../../services/api";
// End

const codeSymbols = [
  "</>",
  "{}",
  "()",
  "=>",
  "&&",
  "||",
  "[]",
  "//",
  "!=",
  "===",
  "++",
  "#",
  "fn()",
  "var",
  "let",
  "const",
];

const Projects = () => {
  const ref = useScrollAnimation();

  // backend ka kam he ye sab iske liye ye add kiya he
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  // End

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data.data);
      } catch (error) {
        console.log("Error :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <div className={styles.decorBg1}></div>
      <div className={styles.decorBg2}></div>

      {/* Floating Code Symbols */}
      {codeSymbols.map((symbol, i) => (
        <span
          key={i}
          className={styles.codeSymbol}
          style={{
            left: `${(i * 6.5) % 95}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${8 + (i % 5) * 2}s`,
            fontSize: `${1 + (i % 3) * 0.4}rem`,
            opacity: 0.12 + (i % 4) * 0.04,
          }}
        >
          {symbol}
        </span>
      ))}

      <div className={styles.projectsInner}>
        <div className={styles.sectionHead}>
          <p className={styles.tag}>WHAT I BUILT</p>
          <h2 className={styles.title}>
            My <span>Projects</span>
          </h2>
          <p className={styles.subtitle}>Real world projects I have built</p>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading... ⏳</div>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id || index}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
