import Video1 from "@/assets/5_Luca1.mp4"
import ReactPlayer from "react-player/lazy"
import Loader from "../loader"

const Videos = () => {
  return (
    <section className="flex flex-col h-screen items-center justify-center  pb-[4.5rem] w-11/12 mx-auto ">
      <h2 className="text-[1.6rem] pb-6">Luca</h2>
      <div className="max-w-[700px]">
        <ReactPlayer
          width="100%"
          height="100%"
          fallback={<Loader />}
          controls={true}
          url={Video1}
        ></ReactPlayer>
      </div>
    </section>
  )
}

export default Videos
