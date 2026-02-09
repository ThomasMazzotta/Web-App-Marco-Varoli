import Barilla1 from "@/assets/1_Barilla1.webp"
import Barilla2 from "@/assets/1_Barilla2.webp"
import Barilla3 from "@/assets/1_Barilla3.webp"
import Barilla4 from "@/assets/1_Barilla4.webp"

const Barilla = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full "
        src={Barilla1}
        alt="barilla-1"
      />
      <img
        className="object-contain max-w-full max-h-full "
        src={Barilla2}
        alt="barilla-2"
      />
      <img
        className="object-contain max-w-full max-h-full "
        src={Barilla3}
        alt="barilla-3"
      />
      <img
        className="object-contain max-w-full max-h-full "
        src={Barilla4}
        alt="barilla-4"
      />
    </section>
  )
}

export default Barilla
