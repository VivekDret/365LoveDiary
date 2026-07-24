import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Plushie.css";

import plushie from "../../assets/photos/plushie.png";
import cute1 from "../../assets/photos/cute1.png";
import cute2 from "../../assets/photos/cute2.png";
import cute3 from "../../assets/photos/cute3.png";
import cute4 from "../../assets/photos/cute4.png";
import cute5 from "../../assets/photos/cute5.png";
import cute6 from "../../assets/photos/cute6.png";
import cute7 from "../../assets/photos/cute7.png";
import cute8 from "../../assets/photos/cute8.png";

function Plushie() {

  const photos = [cute1, cute2,cute3,cute4,cute5,cute6,cute7,cute8];

  const [stage, setStage] = useState("desk");
  const [index, setIndex] = useState(0);

  return (
    <>

      {/* Plushie on Desk */}

      <motion.img
        src={plushie}
        className="plushie"
        whileHover={{ scale: 1.08, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setStage("intro");
          setIndex(0);
        }}
      />

      <AnimatePresence>

        {stage !== "desk" && (

          <motion.div
            className="plush-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setStage("desk")}
          >

            <motion.div
              className="plush-card"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Intro */}

              {stage === "intro" && (
                <>
                  <h2>🧸</h2>

                  <h2>You know who is my cutest...</h2>

                  <h2>and biggest plushie? 🤔</h2>

                  <button
                    onClick={() => setStage("photos")}
                  >
                    Who? 👀
                  </button>
                </>
              )}

              {/* Photos */}

              {stage === "photos" && (

                <motion.img

                  key={index}

                  src={photos[index]}

                  className="plush-photo"

                  initial={{
                    opacity: 0,
                    rotate: -8,
                    scale: .9
                  }}

                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1
                  }}

                  exit={{
                    opacity: 0
                  }}

                  transition={{
                    duration: .8
                  }}

                  onClick={() => {

                    if (index < photos.length - 1) {
                      setIndex(index + 1);
                    } else {
                      setStage("final");
                    }

                  }}

                />

              )}

              {/* Final */}

              {stage === "final" && (
                <>
                  <h1>❤️ YOUUUUU ❤️</h1>

                  <p>
                    Yes... It's you.
                  </p>

                  <p>
                    You're my favourite cuddle partner,
                    my cutest plushie,
                    and my safest place.
                  </p>

                  <p>
                    If I could,
                    I'd hug you every single day.
                  </p>

                  <button
                    onClick={() => setStage("desk")}
                  >
                    ❤️ Hug Me
                  </button>
                </>
              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Plushie;