import { useState } from "react";
import { motion } from "framer-motion";
import Stars from "./Stars";
import Moon from "./Moon";
import Typewriter from "./Typewriter";

function OpeningScreen({ onOpen }) {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(180deg, #050510 0%, #0a0a1a 50%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Stars />
      <Moon />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          textAlign: "center",
          maxWidth: "900px",
          marginBottom: "25px",
          padding: "0 24px",
          fontWeight: 400,
          lineHeight: 1.4,
        }}
      >
        <Typewriter
          text="For the girl who I met.. WHo unknowingly became my Favourite person and my favourite story."
          speed={50}
          onComplete={() => setShowSubtitle(true)}
        />
      </motion.h1>

      {showSubtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => setShowButton(true)}
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            marginBottom: "40px",
          }}
        >
          Happy One Year Bae ❤️
        </motion.p>
      )}

      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          style={{
            position: "relative",
            zIndex: 1,
            padding: "15px 40px",
            borderRadius: "40px",
            border: "none",
            fontSize: "18px",
            fontFamily: "inherit",
            cursor: "pointer",
            background: "#ff4d6d",
            color: "white",
          }}
          
        >
          So Lets goo ...
        </motion.button>
      )}
    </div>
  );
}

export default OpeningScreen;
