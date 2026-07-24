import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Rose.css";
import rose from "../../assets/photos/flower.png" 

function Rose() {
  const [open, setOpen] = useState(false);

  return (
    <>
  <motion.img
    src={rose}
    className="rose"
    whileHover={{ scale: 1.1, y: -6 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setOpen(true)}
  />

  <AnimatePresence>
    {open && (
      <motion.div
        className="rose-overlay"
        onClick={() => setOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="rose-card"
          onClick={(e) => e.stopPropagation()}
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <motion.img
            src={rose}
            className="big-rose"
            initial={{
              scale: 0,
              rotate: -20,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
            }}
          />

          <div className="flower-message">
            <h2>🌸 For My Little Flower 🌸</h2>

            <p>
              A pretty lady like you deserves flowers every single day.
            </p>

            <p>
              Until I can hand you one in person,
              let this little flower remind you
              how special you are to me.
            </p>

            <p>
              Thank you for making my little world
              feel like the most beautiful garden.
            </p>

            <h3>
              You'll always be my favourite flower. ❤️
            </h3>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</>
  );
}

export default Rose;