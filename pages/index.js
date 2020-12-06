import React from 'react';

// import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <style jsx>
        {`
          h1 {
            font-size: 40px;
            color: blue;
          }
        `}
      </style>
    </div>
  );
}
