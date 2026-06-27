import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import styles from "./Projects.module.css";

const ProjectCards = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div
        className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      >
        {/* Image */}
        <div className={styles.cardImg}>
          {project.image ? (
            <img src={`http://localhost:5000${project.image}`} alt={project.name} />
          ) : ( 
            <div className={styles.imgPlaceholder}>
              <span>{project.name[0]}</span>
            </div>
          )}
          {project.featured && (
            <div className={styles.featuredBadge}>⭐ Featured</div>
          )}
        </div>

        {/* Bottom Hover Overlay */}
        {/* Bottom Hover Overlay */}
        <div className={styles.cardOverlay}>
          <p className={styles.overlayDesc}>{project.description}</p>
          <div className={styles.overlayBtns}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={styles.githubBtn}
              >
                <FaGithub size={16} /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className={styles.liveBtn}
              >
                <FaExternalLinkAlt size={14} /> Preview
              </a>
            )}
          </div>
        </div>

        {/* Card Content — always visible */}
        <div className={styles.cardContent}>
          <h3>{project.name}</h3>
          {project.highlight && (
            <p className={styles.highlight}>{project.highlight}</p>
          )}
          <div className={styles.techStack}>
            {project.tech.map((t, i) => (
              <span key={i} className={styles.techTag}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowModal(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className={styles.panelGrid}>
              {project.subPanels.map((panel, i) => (
                <div className={styles.panelCard} key={i}>
                  {/* Panel Image */}
                  <div className={styles.panelImg}>
                    {panel.image ? (
                      <img src={panel.image} alt={panel.name} />
                    ) : (
                      <div className={styles.panelPlaceholder}>
                        <span>{panel.icon}</span>
                      </div>
                    )}

                    {/* Panel Hover Overlay */}
                    <div className={styles.panelOverlay}>
                      <p className={styles.panelOverlayDesc}>{panel.desc}</p>
                      <div className={styles.panelOverlayLinks}>
                        {panel.github && (
                          <a
                            href={panel.github}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.githubBtn}
                          >
                            <FaGithub size={14} /> GitHub
                          </a>
                        )}
                        {panel.live && (
                          <a
                            href={panel.live}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.liveBtn}
                          >
                            <FaExternalLinkAlt size={12} /> Preview
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.panelContent}>
                    <h4>{panel.name}</h4>
                    <p>{panel.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCards;
