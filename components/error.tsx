import Link from 'next/link';
import Bee from './bee';

interface ErrorPage {
  name: string;
}

const ErrorPage = (props: ErrorPage) => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="basis-1/4">
        <Bee />
      </div>
      <div className="basis-1/2 text-white text-2xl">
        <p>
          Sorry, but {props.name} isn&apos;t one of the planets in our Solar
          System.
        </p>
        <p>
          Please choose one from our navigation menu or click{' '}
          <Link className="font-bold underline" href="/">
            here
          </Link>{' '}
          to return to the Home page and see them all!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
