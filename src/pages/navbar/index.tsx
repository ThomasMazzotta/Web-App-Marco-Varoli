import Logo from "@/assets/Logo.webp"
import Home from "@/assets/svg_Home.svg"
import NavLink from "@/pages/navbar/NavLink"
import { Page } from "@/shared/types"
import { Link } from "react-router-dom"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { grid } from "ldrs"
import instagram from "@/assets/svg_instagram.svg"
import linkedin from "@/assets/svg_linkedin.svg"
import mail from "@/assets/svg_mail.png"
import "@/pages/navbar/navbar.css"

type Props = {
  page: Page
  isTopOfPage: boolean
  setPage: (value: Page) => void
}

const Navbar = ({ page, isTopOfPage, setPage }: Props) => {
  const links = [
    Page.Advertising,
    Page.Restaurants,
    Page.Destinations,
    Page.Books,
    Page.Videos,
  ]

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isMenuToggled, setIsMenuToggles] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous === undefined) return
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  //this is used for hamburger animation
  const toggleActive = () => {
    setIsActive(!isActive)
    setIsMenuToggles(!isMenuToggled)
  }

  grid.register()

  return (
    <motion.nav
      className={`fixed w-full py-2 md:py-6 z-50 bg-white ${isTopOfPage ? "" : "shadow-sm"}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="z-50 w-11/12 mx-auto">
        <div className="flex justify-between text-[0.9rem]">
          {/* LOGO AND HOME SVG */}
          <div
            className={isAboveMediumScreens ? "flex items-center" : "hidden"}
          >
            <Link to="/" onClick={() => setPage(Page.Home)}>
              <img src={Logo} alt="logo" className="object-contain w-40" />
            </Link>
          </div>
          <div
            className={!isAboveMediumScreens ? "flex items-center" : "hidden"}
          >
            <Link to="/" onClick={() => setPage(Page.Home)}>
              <img src={Home} alt="home" className="object-contain w-6" />
            </Link>
          </div>
          {/* RIGHT SIDE OF THE NAVBAR BIG SCREENS */}
          {isAboveMediumScreens ? (
            <>
              {/* NAVBAR CENTRALS LINK */}
              <div className="flex gap-6 t">
                {links.map((link, index) => (
                  <NavLink page={page} setPage={setPage} key={index}>
                    {link}
                  </NavLink>
                ))}
              </div>
              <div className="flex gap-6">
                {/* CONTACTS LINK */}
                <Link
                  to={`/${Page.Contacts.toLowerCase()}`}
                  onClick={() => setPage(Page.Contacts)}
                  className={
                    page === Page.Contacts ? "relative custom-before" : ""
                  }
                >
                  {Page.Contacts}
                </Link>

                <Link
                  to={`/${Page.About.toLowerCase()}`}
                  onClick={() => setPage(Page.About)}
                  className={
                    page === Page.About ? "relative custom-before" : ""
                  }
                >
                  {Page.About}
                </Link>
              </div>
            </>
          ) : (
            <svg
              className={`ham hamRotate ham1 z-50 ${isActive ? "active" : ""}`}
              viewBox="0 0 100 100"
              width="40"
              onClick={toggleActive}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          )}
        </div>
      </div>
      {/* TOGGLE MENU FOR SMARTPHONES */}
      <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0 }}
            className="w-full h-screen overflow-hidden bg-white"
          >
            {/* Menu Items */}

            <motion.div
              initial={{
                opacity: 0,
                y: "30px",
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-8 items-center text-[1rem] mt-20 h-screen"
            >
              <Link
                to={Page.Advertising.toLowerCase()}
                onClick={() => {
                  setPage(Page.Advertising)
                  toggleActive()
                }}
                className={
                  page === Page.Advertising ? "relative custom-before" : ""
                }
              >
                {Page.Advertising}
              </Link>
              <Link
                to={Page.Restaurants.toLowerCase()}
                onClick={() => {
                  setPage(Page.Restaurants)
                  toggleActive()
                }}
                className={
                  page === Page.Restaurants ? "relative custom-before" : ""
                }
              >
                {Page.Restaurants}
              </Link>
              <Link
                to={Page.Destinations.toLowerCase()}
                onClick={() => {
                  setPage(Page.Destinations)
                  toggleActive()
                }}
                className={
                  page === Page.Destinations ? "relative custom-before" : ""
                }
              >
                {Page.Destinations}
              </Link>
              <Link
                to={Page.Books.toLowerCase()}
                onClick={() => {
                  setPage(Page.Books)
                  toggleActive()
                }}
                className={page === Page.Books ? "relative custom-before" : ""}
              >
                {Page.Books}
              </Link>
              <Link
                to={Page.Videos.toLowerCase()}
                onClick={() => {
                  setPage(Page.Videos)
                  toggleActive()
                }}
                className={page === Page.Videos ? "relative custom-before" : ""}
              >
                {Page.Videos}
              </Link>
              <Link
                to={Page.Contacts.toLowerCase()}
                onClick={() => {
                  setPage(Page.Contacts)
                  toggleActive()
                }}
                className={
                  page === Page.Contacts ? "relative custom-before" : ""
                }
              >
                {Page.Contacts}
              </Link>
              <Link
                to={Page.About.toLowerCase()}
                onClick={() => {
                  setPage(Page.About)
                  toggleActive()
                }}
                className={page === Page.About ? "relative custom-before" : ""}
              >
                {Page.About}
              </Link>
              <div className="flex items-center justify-center gap-3 pt-6 pb-10">
                <button>
                  <img src={instagram} alt="instagram-link" width={"35px"} />
                </button>

                <button>
                  <img src={linkedin} alt="linkedin-link" width={"35px"} />
                </button>
                <button>
                  <img src={mail} alt="mail-link" width={"35px"} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
