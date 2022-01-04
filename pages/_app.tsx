// pages/_app.js
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';

import '@arco-design/web-react/dist/css/arco.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fonts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no" />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
