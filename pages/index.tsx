import { useState, useEffect } from 'react';
import Planet from '../components/planet';
import { solarSystemPlanet } from '@/lib/types';

const planetsList: solarSystemPlanet[] = [
  {
    planetName: 'Mercury',
    visibleRings: false,
    planetWidth: 'w-16',
  },
  {
    planetName: 'Venus',
    visibleRings: false,
    planetWidth: 'w-20',
  },
  {
    planetName: 'Earth',
    visibleRings: false,
    planetWidth: 'w-24',
  },
  {
    planetName: 'Mars',
    visibleRings: false,
    planetWidth: 'w-20',
  },
  {
    planetName: 'Jupiter',
    visibleRings: false,
    planetWidth: 'w-44',
  },
  {
    planetName: 'Saturn',
    visibleRings: true,
    planetWidth: 'w-36',
  },
  {
    planetName: 'Uranus',
    visibleRings: true,
    planetWidth: 'w-32',
  },
  {
    planetName: 'Neptune',
    visibleRings: false,
    planetWidth: 'w-28',
  },
  {
    planetName: 'Pluto',
    visibleRings: false,
    planetWidth: 'w-20',
  },
];

export default function Home() {
  // const [page, setPage] = useState<string>('home')
  const [planets, setPlanets] = useState<solarSystemPlanet[]>();

  useEffect(() => {
    setPlanets(planetsList);
  }, []);
  // replace SolarSystem component load with the solar-system code for the home page
  const renderPlanets = (planets: solarSystemPlanet[]) => {
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
            planetWidth={planets.planetWidth}
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
          <div className="w-[15%] aspect-square planet sun absolute preserve">
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
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl w-full text-center absolute top-4">
          Welcome to the Solar System!
        </h1>
        <nav className="w-full h-12 absolute bottom-4 md:bottom-12 flex justify-center">
          <ul className="w-4/5 h-full md:h-4/5 flex flex-wrap justify-around text-white">
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/mercury">
                Mercury
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/venus">
                Venus
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/earth">
                Earth
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/mars">
                Mars
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/jupiter">
                Jupiter
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/saturn">
                Saturn
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/uranus">
                Uranus
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/neptune">
                Neptune
              </a>
            </li>
            <li>
              <a className="basis-1/4 md:basis-1/12" href="/pluto">
                Pluto
              </a>
            </li>
          </ul>
        </nav>
      </main>
    );
  }
}
