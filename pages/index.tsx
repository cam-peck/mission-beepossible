import Bee from '@/components/bee';
import Orbit from '@/components/orbit';

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <div className="w-20 md:w-32 lg:w-52 aspect-square planet sun absolute preserve">
          <div className="flex flex-col items-center w-1/3 md:w-1/2 pt-4 md:pt-8 lg:pt-16 lg:w-1/3">
            <div className="flex justify-between w-full">
              <div className="w-[5px] lg:w-[10px] aspect-square bg-gray-900 rounded-full" />
              <div className="w-[5px] lg:w-[10px] aspect-square bg-gray-900 rounded-full" />
            </div>
            <div className="w-[20px] lg:w-[40px] h-[10px] lg:h-[20px] rounded-b-full border-b-2 border-l-2 border-r-2 lg:border-b-4 lg:border-l-4 border-gray-900 lg:border-r-4 mt-2 lg:mt-4" />
          </div>
          <Orbit />
        </div>
      </div>
      <h1 className="z-[-20] text-white text-4xl md:text-5xl lg:text-6xl w-full text-center absolute top-20 ">
        Welcome to the Solar System!
      </h1>
      <div className="absolute bottom-4 left-4 lg:bottom-12 lg:left-12">
        <p className="text-white text-lg md:text-xl pl-36 pr-2">
          Your mission, should you decide to accept it, is to explore the Solar
          System and learn more about the planets with me!
        </p>
        <Bee />
      </div>
    </main>
  );
}
