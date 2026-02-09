import Sease1 from "@/assets/1_Sease1.webp"
import Sease2 from "@/assets/1_Sease2.webp"
import Sease3 from "@/assets/1_Sease3.webp"
import Sease4 from "@/assets/1_Sease4.webp"

const Sease = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full"
        src={Sease1}
        alt="sease-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Sease2}
        alt="sease-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Sease3}
        alt="sease-3"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Sease4}
        alt="sease-4"
      />
    </section>
  )
}

export default Sease
