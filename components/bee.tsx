const Bee = () => {
  return (
    <div className="w-[130px] h-[90px] relative animate-[zoom_2s_ease_infinite]">
      <div className="w-full h-full bee relative z-20">
        <div className="flex flex-col items-center mt-4 lg:mt-0 absolute right-0 w-1/3 pt-2 md:pt-4 lg:pt-8">
          <div className="flex justify-between w-1/2">
            <div className="w-[5px] bg-gray-200 rounded-full aspect-square" />
            <div className="w-[5px] bg-gray-200 rounded-full aspect-square" />
          </div>
          <div className="w-[20px] h-[10px] mt-2 border-b-2 border-l-2 border-r-2 border-gray-200 rounded-b-full lg:border-b-4 lg:border-l-4 lg:border-r-4" />
        </div>
        <div
          className="w-0 h-0 absolute left-[-10%] top-10
            border-t-[5px] border-t-transparent
          border-r-[20px] border-r-[#61555a]
          border-b-[5px] border-b-transparent"
        ></div>
        <div className="w-14 rotate-45 absolute top-[-30%] left-2 opacity-75 h-10 bg-gray-200 rounded-3xl"></div>
      </div>
      <div className="w-14 -rotate-[60deg] top-[-30%] left-10 absolute opacity-50 h-10 bg-gray-200 rounded-3xl"></div>
      <div className="w-3/4 aspect-square bg-blue-100 absolute top-[-5%] right-[-25%] z-50 opacity-50 rounded-full border-l-4 border-b-4 border-gray-400"></div>
    </div>
  );
};

export default Bee;
