import { useState } from 'react';
import { fact } from '@/lib/types';

interface funFacts {
  funFact1: string;
  funFact2: string;
  funFact3: string;
}

const FactContainer = (props: funFacts) => {
  const [fact, setFact] = useState<number>(0);

  const factsArray: fact[] = [
    {
      factNum: 1,
      funFact: props.funFact1,
    },
    {
      factNum: 2,
      funFact: props.funFact2,
    },
    {
      factNum: 3,
      funFact: props.funFact3,
    },
  ];

  const renderFacts = (factsArray: fact[]) => {
    const factsList = factsArray.map((funFacts: fact) => {
      const display = fact === funFacts.factNum ? '' : 'hidden';
      return (
        <div className="w-full lg:pl-4 lg:w-4/5" key={funFacts.factNum}>
          <div
            className="pl-4 text-2xl font-bold text-white bg-gray-400 rounded-t cursor-pointer bg-opacity-20"
            onClick={() => {
              setFact(funFacts.factNum);
            }}
          >
            Fun Fact #{funFacts.factNum}
          </div>
          <p className={`${display} pl-4 text-white bg-white bg-opacity-20`}>
            {funFacts.funFact}
          </p>
        </div>
      );
    });
    return factsList;
  };

  return (
    <div className="flex flex-col w-full pt-4 lg:pt-0 lg:w-1/3">
      {renderFacts(factsArray)}
    </div>
  );
};

export default FactContainer;
