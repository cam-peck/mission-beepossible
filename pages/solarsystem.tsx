import Mercury from "./components/mercury"
import Venus from "./components/venus"
import Earth from "./components/earth"
import Mars from "./components/mars"
import Jupiter from "./components/jupiter"
import Saturn from "./components/saturn"
import Uranus from "./components/uranus"
import Neptune from "./components/neptune"
import Pluto from "./components/pluto"

export default function SolarSystem() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="w-[15%] planet bg-sun shadow-sun absolute preserve">
        <div className="flex flex-col items-center w-1/3 pt-16">
          <div className="flex justify-between w-full">
            <div className="w-[10px] h-[10px] bg-gray-900 rounded-full" />
            <div className="w-[10px] h-[10px] bg-gray-900 rounded-full" />
          </div>
          <div className="w-[40px] h-[20px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-4" />
        </div>
        <div className="w-[150%] top-[-20%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_10s_linear_infinite] preserve">
          <Mercury planetWidth={15} planetEyes={5} planetMouthWidth={10} planetMouthHeight={5} solarSystem={true} />
        </div>
        <div className="w-[200%] top-[-40%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_14s_linear_infinite] preserve">
          <Venus planetWidth={20} planetEyes={10} planetMouthWidth={10} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[250%] top-[-60%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_16s_linear_infinite] preserve">
          <Earth planetWidth={25} planetEyes={10} planetMouthWidth={20} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[300%] top-[-80%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_18s_linear_infinite] preserve">
          <Mars planetWidth={15} planetEyes={10} planetMouthWidth={20} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[350%] top-[-100%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_22s_linear_infinite] preserve">
          <Jupiter planetWidth={35} planetEyes={10} planetMouthWidth={20} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[400%] top-[-120%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_26s_linear_infinite] preserve">
          <Saturn planetWidth={30} planetEyes={10} planetMouthWidth={20} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[450%] top-[-140%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_30s_linear_infinite] preserve">
          <Uranus planetWidth={25} planetEyes={10} planetMouthWidth={20} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[500%] top-[-160%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_26s_linear_infinite] preserve">
          <Neptune planetWidth={20} planetEyes={10} planetMouthWidth={20} planetMouthHeight={10} solarSystem={true} />
        </div>
        <div className="w-[550%] top-[-180%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_20s_linear_infinite] preserve">
          <Pluto planetWidth={10} planetEyes={5} planetMouthWidth={10} planetMouthHeight={5} solarSystem={true} />
        </div>
      </div>
    </div>
  )
}
