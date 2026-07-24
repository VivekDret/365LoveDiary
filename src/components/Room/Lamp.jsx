import { motion } from "framer-motion";
import "./Lamp.css";

function Lamp() {
  return (
    <motion.div
      className="lamp-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="lamp-glow"></div>

      <div className="lamp">
        <div className="lamp-head"></div>
        <div className="lamp-stand"></div>
        <div className="lamp-base"></div>
      </div>
    </motion.div>
  );
}

export default Lamp;