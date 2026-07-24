import { motion } from "framer-motion";
import "./Scrapbook.css";

function Scrapbook({ onClick }) {
  return (
    <motion.button
      type="button"
      className="scrapbook"
      onClick={onClick}
      initial={{ y: 15, opacity: 0 }}
      animate={{
        y: [0, -4, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 1.2,
        },
      }}
      whileHover={{
        y: -12,
        rotate: -2,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <span className="scrapbook__shine"></span>

      <span className="scrapbook__spine"></span>

      <span className="scrapbook__label">
        Our Story
      </span>

      <span className="scrapbook__year">
        2025 – Forever
      </span>

      <span className="scrapbook__heart">
        V❤️A
      </span>
    </motion.button>
  );
}

export default Scrapbook;