import { useState, useEffect } from "react";
import SolarSystem from './solarsystem';

type planets = {
  planetName: string,
  visibleRings: boolean
}

const planetsList: planets[] = [
  {
    planetName: 'Mercury',
    visibleRings: false
  },
  {
    planetName: 'Venus',
    visibleRings: false
  },
  {
    planetName: 'Earth',
    visibleRings: false
  },
  {
    planetName: 'Mars',
    visibleRings: false
  },
  {
    planetName: 'Jupiter',
    visibleRings: false
  },
  {
    planetName: 'Saturn',
    visibleRings: true
  },
  {
    planetName: 'Uranus',
    visibleRings: true
  },
  {
    planetName: 'Neptune',
    visibleRings: false
  },
  {
    planetName: 'Pluto',
    visibleRings: false
  }
]

export default function Home() {
  // const [page, setPage] = useState<string>('home')
  const [planets, setPlanets] = useState<planets[]>();

  useEffect(() => {
    setPlanets(planetsList)
  }, [])
  // replace SolarSystem component load with the solar-system code for the home page
  if (!planets) {
    return <h1>LOADING. . .</h1>
  } else {
    return (
      <main>
        <SolarSystem />
      </main>
    );
  }
}
