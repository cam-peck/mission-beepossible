import '@/styles/globals.css';
import '@/styles/styles.css';
import type { AppProps } from 'next/app';
import Navigation from '@/components/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
