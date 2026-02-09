import { Page } from "@/shared/types"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

type Props = {
  children: Page
  page: Page
  setPage: (value: Page) => void
}

const NavLink = ({ children, page, setPage }: Props) => {
  const lowerCasePage = children.toLowerCase()

  return (
    <Link to={lowerCasePage}>
      <motion.button
        initial={{ fontWeight: "400" }}
        whileHover={{ fontWeight: "600" }}
        className={`${children === page ? "relative custom-before" : ""} `}
        onClick={() => setPage(children)}
      >
        {children}
      </motion.button>
    </Link>
  )
}

export default NavLink
