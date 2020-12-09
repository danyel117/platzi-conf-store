/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {useAppContext} from 'context/AppContext';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import {PayPalButton} from 'react-paypal-button'
import credentials from ".credentials.js";
import { PaymentS, PaymentItem, PaymentElement } from './styles';

const Payment = () => {
  const router = useRouter()
  const {state,addNewOrder} = useAppContext()
  const {cart,buyer} = state
  const paypalOptions = {
    clientId:credentials.payUClientId,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles={
    layout:"vertical",
    shape:"rect"
  }

  const handlePaymentSuccess = (data)=>{
    console.log(data);
    if(data.status==="COMPLETED"){
      const newOrder = {
        buyer,
        products: cart,
        payment:data
      }
      addNewOrder(newOrder)
      router.push("/checkout/success")
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <Layout>
      <h3>Resumen del pedido</h3>
      <PaymentS>
        {cart.map((item) => (
          <PaymentItem key={`payment ${item.title}`}>
            <PaymentElement>
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </PaymentElement>
          </PaymentItem>
        ))}
      </PaymentS>
      <div>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onPaymentStart={() => {
            console.log('payment started');
          }}
          onPaymentSuccess={(data) => handlePaymentSuccess(data)}
          onPaymentError={(error) => console.log(error)}
          onPaymentCancel={(data) => console.log(data)}
        />
      </div>
    </Layout>
  );
}

export default Payment;
