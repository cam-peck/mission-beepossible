interface PlanetProps {
  planetWidth: number,
  planetEyes: number,
  planetMouthWidth: number,
  planetMouthHeight: number,
  solarSystem?: boolean
}

const Earth: React.FC<PlanetProps> = (props: PlanetProps) => {

  const width = props.planetWidth;
  const eyes = props.planetEyes;
  const mouthWidth = props.planetMouthWidth;
  const mouthHeight = props.planetMouthHeight;
  const solarSystem = props.solarSystem;

  return (
    <div className={`w-[${width}%] planet bg-earth earth ${solarSystem ? 'animate-[front_16s_linear_infinite]' : ''}`}>
      <div className="flex flex-col items-center w-1/3 pt-8">
        <div className="flex justify-between w-full">
          <div className={`w-[${eyes}px] aspect-square bg-gray-900 rounded-full`} />
          <div className={`w-[${eyes}px] aspect-square bg-gray-900 rounded-full`} />
        </div>
        <div className={`w-[${mouthWidth}px] h-[${mouthHeight}px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-4`} />
      </div>
    </div>
  )
}

export default Earth
