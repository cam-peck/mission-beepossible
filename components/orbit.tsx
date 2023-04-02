import Mercury from './planets/mercury';
import Venus from './planets/venus';
import Earth from './planets/earth';
import Mars from './planets/mars';
import Jupiter from './planets/jupiter';
import Saturn from './planets/saturn';
import Uranus from './planets/uranus';
import Neptune from './planets/neptune';
import Pluto from './planets/pluto';

const Orbit = () => {
  return (
    <>
      <div className="w-[140%] delay-4 top-[-20%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_10s_linear_infinite] preserve">
        <Mercury />
      </div>
      <div className="w-[180%] delay-3 top-[-40%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_14s_linear_infinite] preserve">
        <Venus />
      </div>
      <div className="w-[220%] delay-2 top-[-60%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_18s_linear_infinite] preserve">
        <Earth />
      </div>
      <div className="w-[260%] delay-4 top-[-80%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_22s_linear_infinite] preserve">
        <Mars />
      </div>
      <div className="w-[300%] delay-2 top-[-100%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_26s_linear_infinite] preserve">
        <Jupiter />
      </div>
      <div className="w-[340%] delay-1 top-[-120%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_30s_linear_infinite] preserve">
        <Saturn />
      </div>
      <div className="w-[380%] top-[-140%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_34s_linear_infinite] preserve">
        <Uranus />
      </div>
      <div className="w-[420%] delay-3 top-[-160%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_38s_linear_infinite] preserve">
        <Neptune />
      </div>
      <div className="w-[460%] delay-4 top-[-180%] aspect-square margin-auto rounded-full border-4 border-dotted border-gray-100 absolute animate-[circle_42s_linear_infinite] preserve">
        <Pluto />
      </div>
    </>
  );
};

export default Orbit;
