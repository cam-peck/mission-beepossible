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
            <div className="w-[400%] top-[-145%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_26s_linear_infinite] preserve">
              <Planet
                planetName={'saturn'}
                visibleRings={true}
                planetWidth={'20%'}
                planetEyes={'15%'}
                planetMouthHeight={'7.5%'}
                planetMouthWidth={'40%'}
                animationDuration={'26s'}
              />
            </div>
          </div>
        </div>
        {/* <SolarSystem /> */}
      </main>
    );
  }
}
