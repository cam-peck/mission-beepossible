import type { moon } from '@/lib/types';
import { useEffect, useState } from 'react';
import Loading from './loading';
import Bee from './bee';

interface MoonProps {
  planetName: string | string[] | undefined;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Moons = (props: MoonProps) => {
  const [moonData, setMoonData] = useState<moon[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showMoon, setShowMoon] = useState<string>('');
  const { planetName, setError } = props;

  useEffect(() => {
    const fetchMoonData = async () => {
      const req = {
        method: 'GET',
      };
      try {
        if (planetName === undefined) return;
        const moonResponse = await fetch(`/api/moons/${planetName}`, req);
        const moonData = await moonResponse.json();
        setMoonData(moonData);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };
    fetchMoonData();
    setLoading(false);
  }, [planetName, setError]);

  const renderMoons = (data: moon[]) => {
    const moonLists = data.map((moon: moon) => {
      const { moonName, nameHistory, yearDiscovered, diameter } = moon;
      const display = showMoon === moonName ? 'opacity-100' : 'opacity-0';
      return (
        <div
          key={moonName}
          className="flex justify-center pt-6 basis-full md:basis-1/3 lg:basis-1/5"
        >
          <div className="w-2/5 planet moon animate-[idle_10s_linear_infinite]">
            <div className="flex flex-col items-center w-1/4 pt-8">
              <div className="flex justify-between w-full">
                <div className="w-[5px] aspect-square bg-gray-900 rounded-full" />
                <div className="w-[5px] aspect-square bg-gray-900 rounded-full" />
              </div>
              <div className="w-[20px] h-[10px] rounded-b-full border-b-2 border-l-2 border-gray-900 border-r-2 mt-2" />
            </div>
            <div className="w-11/12 h-6 bg-blue-200 absolute bottom-4 rounded-b-full text-center">
              {moonName}
            </div>
          </div>
          <div
            className={`${display} max-w-sm p-2 absolute bg-gray-200 bg-opacity-50 rounded-2xl`}
            onMouseEnter={() => setShowMoon(moonName)}
            onMouseLeave={() => setShowMoon('')}
          >
            <h1>
              <span className="font-bold">Name:</span> {moonName}
            </h1>
            <p>
              <span className="font-bold">History:</span> {nameHistory}
            </p>
            <p>
              <span className="font-bold">Year</span> Discovered:{' '}
              {yearDiscovered}
            </p>
            <p>
              <span className="font-bold">Diameter:</span> {diameter} km
            </p>
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
      <div className="pl-12">
        <h1 className="text-white pl-36 pr-2">
          This planet has no moons! Maybe the next one does!
        </h1>
        <Bee />
      </div>
    );
  }
};

export default Moons;
