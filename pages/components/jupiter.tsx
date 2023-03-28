interface PlanetProps {
  planetWidth: number,
  planetEyes: number,
  planetMouthWidth: number,
  planetMouthHeight: number,
  solarSystem?: boolean
}

const Jupiter: React.FC<PlanetProps> = (props: PlanetProps) => {
  return (
    <div className={`w-[${props.planetWidth}%] planet jupiter ${props.solarSystem ? 'animate-[front_10s_linear_infinite]' : ''}`}>
      <div className="flex flex-col items-center w-1/3 pt-8">
        <div className="flex justify-between w-full">
          <div className={`w-[${props.planetEyes}px] aspect-square bg-gray-900 rounded-full`} />
          <div className={`w-[${props.planetEyes}px] aspect-square bg-gray-900 rounded-full`} />
        </div>
        <div className={`w-[${props.planetMouthWidth}px] h-[${props.planetMouthHeight}px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-4`} />
      </div>
    </div>
  )
}

export default Jupiter
