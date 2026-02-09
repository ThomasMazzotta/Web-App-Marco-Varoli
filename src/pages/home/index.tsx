import { useEffect, useState } from "react"
import Home1 from "@/assets/1_Mos1.webp"
import Home3 from "@/assets/2_Rei14.webp"
import Home2 from "@/assets/2_Tap7.jpg"
import Logo from "@/assets/LogoWhite.webp"
import useMediaQuery from "@/hooks/useMediaQuery"
import { motion } from "framer-motion"
import MobileHome from "./MobileHome"

const animationTime = 0.6
const STORAGE_KEY = "content_license_seen_v1"

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [showLicense, setShowLicense] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY) === "true"
    if (!seen) setShowLicense(true)
  }, [])

  const closeLicense = () => {
    setShowLicense(false)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  return (
    <>
      {/* POPUP CONTENT LICENSE */}
      {showLicense && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/70" onClick={closeLicense} />

          {/* modal */}
          <div className="relative z-10 w-full max-w-2xl overflow-hidden bg-white shadow-xl rounded-2xl">
            <div className="px-5 py-4 border-b">
              <h2 className="text-base font-semibold">Avviso su immagini e contenuti (Content License)</h2>
              <p className="mt-1 text-sm text-gray-600">
                Questo sito è una demo/portfolio e non è il sito ufficiale del fotografo.
              </p>
            </div>

            <div className="px-5 py-4">
              <div className="max-h-[55vh] overflow-auto rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">
                <p className="font-semibold">MEDIA / CONTENT LICENSE (PHOTOGRAPHY)</p>
                <p className="mt-2">
                  Tutte le fotografie, i video e i contenuti visivi presenti in questo sito e/o repository (i “Media”)
                  sono © <span className="font-medium">Marco Varoli</span> – Tutti i diritti riservati.
                </p>

                <p className="mt-2">
                  È concessa a <span className="font-medium">Thomas Mazzotta</span> (lo “Sviluppatore”) l’autorizzazione
                  a mostrare i Media esclusivamente per scopi di demo/portfolio del progetto e a ospitarli solo nella
                  misura necessaria al funzionamento della demo.
                </p>

                <p className="mt-2">
                  Nessun altro diritto è concesso. In particolare, non è consentito copiare, riprodurre, modificare,
                  ridistribuire, pubblicare, vendere, concedere in sublicenza o utilizzare i Media per qualsiasi scopo.
                </p>

                <p className="mt-2">
                  Questo sito demo <span className="font-medium">NON</span> è il sito ufficiale di{" "}
                  <span className="font-medium">Marco Varoli</span>. Nomi, loghi e marchi appartengono ai rispettivi
                  proprietari.
                </p>

                <p className="mt-2">
                  Rimozione: su richiesta di © <span className="font-medium">Marco Varoli</span>, lo Sviluppatore
                  rimuoverà i Media dall’accesso pubblico entro un tempo ragionevole.
                </p>

                <p className="mt-2">
                  Per richieste di licenza sui Media contattare:{" "}
                  <span className="font-medium">info@marco-varoli.com</span>
                </p>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={closeLicense}
                  className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-xl hover:opacity-90"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE CONTENT */}
      <section className="flex items-center justify-center w-full h-full bg-white">
        {isAboveMediumScreens ? (
          <div id="drop-menu" className="relative flex w-11/12 mt-10 md:h-[30rem] justify-center items-center">
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
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
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
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                src={Home2}
                alt="home-image2"
                className="w-full cursor-grabbing"
              />
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: "10px" }}
              animate={{ opacity: 1, x: "0px" }}
              transition={{ duration: animationTime, delay: 1 }}
              style={{
                width: "21vw",
              }}
            >
              <motion.img
                drag
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
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
