import { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import '../App.css'; // Adjust the path to your global styles if needed

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  );
}