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
          <Planet
            planetName={'saturn'}
            visibleRings={true}
            planetWidth={'20%'}
            planetEyes={'8px'}
            planetMouthHeight={'10px'}
            planetMouthWidth={'20px'}
          />
        </div>
        {/* <SolarSystem /> */}
      </main>
    );
  }
}
