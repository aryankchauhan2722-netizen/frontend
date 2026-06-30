import styles from './Achievements.module.css'
// import { achievements } from '../../../constants/achievements' // static data tha jo abhi use nai kiya he
import useScrollAnimation from '../../../hooks/useScrollAnimation'

// Backend ka kam karne ke liye use kiya he
import { useEffect,useState } from 'react'
import { getAchievement } from '../../../services/api'
// End

const achievementSymbols = ['🏆', '⭐', '🥇', '🎯', '🔥', '💪', '🎓', '✨', '🏅', '👑', '🚀', '💡']

const Achievements = () => {
  const ref = useScrollAnimation()

  // Backend system work data fetching ke liye use
    // data ko manage karne ke liye
    const [achievements,setAchievements] = useState([])

    //  data ko bulavo useeffect me

    useEffect(()=>{
      const FetchAchievemnets = async () => {
        try {
          const res = await getAchievement()

          setAchievements(res.data.data)
        } catch (error) {
          console.log('Error : ',error)
        }
      }
      FetchAchievemnets()
    },[])

  return (
    <section className={styles.achievements} id="achievements" ref={ref}>

      <div className={styles.decorBg1}></div>
      <div className={styles.decorBg2}></div>

      {/* Floating Symbols */}
      {achievementSymbols.map((symbol, i) => (
        <span
          key={i}
          className={styles.floatSymbol}
          style={{
            left: `${(i * 8) % 95}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${7 + (i % 4) * 2}s`,
            fontSize: `${1 + (i % 3) * 0.4}rem`,
          }}
        >
          {symbol}
        </span>
      ))}

      <div className={styles.achievementsInner}>

        <div className={styles.sectionHead}>
          <p className={styles.tag}>MY WINS</p>
          <h2 className={styles.title}>My <span>Achievements</span></h2>
          <p className={styles.subtitle}>Competitions won & academic excellence</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>

          {/* Center Line */}
          <div className={styles.timelineLine}></div>

          {achievements.map((item, i) => (
            <div
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
              key={item._id}
            >
              {/* Card */}
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  {item.image ? (
                    <img src={`https://aryanportfolio-backend.onrender.com${item.image}`} alt={item.title} />
                  ) : (
                    <div className={styles.imgPlaceholder}>
                      <span>{item.icon}</span>
                    </div>
                  )}
                  <div className={styles.cardOverlay}>
                    <p className={styles.overlayCollege}>{item.college}</p>
                    <p className={styles.overlayYear}>{item.year}</p>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  {/* <p className={styles.college}>{item.college}</p>
                  <p className={styles.year}>{item.year}</p> */}
                </div>
              </div>

              {/* Center Dot */}
              <div className={styles.dot}>
                <span>{item.icon}</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Achievements