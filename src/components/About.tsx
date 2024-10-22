import foto  from "../assets/pasFoto.png"
import { TEXT_ABOUT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About Me</h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={foto} alt="" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <p className="my-2 max-w-xl py-6">{TEXT_ABOUT}</p>
            </div>
        </div>
    </div>
  )
}

export default About