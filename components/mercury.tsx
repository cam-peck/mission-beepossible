interface PlanetProps {
  solarSystem?: boolean
}

const Mercury: React.FC<PlanetProps> = (props: PlanetProps) => {
  return (
    <div className={`w-[12%] planet bg-mercury mercury ${props.solarSystem? 'animate-[front_10s_linear_infinite]' : ''}`}>
      <div className="flex flex-col items-center w-1/3 pt-3">
        <div className="flex justify-between w-full">
          <div className={`w-[3px] aspect-square bg-gray-900 rounded-full`} />
          <div className={`w-[3px] aspect-square bg-gray-900 rounded-full`} />
        </div>
      <div className={`w-[15px] h-[7px] rounded-b-full border-b-2 border-l-2 border-gray-900 border-r-2 mt-1`} />
      </div>
    </div>
  )
}

export default Mercury
