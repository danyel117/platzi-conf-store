import React from 'react';
import Layout from '@components/Layout';
import { PaymentS } from './styles';

const Payment = () => (
  <Layout>
    <PaymentS>
      <h3>Resumen del pedido</h3>
      <div>Botón de pago con Paypal</div>
    </PaymentS>
  </Layout>
);

export default Payment;
