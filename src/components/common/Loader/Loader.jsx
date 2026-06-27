import styles from "./Loader.module.css"
import { useLottie } from 'lottie-react'
import loadingAnimation from '../../../assets/Loading/Loading.json'

const Loader = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <div className={styles.loaderScreen}>
      <div className={styles.loaderContent}>
        <div className={styles.lottieWrapper}>
          {View}
        </div>
        <h1 className={styles.logo}>Welcome AC<span>.</span></h1>
      </div>
    </div>
  )
}

export default Loader