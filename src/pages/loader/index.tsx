import { grid } from "ldrs"
import { motion } from "framer-motion"

grid.register()

const Loader = () => {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      //change duration to 1
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex items-center justify-center h-screen"
    >
      <l-grid size="60" speed="1.5" color="black"></l-grid>
    </motion.section>
  )
}

export default Loader
