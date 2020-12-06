import React from 'react';
// import Head from 'next/head';
import Header from '@components/Header'
import Characters from '@components/Characters'

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head> */}
      <main>
        <Header/>
        <h1>hola Mundo</h1>
        <Characters/>
      </main>
    </div>
  );
}
