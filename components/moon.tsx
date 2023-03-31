import type { moon } from '@/lib/types';
import { useEffect, useState } from 'react';
import Loading from './loading';

interface MoonProps {
  planetName: string | string[] | undefined;
}

const Moons = (props: MoonProps) => {
  const [moonData, setMoonData] = useState<moon[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showMoon, setShowMoon] = useState<string>('');
  const { planetName } = props;

  useEffect(() => {
    const fetchMoonData = async () => {
      setLoading(true);
      const req = {
        method: 'GET',
      };
      try {
        if (planetName === undefined) return;
        const moonResponse = await fetch(`/api/moons/${planetName}`, req);
        const moonData = await moonResponse.json();
        setMoonData(moonData);
      } catch (err) {
        console.error('An unexpected error occured');
        // error handling needs added here!
      }
    };
    fetchMoonData();
    setLoading(false);
  }, [planetName]);

  const renderMoons = (data: moon[]) => {
    const moonLists = data.map((moon: moon) => {
      const { moonName, nameHistory, yearDiscovered, diameter } = moon;
      const display = showMoon === moonName ? 'opacity-100' : 'opacity-0';
      return (
        <div
          key={moonName}
          className="flex justify-center pt-6 basis-full md:basis-1/3 lg:basis-1/5"
        >
          <div
            className="w-2/5 planet moon animate-[idle_10s_linear_infinite]"
            onMouseEnter={() => setShowMoon(moonName)}
            onMouseLeave={() => setShowMoon('')}
          >
            <div className="flex flex-col items-center w-1/4 pt-8">
              <div className="flex justify-between w-full">
                <div className="w-[5px] aspect-square bg-gray-900 rounded-full" />
                <div className="w-[5px] aspect-square bg-gray-900 rounded-full" />
              </div>
              <div className="w-[20px] h-[10px] rounded-b-full border-b-2 border-l-2 border-gray-900 border-r-2 mt-2" />
            </div>
          </div>
          <div
            className={`${display} pl-4 absolute bg-gray-200 bg-opacity-50 rounded-2xl`}
            onMouseEnter={() => setShowMoon(moonName)}
            onMouseLeave={() => setShowMoon('')}
          >
            <h1>Name: {moonName}</h1>
            <p>History: {nameHistory}</p>
            <p>Year Discovered: {yearDiscovered}</p>
            <p>Diameter: {diameter} km</p>
          </div>
        </div>
      );
    });
    return moonLists;
  };
  if (!moonData || loading) {
    return <Loading />;
  } else {
    return moonData.length !== 0 ? (
      <div className="flex flex-wrap p-4">{renderMoons(moonData)}</div>
    ) : (
      <h1 className="text-white">I am so lonely... All on my own....</h1>
    );
  }
};

export default Moons;
