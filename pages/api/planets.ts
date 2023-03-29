import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';

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
  res: NextApiResponse<Planet[]>,
) {
  const sql = `
  SELECT *
  FROM "planets"
  LEFT JOIN "moons" USING ("planetName");
  `;
  try {
    const result = await db?.query(sql);
    console.log('result: ', result);
    if (result) {
      const planets = result.rows;
      res.status(200).json(planets);
    }
  } catch (err) {
    throw new Error('An unexpected serverside error occured.');
  }
}
