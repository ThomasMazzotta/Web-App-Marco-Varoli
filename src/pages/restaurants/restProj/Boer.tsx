import Boer1 from "@/assets/2_Boer1.webp"
import Boer2 from "@/assets/2_Boer2.webp"
import Boer3 from "@/assets/2_Boer3.webp"
import Boer4 from "@/assets/2_Boer4.webp"

const Boer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center h-screen gap-2">
      <img
        className="object-contain max-w-full max-h-full"
        src={Boer1}
        alt="boer-1"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Boer2}
        alt="boer-2"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Boer3}
        alt="boer-3"
      />
      <img
        className="object-contain max-w-full max-h-full"
        src={Boer4}
        alt="boer-4"
      />
    </section>
  )
}

export default Boer
