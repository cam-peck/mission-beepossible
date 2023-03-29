import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import FactContainer from '../components/funFacts';

// all planet code for base planet component goes in here
type testData = {
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

const testData = {
  planetName: 'Mercury',
  diameter: 4879,
  yearDiscovered: 1610,
  distance: 57.9,
  planetType: 'solid',
  temperature: 167,
  funFact1:
    'Mercury is the fastest planet in the solar system. It travels at nearly 47 km / second. Zooooooom!',
  funFact2:
    'No life likely here -- the solar radiation and heat are pretty unfriendly...',
  funFact3: 'We have a current mission out for Mercury -- the BepiColombo!',
  visibleRings: false,
};

export default function Planets() {
  const router = useRouter();
  const { planetName } = router.query;
  const [data, setData] = useState<testData>();
  const [core, setCore] = useState<boolean>(false);

  useEffect(() => {
    setData(testData);
  }, []);

  if (!data) {
    return <h1>LOADING. . .</h1>;
  } else {
    const display = core ? 'opacity-100' : 'opacity-0';

    return (
      <>
        <div className="stars animate-[twinkle_300s_linear_infinite]" />
        <div className="h-screen bg-gray-700">
          <p className="p-4 text-2xl font-bold text-center text-white lg:pb-6">
            Welcome to {planetName}!
          </p>
          <div
            className={`animate-[idle_10s_ease_infinite] m-auto lg:ml-6 w-2/4 lg:w-1/5 planet bg-${planetName} ${planetName}`}
          >
            <div className={`${planetName}-ring`} />
            <div className="flex flex-col items-center w-1/3 pt-8">
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
                className={`duration-500 absolute w-1/2 flex items-center transition-opacity bg-orange-300 rounded-full bottom-4 lg:bottom-16 aspect-square ${display}`}
              >
                <p className="w-full text-center">
                  I have a {data.planetType} core!
                </p>
              </div>
            </div>
          </div>
          <FactContainer
            funFact1={data.funFact1}
            funFact2={data.funFact2}
            funFact3={data.funFact3}
          />
        </div>
      </>
    );
  }
}
