import React from 'react';
import Layout from '@components/Layout';
import Products from '@components/Products';
import ProductList from 'initialState';
// import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Products products={ProductList.products} />
    </Layout>
  );
}
