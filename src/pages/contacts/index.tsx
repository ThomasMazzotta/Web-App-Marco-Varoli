import instagram from "@/assets/svg_instagram.svg"
import behance from "@/assets/svg_behance.svg"
import linkedin from "@/assets/svg_linkedin.svg"
import mail from "@/assets/svg_mail.png"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

const Contacts = () => {
  const [scope, animate] = useAnimate()
  const animationTime = 0.4

  const handleAnimate = async () => {
    await animate(
      "#behance",
      { rotate: 0, y: 0, opacity: [0, 100] },
      { duration: animationTime }
    )
    await animate(
      "#instagram",
      { rotate: 0, x: 0, opacity: [0, 100] },
      { duration: animationTime }
    )
    await animate(
      "#linkedin",
      { rotate: 0, x: 0, opacity: [0, 100] },
      { duration: animationTime }
    )
    await animate(
      "#mail",
      { rotate: 0, y: 0, opacity: [0, 100] },
      { duration: animationTime }
    )
  }

  useEffect(() => {
    handleAnimate()
  }, [])

  return (
    <section>
      <div className="w-11/12 h-screen mx-auto">
        <div
          ref={scope}
          className="relative flex items-center h-screen gap-3 justify-evenly"
        >
          <motion.div
            id="instagram"
            whileHover={{ scale: 1.1 }}
            initial={{ x: "-150px", rotate: -110, opacity: 0 }}
          >
            <img
              src={instagram}
              alt="instagram-logo"
              width="200px"
              onClick={() =>
                window.open("https://www.instagram.com/marco_varoli/", "_blank")
              }
            />
          </motion.div>
          <motion.div
            id="behance"
            whileHover={{ scale: 1.1 }}
            initial={{ y: "100px", rotate: 78, opacity: 0 }}
            onClick={() =>
              window.open("https://www.behance.net/marcovaroli", "_blank")
            }
          >
            <img src={behance} alt="behance-logo" width="200px" />
          </motion.div>
          <motion.div
            id="linkedin"
            whileHover={{ scale: 1.1 }}
            initial={{ x: "100px", rotate: 75, opacity: 0 }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/marcovaroli/", "_blank")
            }
          >
            <img src={linkedin} alt="linkedin-logo" width="200px" />
          </motion.div>
          <motion.div
            id="mail"
            whileHover={{ scale: 1.1 }}
            initial={{ y: "100px", rotate: 75, opacity: 0 }}
            onClick={() =>
              window.open("mailto:info@marco-varoli.com", "_blank")
            }
          >
            <img src={mail} alt="mail-logo" width="200px" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
