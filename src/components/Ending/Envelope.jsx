import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Envelope.css";
import letter1 from "../../assets/letter/Page1.jpg";
import closedEnvelope from "../../assets/letter/envelopeClosed.png";
import openEnvelope from "../../assets/letter/envelopeOpen.png";
import letter2 from "../../assets/letter/Page2.jpg";

function Envelope() {

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <>

<motion.img
  src={closedEnvelope}
  className="envelope"
  whileHover={{ y: -6 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => {
    setOpen(true);
    setPage(1);
}}
/>

      <AnimatePresence>

        {open && (

          <motion.div
            className="letter-overlay"
            onClick={() => setOpen(false)}

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}
          >

<div
    className="letter-container"
    onClick={(e)=>e.stopPropagation()}
>

<img
    src={openEnvelope}
    className="big-envelope"
/>

<motion.img
    key={page}
    src={page === 1 ? letter1 : letter2}
    className="popup-letter"

    initial={{
        rotateY:90,
        opacity:0
    }}

    animate={{
        rotateY:0,
        opacity:1
    }}

    exit={{
        rotateY:-90,
        opacity:0
    }}

    transition={{
        duration:1.4,
        ease:"easeInOut"
    }}

    onClick={(e)=>{
        e.stopPropagation();

        if(page===1){
            setPage(2);
        }
    }}
/>

</div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Envelope;