import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <p className="pt-20 pb-5 md:pt-20 text-white text-xl md:text-3xl w-full md:w-3/4 text-center">
        Greetings weary traveller!
      </p>
      <p className="pb-10 px-2 text-white text-md md:text-2xl w-full md:w-3/4 text-center">
        Thank you for coming by and checking out another one of our projects.
        We&apos;re a Developer Duo that first started working together to create{' '}
        <a
          className="font-semibold underline"
          aria-label="Link to FlexBees application"
          href="https://d1qic9h1gkyqwx.cloudfront.net/"
        >
          FlexBees
        </a>
        , an interactive application to teach the user CSS Flexbox, for the
        DearJuniorDev Quackathon. We&apos;re excited to bring you all another
        application!
      </p>
      <div className="flex flex-wrap w-full">
        <div className="basis-full md:basis-1/2 pb-8">
          <div className="flex flex-col items-center">
            <Image
              width="250"
              height="250"
              src="/brandon.jpg"
              className="rounded-2xl"
              alt="Image of Brandon"
            />
            <p className="font-mono text-white text-lg md:text-3xl py-2">
              @brandon-moy
            </p>
            <p className="text-white text-lg md:text-2xl">Come check out my</p>
            <p className="text-white text-lg md:text-2xl pt-2">
              <a
                className="font-mono text-white text-lg md:text-xl bg-gray-200 bg-opacity-25 p-1 rounded"
                aria-label="Link to Brandon's GitHub Portfolio"
                href="https://github.com/brandon-moy"
              >
                GitHub
              </a>{' '}
              or{' '}
              <a
                className="font-mono text-white text-lg md:text-xl bg-gray-200 bg-opacity-25 p-1 rounded"
                aria-label="Link to Brandon's LinkedIn Profile"
                href="https://www.linkedin.com/in/brandon-k-moy/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="basis-full md:basis-1/2 h-full">
          <div className="flex flex-col items-center">
            <Image
              width="250"
              height="250"
              src="/cameron.jpg"
              className="rounded-2xl"
              alt="Image of Cameron"
            />
            <p className="font-mono text-white text-lg md:text-3xl py-2">
              @cameronjpeck
            </p>
            <p className="text-white text-lg md:text-2xl">Come check out my</p>
            <p className="text-white text-lg md:text-2xl pt-2">
              <a
                className="font-mono text-white text-lg md:text-xl bg-gray-200 bg-opacity-25 p-1 rounded"
                aria-label="Link to Cameron's GitHub Portfolio"
                href="https://github.com/cam-peck"
              >
                GitHub
              </a>{' '}
              or{' '}
              <a
                className="font-mono text-white text-lg md:text-xl bg-gray-200 bg-opacity-25 p-1 rounded"
                aria-label="Link to Cameron's LinkedIn Profile"
                href="https://www.linkedin.com/in/cameronjpeck/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
