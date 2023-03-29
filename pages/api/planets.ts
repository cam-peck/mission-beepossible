import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';

type Planet = {
  planetName: string;
  size: number;
  yearDiscovered: number;
  distance: number;
  coreType: string;
  temperature: number;
  funFact1: string;
  funFact2: string;
  funFact3: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Planet[]>,
) {
  const sql = `
  SELECT *
  FROM "planets"
  `;
  try {
    const result = await db?.query(sql);
    if (result) {
      const planets = result.rows;
      res.status(200).json(planets);
    }
  } catch (err) {
    throw new Error('An unexpected serverside error occured.');
  }
}
