import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DietCoke.css";

import coke from "../../assets/photos/dietcoke.png";

function DietCoke(){

const [open,setOpen]=useState(false);
const [step,setStep]=useState(0);

useEffect(()=>{

if(!open) return;

setStep(0);

const timers=[];

timers.push(setTimeout(()=>setStep(1),700));
timers.push(setTimeout(()=>setStep(2),1500));
timers.push(setTimeout(()=>setStep(3),2400));
timers.push(setTimeout(()=>setStep(4),3300));

return ()=>timers.forEach(clearTimeout);

},[open]);

return(

<>

<motion.img

src={coke}

className="coke"

whileHover={{scale:1.08,y:-5}}

whileTap={{scale:.95}}

onClick={()=>setOpen(true)}

/>

<AnimatePresence>

{open && (

<motion.div

className="coke-overlay"

onClick={()=>setOpen(false)}

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

>

<motion.div

className="coke-card"

onClick={(e)=>e.stopPropagation()}

initial={{
scale:.4,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

exit={{
scale:.4,
opacity:0
}}

transition={{
duration:.6
}}

>

<img
src={coke}
className="big-coke"
/>

<h2>🥤 Diet Coke says...</h2>

{step>=1 && <p>Heyyy!! 😤</p>}

{step>=2 && <p>I'm sooo jealous...</p>}

{step>=3 && <p>Because your lips keep touching him every single day... 🥺❤️</p>}

{step>=4 && (
<>
<p>And I'm just sitting here waiting for my turn. 😂</p>

<button
onClick={()=>setOpen(false)}
>
😂 You're silly!
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

export default DietCoke;