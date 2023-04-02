import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mission: Beepossible</title>
        <link rel="icon" href="/beestronaut.png" />
        <meta property="og:title" content="Mission: Beepossible" />
        <meta
          property="og:description"
          content="A single page application teaching users about the Solar System in a fun and interactive way."
        />
        <meta
          property="og:image"
          content="https://mission-beepossible.vercel.app/meta-space.jpg"
        />
      </Head>
      <body className="h-full bg-gray-700 lg:h-screen">
        <div className="stars animate-[twinkle_300s_linear_infinite]" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
