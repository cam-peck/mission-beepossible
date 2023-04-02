const Pluto = () => {
  return (
    <div
      className={`w-6 md:w-10 lg:w-16 delay-4 planet pluto animate-[front_42s_linear_infinite]`}
    >
      <div className="flex flex-col items-center w-1/3 pt-2 md:pt-4 lg:pt-4">
        <div className="flex justify-between w-full">
          <div className="w-1/6 bg-gray-900 rounded-full aspect-square" />
          <div className="w-1/6 bg-gray-900 rounded-full aspect-square" />
        </div>
        <div className="w-1/2 aspect-video mt-1 border-b-2 border-l-2 border-r-2 border-gray-900 rounded-b-full lg:border-b-4 lg:border-l-4 lg:border-r-4 lg:mt-2" />
      </div>
    </div>
  );
};

export default Pluto;
