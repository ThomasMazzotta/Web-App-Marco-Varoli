import { useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./pages/navbar"
import Loader from "./pages/loader"
import Advertising from "./pages/advertising"
import Restaurants from "./pages/restaurants"
import Destinations from "./pages/destinations"
import Allegrini from "./pages/advertising/advProj/Allegrini"
import Barilla from "./pages/advertising/advProj/Barilla"
import Mos from "./pages/advertising/advProj/Mos"
import ParmaCotto from "./pages/advertising/advProj/Parmacotto"
import Pedretti from "./pages/advertising/advProj/Pedretti"
import Terme from "./pages/advertising/advProj/QcTerme"
import Sease from "./pages/advertising/advProj/Sease"
import Romero from "./pages/restaurants/restProj/Romero"
import Boer from "./pages/restaurants/restProj/Boer"
import Rei from "./pages/restaurants/restProj/Rei"
import Magenes from "./pages/restaurants/restProj/Magenes"
import Tap from "./pages/restaurants/restProj/Tap"
import Maison from "./pages/destinations/destProj/Maison"
import Angiolieri from "./pages/destinations/destProj/Angiolieri"
import Books from "./pages/books"
import Annamo from "./pages/books/booksProj/Annamo"
import Trabocchi from "./pages/books/booksProj/Trabocchi"
import {
  AdvProject,
  BooksProject,
  DestProject,
  Page,
  RestProject,
} from "@/shared/types"
import Videos from "./pages/videos"
import About from "./pages/about/About"
import Contacts from "./pages/contacts"

function App() {
  const [page, setPage] = useState(Page.Home)
  const [loading, setLoading] = useState(false)
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const location = useLocation()

  //this hook controls the Loading animation
  useEffect(() => {
    if (location.pathname === "/") return
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [location])

  //this hook controls the position in the y axis
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // //Every page starts at top
  // const useScrollToTop = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0)
  //   }, [])
  // }

  // useScrollToTop()

  return (
    <>
      <Navbar page={page} setPage={setPage} isTopOfPage={isTopOfPage} />
      {loading ? (
        <Loader></Loader>
      ) : (
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />
          {/* ADV MAIN */}
          <Route
            path={`/${Page.Advertising.toLowerCase()}`}
            element={<Advertising />}
          />
          {/* ADV PROJECTS */}
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Allegrini}`}
            element={<Allegrini />}
          />
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Barilla}`}
            element={<Barilla />}
          />
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Mos}`}
            element={<Mos />}
          />
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Parmacotto}`}
            element={<ParmaCotto />}
          />
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Pedretti}`}
            element={<Pedretti />}
          />
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Terme}`}
            element={<Terme />}
          />
          <Route
            path={`/${Page.Advertising.toLowerCase()}/${AdvProject.Sease}`}
            element={<Sease />}
          />
          {/* RESTAURANTS MAIN */}
          <Route
            path={`/${Page.Restaurants.toLowerCase()}`}
            element={<Restaurants />}
          />
          {/* RESTAURANTS PROJECTS */}
          <Route
            path={`/${Page.Restaurants.toLowerCase()}/${RestProject.Romero}`}
            element={<Romero />}
          />
          <Route
            path={`/${Page.Restaurants.toLowerCase()}/${RestProject.Boer}`}
            element={<Boer />}
          />
          <Route
            path={`/${Page.Restaurants.toLowerCase()}/${RestProject.Rei}`}
            element={<Rei />}
          />
          <Route
            path={`/${Page.Restaurants.toLowerCase()}/${RestProject.Magenes}`}
            element={<Magenes />}
          />
          <Route
            path={`/${Page.Restaurants.toLowerCase()}/${RestProject.Tap}`}
            element={<Tap />}
          />
          {/* DESTINATIONS MAIN */}
          <Route
            path={`/${Page.Destinations.toLowerCase()}`}
            element={<Destinations />}
          />
          {/* DESTINATIONS PROJECTS */}
          <Route
            path={`/${Page.Destinations.toLowerCase()}/${DestProject.Maison}`}
            element={<Maison />}
          />
          <Route
            path={`/${Page.Destinations.toLowerCase()}/${DestProject.Angiolieri}`}
            element={<Angiolieri />}
          />
          {/* BOOKS */}
          <Route path={`/${Page.Books.toLowerCase()}`} element={<Books />} />
          {/* BOOKS PROJECTS */}
          <Route
            path={`/${Page.Books.toLowerCase()}/${BooksProject.Annamo}`}
            element={<Annamo />}
          />
          <Route
            path={`/${Page.Books.toLowerCase()}/${BooksProject.Trabocchi}`}
            element={<Trabocchi />}
          />
          {/* VIDEOS */}
          <Route path={`/${Page.Videos.toLowerCase()}`} element={<Videos />} />
          {/* ABOUT */}
          <Route path={`/${Page.About.toLowerCase()}`} element={<About />} />
          {/* CONTACTS */}
          <Route
            path={`/${Page.Contacts.toLowerCase()}`}
            element={<Contacts />}
          />
        </Routes>
      )}
    </>
  )
}

export default App
