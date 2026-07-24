import { motion } from "framer-motion";

function OpeningBookAnimation() {
  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0d0907",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        style={{
          width: 320,
          height: 420,
          borderRadius: 18,
          background: "linear-gradient(145deg,#6d3e25,#472312)",
          boxShadow: "0 40px 90px rgba(0,0,0,.6)",
        }}
        initial={{
          scale: 0.6,
          rotate: -10,
          y: 80,
        }}
        animate={{
          scale: 1.6,
          rotate: 0,
          y: 0,
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default OpeningBookAnimation;