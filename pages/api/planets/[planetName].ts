// @@Parameters: Pulls the planetName off of the URL
// @@Return: Returns a planet of type Planet with all planet information
// @@Example: fetch('/api/planets/venus', ...) will return all planet data for venus

import type { NextApiRequest, NextApiResponse } from 'next';
import capitalizeWord from '@/lib/capitalizeWord';
import { planet } from '@/lib/types';
import prisma from '@/lib/prismaClient';
import { planetNamesEnum } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<planet>,
) {
  const { planetName } = req.query;
  if (typeof planetName !== 'string') return;
  const capitalizedPlanet = capitalizeWord(planetName);
  try {
    const planetData = await prisma.planets.findUnique({
      where: {
        planetName:
          planetNamesEnum[capitalizedPlanet as keyof typeof planetNamesEnum],
      },
    });
    if (planetData) res.json(planetData);
  } catch (err) {
    throw new Error('An unexpected serverside error occured.');
  }
}
