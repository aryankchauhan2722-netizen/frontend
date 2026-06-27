import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { LuSparkles, LuX } from "react-icons/lu";
import { GiSparkles } from "react-icons/gi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaHandSparkles } from "react-icons/fa";
import styles from "./Chatbot.module.css";

// Bakckend system call
import { sendChatMessage } from "../../../services/api";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Aryan's AI assistant. Ask me anything! 👋",
    },
  ]);
  const [input, setInput] = useState("");

  // loading chat
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input === "") return;

    // user ka msg dikhega box me
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // backend ko behjo
    try {
      const res = await sendChatMessage(input);
      // bot ka reply screen pe dikhavo
      setMessages([...newMessages, { sender: "bot", text: res.data.reply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Sorry, something went wrong! 😅" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`${styles.aiToggleBtn} ${isOpen ? styles.isOpen : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {/* Radar Waves Background */}
        <span className={`${styles.aiRipple} ${styles.ripple1}`}></span>
        <span className={`${styles.aiRipple} ${styles.ripple2}`}></span>

        {/* Rotating Icon Container */}
        <div
          className={`${styles.iconContainer} ${isOpen ? styles.rotateActive : styles.rotateIdle}`}
        >
          {isOpen ? (
            <LuX size={26} className={styles.closeIconStyle} />
          ) : (
            <FaHandSparkles size={30} className={styles.brainIconStyle} />
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h4>Aryan's AI Assistant 🤖</h4>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === "user" ? styles.userMsg : styles.botMsg
                }
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className={styles.botMsg}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button type="submit">
              <FaPaperPlane size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
