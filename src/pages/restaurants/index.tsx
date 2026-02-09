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

const Restaurants = () => {
  const navigate = useNavigate()
  return (
    <section className="w-11/12 pb-[4.5rem] mx-auto pt-28">
      <div className="">
        <motion.h1
          variants={cardAnimation}
          initial="initial"
          animate="animate"
          className="text-[1.6rem]  pb-6"
        >
          Restaurants Projects
        </motion.h1>
      </div>

      <motion.div
        variants={cardAnimation}
        initial="initial"
        animate="animate"
        className="grid h-screen grid-cols-1 gap-10 gap-y-14 2xl:gap-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        {/* ROMERO CARD */}
        <motion.div
          onClick={() => navigate("/restaurants/el-romero")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] bg-romero bg-cover bg-center  pb-5 "
        >
          <div className="absolute bottom-[-2rem]">El Romero</div>
        </motion.div>

        {/* BOER CARD */}
        <motion.div
          onClick={() => navigate("/restaurants/eugenio-boer")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] bg-boer bg-cover bg-center pb-5"
        >
          <div className="absolute bottom-[-2rem]">Eugenio Boer</div>
        </motion.div>

        {/* REI */}
        <motion.div
          onClick={() => navigate("/restaurants/la-rei")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] bg-rei bg-cover bg-center pb-5"
        >
          <div className="absolute bottom-[-2rem]">La Rei</div>
        </motion.div>

        <motion.div
          onClick={() => navigate("/restaurants/magenes")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] bg-magenes bg-cover bg-center pb-5"
        >
          <div className="absolute bottom-[-2rem]">Magenes</div>
        </motion.div>

        <motion.div
          onClick={() => navigate("/restaurants/taproom")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-taproom bg-cover bg-center pb-5"
        >
          <div className="absolute bottom-[-2rem]">Taproom</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Restaurants
