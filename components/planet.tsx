interface PlanetProps {
  planetName: string;
  visibleRings: boolean;
  planetEyes: string;
  planetMouthWidth: string;
  planetMouthHeight: string;
  animationDuration: string;
}

const Planet: React.FC<PlanetProps> = (props: PlanetProps) => {
  const planetStyle = {
    animationDuration: props.animationDuration,
  };
  const eyesStyle = {
    width: props.planetEyes,
  };
  const mouthStyle = {
    width: props.planetMouthWidth,
    height: props.planetMouthHeight,
  };

  function renderRing() {
    if (props.visibleRings) {
      return <div className={`${props.planetName}-ring`} />;
    }
  }

  return (
    <div
      className={`planet bg-${props.planetName} ${props.planetName} animate-[front_linear_infinite]`}
      style={planetStyle}
    >
      {renderRing()}
      <div className="flex flex-col items-center w-1/3 pt-2 md:pt-4 lg:pt-8">
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
          className="mt-1 border-b-2 border-l-2 border-r-2 border-gray-900 rounded-b-full lg:border-b-4 lg:border-l-4 lg:border-r-4 lg:mt-4"
          style={mouthStyle}
        />
      </div>
    </div>
  );
};

export default Planet;
