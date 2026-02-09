import Clients from "@/assets/z_Clients.webp"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="flex flex-col w-11/12 gap-10 pb-20 mx-auto pt-28 sm:flex-row">
      <motion.div
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col w-full gap-10 "
      >
        {/* BIO */}
        <h2 className="text-[1.8rem] ">ABOUT ME</h2>
        <p className="text-justify">
          Marco Varoli,{" "}
          <span className="font-bold ">food and advertising photographer</span>.
          In 2011 he attended a photography master's degree at the European
          Institute of Design (IED) where he focused his attention on food
          photography attracted by the{" "}
          <span className="font-bold ">beauty of food</span> and its strength to
          convey stories about people, places and cultures.
        </p>
        <p className="text-justify">
          His style is defined by essential settings, clean compositions, the
          exaltation of the <span className="font-bold ">textures</span> and{" "}
          <span className="font-bold ">colors </span>
          offered by the subjects. In 2012, he opened his own studio in Milan,
          and expanded his professional field to advertising by obtaining
          assignments for{" "}
          <span className="font-bold ">advertising campaigns</span> for globally
          recognized brands, among others,{" "}
          <span className="font-bold ">
            Ikea, Veuve Clicquot, & Iwc Watches
          </span>
          .
        </p>
        <p className="text-justify">
          In 2015 and 2017, Marco's work was elected for the{" "}
          <span className="font-bold ">International Foodphotofestival</span>{" "}
          competition in Vejle, Denmark, which brings together the best food
          photographers in the world. Despite his passion about food, he works
          also in{" "}
          <span className="font-bold ">
            advertising, interiors and portraits photography
          </span>
          .
        </p>
        {/* AWARDS */}
        <h2 className="text-[1.8rem]">AWARDS</h2>
        <ul className="">
          <li>2022 ✤ 17th Black & white Spider 3rd place Advertising</li>
          <li>2019 ✤ 14th Black & white Spider Honorable Mention</li>
          <li>2019 ✤ Foodphotofestival Finalist</li>
        </ul>
        {/* PUBLICATIONS */}
        <h2 className="text-[1.8rem]">PUBLICATIONS</h2>
        <ul className="">
          <li>2016 ✤ Wild Mixology - Ed. Mondadori</li>
          <li>2019 ✤ Finchè c'è trippa Ed. Guido Tommasi</li>
          <li>2021 ✤ Eolie, isole slow - Ed. Slow Food Editore</li>
          <li>2021 ✤ L'arte del gelato - Ed. Slow Food Editore</li>
          <li>2022 ✤ Elba e arcipelago toscano - Ed. Slow Food Editore</li>
          <li>2022 ✤ Sora Lella e la cucina romana - Giunti Editore</li>
        </ul>
      </motion.div>
      {/* <div className="hidden sm:inline w-[2px] bg-myTextPrimary min-h-screen mx-auto"></div> */}
      {/* CLIENTS */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="sticky flex justify-center top-28 xl:h-full xl:items-center">
          <img src={Clients} alt="clients" />
        </div>
      </motion.div>
    </section>
  )
}

export default About
