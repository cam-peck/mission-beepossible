import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full bg-gray-700 lg:h-screen">
        <div className="stars animate-[twinkle_300s_linear_infinite]" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
