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

const Advertising = () => {
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
          Advertising Projects
        </motion.h1>
      </div>

      <motion.div
        variants={cardAnimation}
        initial="initial"
        animate="animate"
        className="grid h-screen grid-cols-1 gap-10 gap-y-14 2xl:gap-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        {/* ALLEGRINI CARD */}
        <motion.div
          onClick={() => navigate("/advertising/allegrini-cosmetics")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px] bg-allegrini bg-cover bg-center pb-5 "
        >
          <div className="absolute bottom-[-2rem]">Allegrini Cosmetics</div>
        </motion.div>

        {/* MOS CARD */}
        <motion.div
          onClick={() => navigate("/advertising/mos")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-mos bg-cover bg-center pb-5 "
        >
          <div className="absolute bottom-[-2rem]">MOS</div>
        </motion.div>

        {/* PARMACOTTO CARD */}
        <motion.div
          onClick={() => navigate("/advertising/parmacotto")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-parmacotto bg-cover bg-center pb-5 "
        >
          <div className="absolute bottom-[-2rem]">Parmacotto</div>
        </motion.div>

        {/* PEDRETTI CARD */}
        <motion.div
          onClick={() => navigate("/advertising/pedretti")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-pedretti bg-cover bg-center pb-5 "
        >
          <div className="absolute bottom-[-2rem]">Pedretti</div>
        </motion.div>

        {/* C TERME CARD */}
        <motion.div
          onClick={() => navigate("/advertising/qc-terme")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-qcterme bg-cover bg-center pb-5 "
        >
          <div className="absolute bottom-[-2rem]">QC Terme</div>
        </motion.div>

        {/* SEASE CARD */}
        <motion.div
          onClick={() => navigate("/advertising/sease")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-sease bg-cover bg-center pb-5 "
        >
          <div className="absolute bottom-[-2rem]">Sease</div>
        </motion.div>

        {/* BARILLA CARD */}
        <motion.div
          onClick={() => navigate("/advertising/barilla")}
          whileHover={{ scale: hoverScale }}
          transition={{ duration: 0.5 }}
          variants={cardAnimation}
          className="cursor-pointer min-w-[300px] min-h-[200px]  bg-barilla bg-cover bg-center "
        >
          <div className="absolute bottom-[-2rem]">Barilla</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Advertising
