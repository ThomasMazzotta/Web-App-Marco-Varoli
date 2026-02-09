import Trabocchi1 from "@/assets/4_Trabocchi1.webp"
import Trabocchi2 from "@/assets/4_Trabocchi2.webp"
import Trabocchi3 from "@/assets/4_Trabocchi3.webp"
import Trabocchi4 from "@/assets/4_Trabocchi4.webp"
import Trabocchi5 from "@/assets/4_Trabocchi5.webp"
import Trabocchi6 from "@/assets/4_Trabocchi6.webp"

const Trabocchi = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2 pt-[4.4rem]">
      <img
        className="object-contain max-w-full max-h-full"
        src={Trabocchi1}
        alt="trabocchi-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Trabocchi2}
        alt="trabocchi-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Trabocchi3}
        alt="trabocchi-3"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Trabocchi4}
        alt="trabocchi-4"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Trabocchi5}
        alt="trabocchi-5"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Trabocchi6}
        alt="trabocchi-6"
      />
    </section>
  )
}

export default Trabocchi
