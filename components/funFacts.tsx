import { useState } from 'react';

interface funFacts {
  funFact1: string;
  funFact2: string;
  funFact3: string;
}

type fact = {
  factNum: number;
  funFact: string;
};

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
        <div className="w-4/5 pl-4 " key={funFacts.factNum}>
          <div
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => {
              setFact(funFacts.factNum);
            }}
          >
            Fun Fact #{funFacts.factNum}
          </div>
          <p className={`${display} text-white`}>{funFacts.funFact}</p>
        </div>
      );
    });
    return factsList;
  };

  return (
    <div className="flex flex-col w-full lg:w-1/3">
      {renderFacts(factsArray)}
    </div>
  );
};

export default FactContainer;
