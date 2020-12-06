import React from 'react';
import 'styles/GlobalStyles.css';
/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
