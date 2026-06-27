import { useState } from 'react'
import styles from './Skills.module.css'
import { skills } from '../../../constants/skills'
import useScrollAnimation from '../../../hooks/useScrollAnimation'
const techSymbols = ['⚛️', '🟨', '🟢', '🍃', '🐘', '🗄️', '🎨', '📊', '🤖', '🔍', '📈', '💻', '🚀', '⚡', '🔥', '💡']

const Skills = () => {
  const ref = useScrollAnimation()
  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Data Analysis', 'AI/ML', 'Language']
  const [activeTab, setActiveTab] = useState('Frontend')
  const filtered = skills.filter(s => s.category === activeTab)

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.decorBg1}></div>
      <div className={styles.decorBg2}></div>
      {/* Floating Tech Symbols */}
      {techSymbols.map((symbol, i) => (
        <span
          key={i}
          className={styles.techSymbol}
          style={{
            left: `${(i * 6.5) % 95}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + (i % 4) * 2}s`,
            fontSize: `${1.2 + (i % 3) * 0.3}rem`,
          }}
        >
          {symbol}
        </span>
      ))}
      <div className={styles.skillsInner}>
        <div className={styles.sectionHead}>
          <p className={styles.tag}>WHAT I KNOW</p>
          <h2 className={styles.title}>My <span>Skills</span></h2>
          <p className={styles.subtitle}>Technologies and tools I work with</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filtered.map(skill => (
            <div className={styles.skillCard} key={skill.id}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <span>{skill.icon}</span>
                </div>
                <div className={styles.skillInfo}>
                  <h4>{skill.name}</h4>
                  <span className={styles.levelText}>{skill.level}%</span>
                </div>
              </div>
              <div className={styles.barBg}>
                <div
                  className={styles.barFill}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className={styles.barGlow}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills