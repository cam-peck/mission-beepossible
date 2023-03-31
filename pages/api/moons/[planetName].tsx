// @@Parameters: Pulls the planetName off of the URL
// @@Return: Returns an array of moons of type Moon with all moon information for a planet
// @@Example: fetch('/api/moons/venus', ...) will return all moon data for venus

import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import capitalizeWord from '@/lib/capitalizeWord';

type Moon = {
  moonName: string;
  nameHistory: string;
  yearDiscovered: number;
  diameter: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Moon[]>,
) {
  const { planetName } = req.query;
  if (typeof planetName !== 'string') return;
  const capitalizedPlanet = capitalizeWord(planetName);
  const sql = `
  SELECT "moonName", "nameHistory", "yearDiscovered", "diameter"
  FROM "moons"
  WHERE "planetName" = $1;
  `;
  const params = [capitalizedPlanet];
  try {
    const result = await db?.query(sql, params);
    if (result) {
      const moons = result.rows;
      res.status(200).json(moons);
    }
  } catch (err) {
    throw new Error('An unexpected serverside error occured.');
  }
}
