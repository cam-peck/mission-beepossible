import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import FactContainer from '../components/funFacts';
import Moons from '../components/moon';
import lowerCase from '@/lib/lowercaseWord';
import { planet } from '@/lib/types';
import Loading from '@/components/loading';

export default function Planets() {
  const router = useRouter();
  const { planetName } = router.query;
  const [planetData, setPlanetData] = useState<planet>();
  const [core, setCore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanetData = async () => {
      setLoading(true);
      const req = {
        method: 'GET',
      };
      try {
        if (!planetName) return;
        const planetResponse = await fetch(`/api/planets/${planetName}`, req);
        const planetData = await planetResponse.json();
        setPlanetData(planetData);
      } catch (err) {
        console.error('An unexpected error occured');
        // error handing goes here!
      }
    };

    fetchPlanetData();
    setLoading(false);
  }, [planetName]);

  if (!planetData || loading) {
    return <Loading />;
  } else {
    const {
      planetName,
      planetType,
      yearDiscovered,
      distance,
      diameter,
      funFact1,
      funFact2,
      funFact3,
    } = planetData;
    const lowercasePlanetName = lowerCase(planetName);
    const display = core ? 'opacity-100' : 'opacity-0';
    const ring = core ? 'opacity-25' : 'opacity-100';
    return (
      <>
        <div className="h-full lg:h-screen">
          <p className="p-4 text-2xl font-bold text-center text-white lg:pb-6">
            Welcome to {planetName}!
          </p>
          <div className="flex flex-wrap pb-8">
            <div className="m-auto basis-2/4 lg:basis-1/3 ">
              <div
                className={`animate-[idle_10s_ease_infinite] m-auto w-full md:w-1/2 planet bg-${lowercasePlanetName} ${lowercasePlanetName}`}
              >
                <div className={`${lowercasePlanetName}-ring ${ring}`} />
                <div className="flex flex-col items-center w-1/4 pt-8">
                  <div className="flex justify-between w-full">
                    <div
                      className={`w-[10px] aspect-square bg-gray-900 rounded-full`}
                    />
                    <div
                      className={`w-[10px] aspect-square bg-gray-900 rounded-full`}
                    />
                  </div>
                  <div
                    className={`w-[20px] h-[10px] rounded-b-full border-b-4 border-l-4 border-gray-900 border-r-4 mt-4`}
                  />
                  <div
                    onMouseEnter={() => setCore(true)}
                    onMouseLeave={() => setCore(false)}
                    className={`duration-500 absolute w-1/2 flex items-center transition-opacity ${planetType} rounded-full bottom-4 lg:bottom-8 aspect-square ${display}`}
                  >
                    <p className="w-full text-center">
                      I have a{' '}
                      <span className="font-semibold">{planetType}</span> core!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 mt-4 text-white bg-white rounded lg:mt-0 bg-opacity-10 lg:pl-8 basis-full lg:basis-1/3">
              <p className="text-xl">
                Hi there, I&apos;m{' '}
                <span className="font-bold">{planetName}</span>!
              </p>
              <p className="text-lg">
                I was first discovered in{' '}
                <span className="font-semibold">{yearDiscovered}</span>! I was
                found to be <span className="font-semibold">{distance}</span>{' '}
                million km away from the sun and I have a diameter of{' '}
                <span className="font-semibold">{diameter}</span> km!
              </p>
              <p className="pl-4 text-sm">
                Mouse over me to see what kind of core I have!
              </p>
              <p className="pl-4 text-sm">*Click on mobile!</p>
            </div>
            <FactContainer
              funFact1={funFact1}
              funFact2={funFact2}
              funFact3={funFact3}
            />
          </div>
          <Moons planetName={planetName} />
        </div>
      </>
    );
  }
}
