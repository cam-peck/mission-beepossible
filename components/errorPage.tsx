import Link from 'next/link';
import Bee from './bee';

interface ErrorPage {
  errorName: string | string[] | undefined;
}

const ErrorPage = (props: ErrorPage) => {
  return (
    <div className="flex flex-wrap flex-row-reverse justify-center h-screen items-center">
      <div className="basis-full md:basis-1/2 p-4 text-white text-lg md:text-2xl">
        <p>
          Sorry, but <span className="font-bolod">{props.errorName}</span>{' '}
          isn&apos;t one of the planets or moons in our Solar System.
        </p>
        <p>
          Please choose one from our navigation menu or click{' '}
          <Link className="font-bold underline" href="/">
            here
          </Link>{' '}
          to return to the Home page and see them all!
        </p>
      </div>
      <div className="basis-full flex justify-center md:basis-1/4">
        <Bee />
      </div>
    </div>
  );
};

export default ErrorPage;
