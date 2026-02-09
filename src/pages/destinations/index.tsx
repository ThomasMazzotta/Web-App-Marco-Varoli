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

const Destinations = () => {
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
          Destinations Projects
        </motion.h1>
      </div>

      <motion.div
        variants={cardAnimation}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 gap-10 2xl:gap-0 sm:grid-cols-2 gap-y-14"
      >
        {/* ANGIOLIERI */}
        <motion.div
          onClick={() => navigate("/destinations/angiolieri")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] h-[300px] xl:h-[450px] bg-angiolieri bg-cover bg-center"
        >
          <div className="absolute bottom-[-2rem]">Angiolieri</div>
        </motion.div>

        {/* AUBERGE DE LA MAISON */}
        <motion.div
          onClick={() => navigate("/destinations/auberge-de-la-maison")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] h-[300px] xl:h-[450px] bg-maison bg-cover bg-center "
        >
          <div className="absolute bottom-[-2rem]">Auberge De La Maison</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Destinations
