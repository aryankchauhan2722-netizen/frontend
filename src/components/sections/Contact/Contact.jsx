import styles from "./Contact.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

// backend ka work
import { useEffect, useState } from "react";
import { sendContact } from "../../../services/api";
// End

// Stylish alert ke liye
import toast from "react-hot-toast";

const Contact = () => {
  const ref = useScrollAnimation();

  // Backend work
  const [formdata, setFormData] = useState({
    // Iska use data ko lane ke liye form mese  :-
    //Example :- User "Aryan" likha name mein:formData pehle:{ name: '', email: '', subject: '', message: '' }formData baad mein:{ name: 'Aryan', email: '', subject: '', message: '' }
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //  user likhe ga to update hoga values beaucse uper abhi emtty values pass he
  // User ne "Aryan" likha: e.target.name  = "name" e.target.value = "Aryan" Result:{ name: 'Aryan', email: '', subject: '', message: '' }
  const handlechange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // submit ke bad data save
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.subject ||
      !formdata.message
    ) {
      toast.error("Please fill all fields", {
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "white",
          fontWeight: "600",
          borderRadius: "12px",
          padding: "16px 24px",
        },
      });
      return;
    }
    // console.log('Form data :',formdata)
    try {
      await sendContact(formdata);
      // popup lane ke liye use kiya he
      toast.success("Success Sent msg to Aryan ! Thank you so much! ", {
        duration: 3000,
        style: {
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          fontWeight: "600",
          borderRadius: "12px",
          padding: "16px 24px",
          fontSize: "0.95rem",
          boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
        },
        iconTheme: {
          primary: "white",
          secondary: "#2563eb",
        },
      });
      setFormData({ name: "", email: "", subject: "", message: "" }); // submit hone ke bad form khali ho jayega iske liye ye use kiya he
    } catch (error) {
      toast.error("Server not response Please Try again !!", {
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "white",
          fontWeight: "600",
          borderRadius: "12px",
          padding: "16px 24px",
        },
      });
    }
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.decorBg1}></div>
      <div className={styles.decorBg2}></div>

      <div className={styles.contactInner}>
        <div className={styles.sectionHead}>
          <p className={styles.tag}>GET IN TOUCH</p>
          <h2 className={styles.title}>
            Contact <span>Me</span>
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <h3>Let's Talk! 👋</h3>
            <p>
              I'm always open to new opportunities, collaborations and
              interesting projects.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>
                    aryan.k.chauhan2722@gmail.com
                  </p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoValue}>Surat, Gujarat, India</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div>
                  <p className={styles.infoLabel}>Phone</p>
                  <p className={styles.infoValue}>+91 9328960157</p>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.contactRight}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formdata.name}
                    onChange={handlechange}
                    placeholder="Aryan Chauhan"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formdata.email}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    onChange={handlechange}
                    placeholder="aryan@gmail.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formdata.subject}
                  onChange={handlechange}
                  placeholder="Project Discussion"
                />
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  name="message"
                  value={formdata.message}
                  onChange={handlechange}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
