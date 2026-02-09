import { AnimatePresence, motion } from "framer-motion"
import { helix } from "ldrs"
import Logo from "@/assets/LogoBlack.webp"
import mainPicture from "@/assets/2_Tap7.jpg"

helix.register()

const MobileHome = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        {/*BUBBLE ANIMATION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="last:w-full absolute  overflow-hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[50%]"
        >
          <l-helix size="550" speed="50" color="#EBCEDA"></l-helix>
        </motion.div>

        <motion.div
          key="home"
          className="relative z-10 flex items-center justify-center h-screen "
          exit={{ opacity: 0 }}
        >
          <motion.div className="flex flex-col items-center w-full">
            <motion.div
              initial={{ x: "50px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[3rem] font-black w-1full mb-4"
              exit={{ opacity: 0 }}
            >
              <img src={Logo} alt="Logo" width="320px" />
            </motion.div>

            <motion.div
              className="flex justify-center mb-7"
              initial={{ y: "50px" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mt-5 overflow-hidden border border-pink-200 w-52 h-52">
                <motion.img
                  src={mainPicture}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: "50px" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[1.5rem]"
            >
              PHOTOGRAPHER
            </motion.h2>
            <motion.h2
              initial={{ y: "50px" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[1.0rem]"
            >
              Food and Advertising
            </motion.h2>
            {/* <motion.button
              initial={{ y: "50px" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[1.0rem] border border-black bg-myTextPrimary shadow-myTextPrimary mt-14"
            >
              <p className="text-[1.2rem] px-3 py-2 text-white ">Projects</p>
            </motion.button> */}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/*  */}
    </section>
  )
}

export default MobileHome
