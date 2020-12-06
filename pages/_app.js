/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
