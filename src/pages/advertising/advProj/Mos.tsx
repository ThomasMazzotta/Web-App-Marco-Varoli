import Mos1 from "@/assets/1_Mos1.webp"
import Mos2 from "@/assets/1_Mos2.webp"
import Mos3 from "@/assets/1_Mos3.webp"

const Mos = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full"
        src={Mos1}
        alt="mos-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Mos2}
        alt="mos-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Mos3}
        alt="mos-3"
      />
    </section>
  )
}

export default Mos
