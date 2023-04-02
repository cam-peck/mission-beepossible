import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const display = showNavigation ? '' : 'hidden';

  return (
    <nav
      className="fixed z-50 flex items-center justify-between w-full py-4 bg-opacity-50 bg-gray-900 flex-nowrap text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex flex-wrap items-center justify-between w-full px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          data-te-collapse-init
          data-te-target="#navigation-bar"
          aria-controls="navigation-bar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setShowNavigation(!showNavigation);
          }}
        >
          <span className="w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className={`${display} flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}
          id="navigation-bar"
          data-te-collapse-item
        >
          <ul
            className="flex flex-col pl-0 mr-auto list-style-none text-white lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/mercury"
              >
                Mercury
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/venus"
              >
                Venus
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/earth"
              >
                Earth
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/mars"
              >
                Mars
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/jupiter"
              >
                Jupiter
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/saturn"
              >
                Saturn
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/uranus"
              >
                Uranus
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/neptune"
              >
                Neptune
              </Link>
            </li>
            <li>
              <Link
                className="text-lg p-3 rounded basis-1/4 md:basis-1/12 lg:hover:bg-gray-400 lg:hover:bg-opacity-50"
                href="/pluto"
              >
                Pluto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
