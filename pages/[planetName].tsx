import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import FactContainer from '../components/funFacts';
import Moons from '../components/renderMoons';

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

type moonTestData = {
  moonName: string;
  nameHistory: string;
  yearDiscovered: number;
  diameter: number;
};

const testData: testData = {
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

const moonTestData: moonTestData[] = [
  {
    moonName: 'MoonOne',
    nameHistory: 'I named it',
    yearDiscovered: 6969,
    diameter: 4200,
  },
  {
    moonName: 'MoonTwo',
    nameHistory: 'I named it',
    yearDiscovered: 6969,
    diameter: 4200,
  },
  {
    moonName: 'MoonThree',
    nameHistory: 'I named it',
    yearDiscovered: 6969,
    diameter: 4200,
  },
  {
    moonName: 'MoonFour',
    nameHistory: 'I named it',
    yearDiscovered: 6969,
    diameter: 4200,
  },
  {
    moonName: 'MoonFive',
    nameHistory: 'I named it',
    yearDiscovered: 6969,
    diameter: 4200,
  },
  {
    moonName: 'MoonSix',
    nameHistory: 'I named it',
    yearDiscovered: 6969,
    diameter: 4200,
  },
];

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
        <div className="h-full bg-gray-700 lg:h-screen">
          <p className="p-4 text-2xl font-bold text-center text-white lg:pb-6">
            Welcome to {planetName}!
          </p>
          <div className="flex flex-wrap pb-8">
            <div className="m-auto basis-2/4 lg:basis-1/3 ">
              <div
                className={`animate-[idle_10s_ease_infinite] m-auto w-full md:w-1/2 planet bg-${planetName} ${planetName}`}
              >
                <div className={`${planetName}-ring`} />
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
                    className={`duration-500 absolute w-1/2 flex items-center transition-opacity ${data.planetType} rounded-full bottom-4 lg:bottom-8 aspect-square ${display}`}
                  >
                    <p className="w-full text-center">
                      I have a{' '}
                      <span className="font-semibold">{data.planetType}</span>{' '}
                      core!
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
                <span className="font-semibold">{data.yearDiscovered}</span>! I
                was found to be{' '}
                <span className="font-semibold">{data.distance}</span> million
                km away from the sun and I have a diameter of{' '}
                <span className="font-semibold">{data.diameter}</span> km!
              </p>
              <p className="pl-4 text-sm">
                Mouse over me to see what kind of core I have!
              </p>
              <p className="pl-4 text-sm">*Click on mobile!</p>
            </div>
            <FactContainer
              funFact1={data.funFact1}
              funFact2={data.funFact2}
              funFact3={data.funFact3}
            />
          </div>
          <Moons moonData={moonTestData} />
        </div>
      </>
    );
  }
}
