import React from 'react';
import Head from 'next/head'
import Layout from '@components/Layout';
import Link from 'next/link';
import {useAppContext} from 'context/AppContext'
import {
  CheckoutS,
  CheckoutItem,
  CheckoutElement,
  CheckoutSidebar,
} from './styles';

const Checkout = () => {
  const {state,removeFromCart} = useAppContext()
  const {cart}=state

  const handleRemove = (product)=>{
    removeFromCart(product)
  }

  const handleSumTotal = ()=>{
    const reducer = (accumulator,currentValue)=>accumulator+currentValue.price;
    const sum=cart.reduce(reducer,0)
    return sum
  }

  return (
    <>
      <Head>
        <title>PlatziConf Store - Checkout</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" />
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Head>
      <Layout>
        <CheckoutS>
          <div>
            {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
            {cart.map((item) => (
              <CheckoutItem key={`checkout ${item.title}`}>
                <CheckoutElement>
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                </CheckoutElement>
                <button type="button" onClick={() => handleRemove(item)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </CheckoutItem>
            ))}
          </div>
          {cart.length > 0 && (
            <CheckoutSidebar>
              <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
              <Link href="/checkout/information">
                <button type="button">Continuar Pedido</button>
              </Link>
            </CheckoutSidebar>
          )}
        </CheckoutS>
      </Layout>
    </>
  );
};

export default Checkout;
