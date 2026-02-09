import Allegrini1 from "@/assets/1_Allegrini1.webp"
import Allegrini2 from "@/assets/1_Allegrini2.webp"
import Allegrini3 from "@/assets/1_Allegrini3.webp"
import Allegrini4 from "@/assets/1_Allegrini4.webp"
import Allegrini5 from "@/assets/1_Allegrini5.webp"
import Allegrini6 from "@/assets/1_Allegrini6.webp"

const Allegrini = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen">
      <img
        className="object-contain max-w-full max-h-full"
        src={Allegrini1}
        alt="allegrini-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Allegrini2}
        alt="allegrini-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Allegrini3}
        alt="allegrini-3"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Allegrini4}
        alt="allegrini-4"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Allegrini5}
        alt="allegrini-5"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Allegrini6}
        alt="allegrini-6"
      />
    </section>
  )
}

export default Allegrini
