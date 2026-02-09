import Pedretti1 from "@/assets/1_Pedretti1.webp"
import Pedretti2 from "@/assets/1_Pedretti2.webp"
import Pedretti3 from "@/assets/1_Pedretti3.webp"
import Pedretti4 from "@/assets/1_Pedretti4.webp"
import Pedretti5 from "@/assets/1_Pedretti5.webp"

const Pedretti = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full"
        src={Pedretti1}
        alt="pedretti-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Pedretti2}
        alt="pedretti-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Pedretti3}
        alt="pedretti-3"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Pedretti4}
        alt="pedretti-4"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Pedretti5}
        alt="pedretti-5"
      />
    </section>
  )
}

export default Pedretti
