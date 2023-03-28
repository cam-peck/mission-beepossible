import Mercury from "./components/mercury";
import Venus from "./components/venus";
import Earth from "./components/earth";
import Mars from "./components/mars";
import Jupiter from "./components/jupiter";
import Saturn from "./components/saturn";
import Uranus from "./components/uranus";
import Neptune from "./components/neptune";
import Pluto from "./components/pluto";
import Sun from "./components/sun";

export default function Home() {
  return (
    <main>
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <Pluto />
    </main>
  );
}
