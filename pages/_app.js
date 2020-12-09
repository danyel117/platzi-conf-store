import React, {useEffect} from 'react';
import Head from 'next/head'
import { AppContext } from 'context/AppContext';
import useInitialState from 'hooks/useInitialState';
import 'styles/GlobalStyles.css';
/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(
            (registration)=> {
              console.log(
                'ServiceWorker registration successful with scope: ',
                registration.scope
              );
            },
            (err) =>{
              console.log('ServiceWorker registration failed: ', err);
            }
          )
          .catch((err) =>{
            console.log(err);
          });
      });
    } else {
      console.log('service worker is not supported');
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <AppContext.Provider value={initialState}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
