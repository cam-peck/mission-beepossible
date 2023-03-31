import Bee from './bee';

const Loading = () => {
  return (
    <div className="z-999 flex justify-center items-center fixed inset-0 w-full h-screen">
      <div className="bg-gray-900 opacity-75 absolute w-full h-full"></div>
      <Bee />
    </div>
  );
};

export default Loading;
