interface PlanetProps {
  planetName: string;
  visibleRings: boolean;
  planetWidth: string;
  planetEyes: string;
  planetMouthWidth: string;
  planetMouthHeight: string;
}

const Planet: React.FC<PlanetProps> = (props: PlanetProps) => {
  const planetStyle = {
    width: props.planetWidth,
  };
  const eyesStyle = {
    width: props.planetEyes,
  };
  const mouthStyle = {
    width: props.planetMouthWidth,
    height: props.planetMouthHeight,
  };

  return (
    <div
      className={`planet ${'bg-' + props.planetName} ${
        props.planetName
      } animate-[front_16s_linear_infinite]`}
      style={planetStyle}
    >
      <div className="flex flex-col items-center w-1/3 pt-8">
        <div className="flex justify-between w-full">
          <div
            className="bg-gray-900 rounded-full aspect-square"
            style={eyesStyle}
          />
          <div
            className="bg-gray-900 rounded-full aspect-square"
            style={eyesStyle}
          />
        </div>
        <div
          className="mt-4 border-b-4 border-l-4 border-r-4 border-gray-900 rounded-b-full"
          style={mouthStyle}
        />
      </div>
    </div>
  );
};

export default Planet;
