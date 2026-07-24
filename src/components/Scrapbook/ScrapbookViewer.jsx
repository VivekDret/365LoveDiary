import { motion } from "framer-motion";
import Book from "./Book";
function ScrapbookViewer({onFinish}){

return(

<motion.div

style={{
height:"100vh",
background:"#0e0b08",
display:"flex",
justifyContent:"center",
alignItems:"center",
color:"white"
}}

initial={{opacity:0}}

animate={{opacity:1}}

transition={{duration:1}}

>

<h1>

<Book onFinish={onFinish} />

</h1>

</motion.div>

);

}

export default ScrapbookViewer;