import { Decimal } from '@prisma/client/runtime';

export type planet = {
  planetName: string;
  diameter: number;
  yearDiscovered: number;
  distance: Decimal;
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

export type fact = {
  factNum: number;
  funFact: string;
};

export type solarSystemPlanet = {
  planetName: string;
  visibleRings: boolean;
  planetWidth: string;
};
