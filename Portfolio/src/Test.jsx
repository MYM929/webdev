import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
  }

  return (
    <div className="course">
        <motion.div className="box" 
        variants={variants}
        // initial="hidden"
        // animate="visible"
        transition={{duration:2}}
        animate={open ? "visible" : "hidden"}
            // initial={{opacity:0.5, scale:0.5}}
            // // animate={{opacity:1, scale: 1, x:200, y:500}}
            // transition={{duration:2}}
            // // whileHover={{opacity:1, scale: 2}}>
            // // whileTap={{opacity:1, scale: 2}}
            // whileInView={{opacity:1, scale: 2}}
            // drag
            >
        </motion.div>
        <button onClick={() => setOpen(
            prev => !prev
          )}>
          Click
        </button>
    </div>
  )
}

export default Test