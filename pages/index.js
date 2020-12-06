import React from 'react';
import Layout from '@components/Layout';

// import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <h1>Hola Mundo</h1>
      <style jsx>
        {`
          h1 {
            font-size: 40px;
            color: blue;
          }
        `}
      </style>
    </Layout>
  );
}
