import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frog from "../../assets/photos/frog.png";

function Frog() {

  const spots = [
    { x: 120, y: 420 },
    { x: 320, y: 390 },
    { x: 520, y: 430 },
    { x: 760, y: 400 },
    { x: 600, y: 260 },
    { x: 260, y: 260 },
    { x: 900, y: 330 },
    { x: 470, y: 500 }
  ];

  const messages = [
    "Hey you squirrel 🐿️... don't touch me!",
    "I'm busy hopping 😤",
    "Go read the scrapbook again 😂"
  ];

  const [index, setIndex] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {

    const timer = setInterval(() => {

      setIndex(Math.floor(Math.random() * spots.length));

    }, 2200);

    return () => clearInterval(timer);

  }, []);

  function handleClick() {

    const next = clicks + 1;

    setClicks(next);

    setShow(true);

    setTimeout(() => setShow(false), 2000);

  }

  return (
    <>

      <motion.img

        src={frog}

        style={{
          position: "absolute",
          width: "70px",
          cursor: "pointer",
          zIndex: 80
        }}

        animate={{
          left: spots[index].x,
          top: spots[index].y,
          y: [0, -25, 0]
        }}

        transition={{
          left: { duration: 0.8 },
          top: { duration: 0.8 },
          y: { duration: 0.35 }
        }}

        onClick={handleClick}

      />

      <AnimatePresence>

        {show && (

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0 }}

            style={{
              position: "absolute",
              left: spots[index].x,
              top: spots[index].y - 45,
              background: "white",
              color: "#222",
              padding: "10px 15px",
              borderRadius: "20px",
              fontWeight: "bold",
              zIndex: 100
            }}

          >

            {messages[Math.min(clicks, 2)]}

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Frog;