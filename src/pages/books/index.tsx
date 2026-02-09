import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const cardAnimation = {
  initial: {
    x: "-2rem",
    opacity: "0",
  },
  animate: {
    x: "0rem",
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
}

const hoverScale = 1.04

const Books = () => {
  const navigate = useNavigate()
  return (
    <section className="w-11/12 mx-auto pt-28 pb-[4.5rem]">
      <div className="">
        <motion.h1
          variants={cardAnimation}
          initial="initial"
          animate="animate"
          className="text-[1.6rem] pb-6"
        >
          Books Projects
        </motion.h1>
      </div>

      <motion.div
        variants={cardAnimation}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 gap-10 2xl:gap-0 sm:grid-cols-2 gap-y-14"
      >
        {/* ANNAMO BENE */}
        <motion.div
          onClick={() => navigate("/Books/annamo-bene")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="min-w-[300px] h-[300px] xl:h-[450px] bg-annamo bg-cover bg-center"
        >
          <div className="absolute bottom-[-2rem]">Annamo Bene</div>
        </motion.div>

        {/* I TRABOCCHI */}
        <motion.div
          onClick={() => navigate("/Books/i-trabocchi")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="min-w-[300px] h-[300px] xl:h-[450px] bg-trabocchi bg-cover bg-cente "
        >
          <div className="absolute bottom-[-2rem]">I Trabocchi</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Books
