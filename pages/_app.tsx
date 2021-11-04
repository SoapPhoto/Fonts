import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@arco-design/web-react/dist/css/arco.css';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
