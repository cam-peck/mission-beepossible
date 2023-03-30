type moonTestData = {
  moonName: string;
  nameHistory: string;
  yearDiscovered: number;
  diameter: number;
};

interface moonData {
  moonData: moonTestData[];
}

const Moons = (props: moonData) => {
  const renderMoons = (data: moonTestData[]) => {
    const moonLists = data.map((moon: moonTestData) => {
      return (
        <div
          key={moon.moonName}
          className="flex justify-center pt-6 basis-full md:basis-1/3 lg:basis-1/5"
        >
          <div className="w-2/5 planet moon">
            <div className="flex flex-col items-center w-1/4 pt-8">
              <div className="flex justify-between w-full">
                <div className="w-[5px] aspect-square bg-gray-900 rounded-full" />
                <div className="w-[5px] aspect-square bg-gray-900 rounded-full" />
              </div>
              <div className="w-[20px] h-[10px] rounded-b-full border-b-2 border-l-2 border-gray-900 border-r-2 mt-2" />
            </div>
          </div>
          <div className="pl-4">
            <h1>{moon.moonName}</h1>
            <p>{moon.nameHistory}</p>
            <p>{moon.yearDiscovered}</p>
            <p>{moon.diameter}</p>
          </div>
        </div>
      );
    });
    return moonLists;
  };

  return (
    <div className="flex flex-wrap p-4">{renderMoons(props.moonData)}</div>
  );
};

export default Moons;
