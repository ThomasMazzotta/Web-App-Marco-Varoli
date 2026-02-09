import ParmaCotto1 from "@/assets/1_ParmaCotto1.webp"
import ParmaCotto2 from "@/assets/1_ParmaCotto2.webp"
import ParmaCotto3 from "@/assets/1_ParmaCotto3.webp"

const ParmaCotto = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full "
        src={ParmaCotto1}
        alt="parmacotto-1"
      />
      <img
        className="object-contain max-w-full max-h-full "
        src={ParmaCotto2}
        alt="parmacotto-2"
      />
      <img
        className="object-contain max-w-full max-h-full "
        src={ParmaCotto3}
        alt="parmacotto-3"
      />
    </section>
  )
}

export default ParmaCotto
