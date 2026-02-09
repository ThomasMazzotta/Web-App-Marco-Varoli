import Home1 from "@/assets/1_Mos1.webp"
import Home3 from "@/assets/2_Rei14.webp"
import Home2 from "@/assets/2_Tap7.jpg"
import Logo from "@/assets/LogoWhite.webp"
import useMediaQuery from "@/hooks/useMediaQuery"
import { motion } from "framer-motion"
import MobileHome from "./MobileHome"

const animationTime = 0.6

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <>
      <section className="flex items-center justify-center w-full h-full bg-white">
        {isAboveMediumScreens ? (
          <div
            id="drop-menu"
            className="relative flex w-11/12 mt-10 md:h-[30rem] justify-center items-center"
          >
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: "-20px" }}
              animate={{ opacity: 1, x: "0px" }}
              transition={{ duration: animationTime, delay: 0.5 }}
              style={{
                width: "21vw",

                zIndex: 20,
              }}
            >
              <motion.img
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                src={Home1}
                alt="home-image1"
                className="w-full cursor-grabbing"
              />
            </motion.div>
            {/* MIDDLE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: "-30px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: animationTime, delay: 1.3 }}
              style={{
                width: "20vw",

                zIndex: 0,
              }}
            >
              <motion.img
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                src={Home2}
                alt="home-image2"
                className="w-full cursor-grabbing"
              />
            </motion.div>
            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: "10px" }}
              animate={{ opacity: 1, x: "0px" }}
              transition={{
                duration: animationTime,
                delay: 1,
              }}
              style={{
                width: "21vw",
              }}
            >
              <motion.img
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                src={Home3}
                alt="home-image3"
                className="w-full cursor-grabbing"
              />
            </motion.div>
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: animationTime,
                delay: 1.8,
                ease: "anticipate",
              }}
              style={{
                width: "50vw",
                position: "absolute",

                zIndex: 30,
              }}
            >
              <img src={Logo} alt="logo" className="w-full" />
            </motion.div>
          </div>
        ) : (
          <MobileHome />
        )}
      </section>
    </>
  )
}

export default Home
