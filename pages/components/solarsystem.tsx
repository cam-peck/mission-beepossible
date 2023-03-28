import Mercury from "./mercury"

export default function SolarSystem() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-700">
      <div className="w-[15%] planet bg-sun shadow-sun absolute preserve">
        <div className="flex flex-col items-center w-1/3 pt-16">
          <div className="w-full flex justify-between">
            <div className="w-[10px] h-[10px] bg-gray-900 rounded-full" />
            <div className="w-[10px] h-[10px] bg-gray-900 rounded-full" />
          </div>
          <div className="w-[40px] h-[20px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-4" />
        </div>
        <div className="w-[150%] aspect-square margin-auto rounded-full border border-4 border-dotted border-gray-100 absolute animate-[circle_10s_linear_infinite]">
          <Mercury />
        </div>
      </div>
    </div>
  )
}
