import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>

        {/* Top */}
        <div className={styles.footerTop}>

          {/* Logo & Desc */}
          <div className={styles.footerBrand}>
            <div className={styles.logo}>AC<span>.</span></div>
            <p>A passionate Full Stack Developer And Data analysis from Building modern web apps with clean code and creative designs and handle the deep anaysis and various dataset </p>
            <div className={styles.socials}>
              <a href="https://github.com/aryankchauhan2722-netizen" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/aryanchauhan9173?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/_aryan._.549?igsh=aHdoeTFnMnY1MHJp" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerContact}>
            <h4>Contact</h4>
            <p>📧 aryanchauhan@gmail.com</p>
            <p>📍 Surat, Gujarat, India</p>
            <p>🎓 BCA graduaction in 2026</p>
            <p>🎓 MCA Student purshing</p>
            <a href="#contact" className={styles.hireBtn}>Hire Me</a>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>© 2026 Aryan Chauhan. All rights reserved.</p>
          <p>Made with <FaHeart className={styles.heart} /> using React & Node.js & MongoDB Atlas</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer