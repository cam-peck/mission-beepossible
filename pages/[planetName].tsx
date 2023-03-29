import { useRouter } from 'next/router';

// all planet code for base planet component goes in here

export default function Planets() {
  const router = useRouter();
  const { planetName } = router.query;
  // const [data, setData] = useState({});

  // useEffect(() => {
  // check which planet data to grab
  // grab that planets data
  // RENDER AWAY!
  // })
  return (
    <div>
      <h1>Planets!</h1>
      <p>Post: {planetName}</p>
    </div>
  );
}
