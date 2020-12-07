import React from 'react';
import { AppContext } from 'context/AppContext';
import useInitialState from 'hooks/useInitialState';
import 'styles/GlobalStyles.css';
/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
