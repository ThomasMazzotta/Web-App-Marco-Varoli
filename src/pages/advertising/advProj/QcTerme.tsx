import Terme1 from "@/assets/1_Terme1.webp"
import Terme2 from "@/assets/1_Terme2.webp"
import Terme3 from "@/assets/1_Terme3.webp"
import Terme4 from "@/assets/1_Terme4.webp"
import Terme5 from "@/assets/1_Terme5.webp"

const Terme = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full"
        src={Terme1}
        alt="terme-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Terme2}
        alt="terme-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Terme3}
        alt="terme-3"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Terme4}
        alt="terme-4"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Terme5}
        alt="terme-5"
      />
    </section>
  )
}

export default Terme
