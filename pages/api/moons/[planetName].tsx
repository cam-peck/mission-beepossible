// @@Parameters: Pulls the planetName off of the URL
// @@Return: Returns an array of moons of type Moon with all moon information for a planet
// @@Example: fetch('/api/moons/venus', ...) will return all moon data for venus

import type { NextApiRequest, NextApiResponse } from 'next';
import capitalizeWord from '@/lib/capitalizeWord';
import { moon } from '@/lib/types';
import prisma from '@/lib/prismaClient';
import { planetNamesEnum } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<moon[]>,
) {
  const { planetName } = req.query;
  if (typeof planetName !== 'string') return;
  const capitalizedPlanet = capitalizeWord(planetName);
  try {
    const moonData = await prisma.moons.findMany({
      where: {
        planetName:
          planetNamesEnum[capitalizedPlanet as keyof typeof planetNamesEnum],
      },
    });
    if (moonData) res.json(moonData);
  } catch (err) {
    throw new Error('An unexpected serverside error occured.');
  }
}
