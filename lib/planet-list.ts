import { solarSystemPlanet } from './types';

const planetsList: solarSystemPlanet[] = [
  {
    planetName: 'Mercury',
    visibleRings: false,
    planetWidth: 'w-6 md:w-10 lg:w-16',
  },
  {
    planetName: 'Venus',
    visibleRings: false,
    planetWidth: 'w-8 md:w-12 lg:w-20',
  },
  {
    planetName: 'Earth',
    visibleRings: false,
    planetWidth: 'w-10 md:w-16 lg:w-24',
  },
  {
    planetName: 'Mars',
    visibleRings: false,
    planetWidth: 'w-8 md:w-12 lg:w-20',
  },
  {
    planetName: 'Jupiter',
    visibleRings: false,
    planetWidth: 'w-20 md:w-28 lg:w-44',
  },
  {
    planetName: 'Saturn',
    visibleRings: true,
    planetWidth: 'w-14 md:w-24 lg:w-36',
  },
  {
    planetName: 'Uranus',
    visibleRings: true,
    planetWidth: 'w-12 md:w-20 lg:w-32',
  },
  {
    planetName: 'Neptune',
    visibleRings: false,
    planetWidth: 'w-12 md:w-16 lg:w-32',
  },
  {
    planetName: 'Pluto',
    visibleRings: false,
    planetWidth: 'w-8 md:w-12 lg:w-20',
  },
];

export default planetsList;
