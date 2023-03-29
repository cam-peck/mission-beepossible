import { useState, useEffect } from 'react';
import Planet from '../components/planet';
// import SolarSystem from './solarsystem';

type planets = {
  planetName: string;
  visibleRings: boolean;
};

const planetsList: planets[] = [
  {
    planetName: 'Mercury',
    visibleRings: false,
  },
  {
    planetName: 'Venus',
    visibleRings: false,
  },
  {
    planetName: 'Earth',
    visibleRings: false,
  },
  {
    planetName: 'Mars',
    visibleRings: false,
  },
  {
    planetName: 'Jupiter',
    visibleRings: false,
  },
  {
    planetName: 'Saturn',
    visibleRings: true,
  },
  {
    planetName: 'Uranus',
    visibleRings: true,
  },
  {
    planetName: 'Neptune',
    visibleRings: false,
  },
  {
    planetName: 'Pluto',
    visibleRings: false,
  },
];

export default function Home() {
  // const [page, setPage] = useState<string>('home')
  const [planets, setPlanets] = useState<planets[]>();

  useEffect(() => {
    setPlanets(planetsList);
  }, []);
  // replace SolarSystem component load with the solar-system code for the home page
  const renderPlanets = (planets: planets[]) => {
    let width = 100;
    let top = 0;
    let animation = 6;

    const orbitPlanets = planets.map((planets) => {
      width += 50;
      top -= 25;
      animation += 4;

      const style = {
        width: width + '%',
        top: top + '%',
        animationDuration: animation + 's',
      };

      const planetAnimation = animation + 's';
      const name = planets.planetName.toLowerCase();

      return (
        <div
          className="aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_linear_infinite] preserve"
          style={style}
          key={planets.planetName}
        >
          <Planet
            planetName={name}
            visibleRings={planets.visibleRings}
            planetEyes={'15%'}
            planetMouthHeight={'10%'}
            planetMouthWidth={'50%'}
            animationDuration={planetAnimation}
          />
        </div>
      );
    });
    return orbitPlanets;
  };

  if (!planets) {
    return <h1>LOADING. . .</h1>;
  } else {
    return (
      <main>
        <div className="stars animate-[twinkle_300s_linear_infinite]" />
        <div className="flex items-center justify-center h-screen bg-gray-700">
          <div className="w-[15%] aspect-square planet bg-sun shadow-sun absolute preserve">
            <div className="flex flex-col items-center w-1/2 pt-4 md:pt-8 lg:pt-16 lg:w-1/3">
              <div className="flex justify-between w-full">
                <div className="w-[5px] lg:w-[10px] aspect-square bg-gray-900 rounded-full" />
                <div className="w-[5px] lg:w-[10px] aspect-square bg-gray-900 rounded-full" />
              </div>
              <div className="w-[20px] lg:w-[40px] h-[10px] lg:h-[20px] rounded-b-full border-b-2 border-l-2 border-r-2 lg:border-b-4 lg:border-l-4 border-gray-900 lg:border-r-4 mt-2 lg:mt-4" />
            </div>
            {renderPlanets(planets)}
          </div>
        </div>
      </main>
    );
  }
}
