// @@Parameters: Pulls the planetName off of the URL
// @@Return: Returns a planet of type Planet with all planet information
// @@Example: fetch('/api/planets/venus', ...) will return all planet data for venus

import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import capitalizeWord from '@/lib/capitalizeWord';

type Planet = {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Planet>,
) {
  const { planetName } = req.query;
  if (typeof planetName !== 'string') return;
  const capitalizedPlanet = capitalizeWord(planetName);
  const sql = `
  SELECT *
  FROM "planets"
  WHERE "planetName" = $1;
  `;
  const params = [capitalizedPlanet];
  try {
    const result = await db?.query(sql, params);
    if (result) {
      const [planet] = result.rows;
      res.status(200).json(planet);
    }
  } catch (err) {
    throw new Error('An unexpected serverside error occured.');
  }
}
