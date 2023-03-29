interface PlanetProps {
  solarSystem?: boolean
}

const Venus: React.FC<PlanetProps> = (props: PlanetProps) => {
  return (
    <div className={`w-[17%] planet bg-venus venus ${props.solarSystem ? 'animate-[front_14s_linear_infinite]' : ''}`}>
      <div className="flex flex-col items-center w-1/3 pt-4">
        <div className="flex justify-between w-full">
          <div className={`w-[8px] aspect-square bg-gray-900 rounded-full`} />
          <div className={`w-[8px] aspect-square bg-gray-900 rounded-full`} />
        </div>
        <div className={`w-[15px] h-[8px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-2`} />
      </div>
    </div>
  )
}

export default Venus