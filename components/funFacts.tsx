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
        <div className="" key={funFacts.factNum}>
          <button
            type="button"
            className="header"
            onClick={() => {
              setFact(funFacts.factNum);
            }}
          >
            Fun Fact
          </button>
          <p className={`${display}`}>{funFacts.funFact}</p>
        </div>
      );
    });
    return factsList;
  };

  return <>{renderFacts(factsArray)}</>;
};

export default FactContainer;
