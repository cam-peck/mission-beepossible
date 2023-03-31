export type solarSystemPlanet = {
  planetName: string;
  visibleRings: boolean;
  planetWidth: string;
};

export type planet = {
  planetName: string;
  diameter: number;
  yearDiscovered: number;
  distance: number;
  planetType: string;
  temperature: number;
  funFact1: string;
  funFact2: string;
  funFact3: string;
  visibleRings: boolean;
};

export type moon = {
  moonName: string;
  nameHistory: string;
  yearDiscovered: number;
  diameter: number;
};
