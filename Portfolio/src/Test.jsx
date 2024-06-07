import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {opacity: 1, x:800, transition:{type:"spring", stiffness:100, damping:100}},
    hidden: {opacity: 0},
  }

  const items = [
    "item1", "item2", "item3", "item4" 
  ]

  return (
    <div className="course">
      <motion.ul>
        {items.map((item)=>(
          <motion.li key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Test

/*
import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    // visible: {opacity: 1, x:1000, transition:{duration:2}},
    // visible: {opacity: 1, x:800, transition:{type:"spring"}},
    // visible: {opacity: 1, x:800, transition:{type:"spring", stiffness:100}},
    visible: {opacity: 1, x:800, transition:{type:"spring", stiffness:100, damping:100}},

    hidden: {opacity: 0},
  }

  return (
    <div className="course">
        <motion.div className="box" 
        variants={variants}
        // initial="hidden"
        // animate="visible"
        // transition={{duration:2}}
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
*/