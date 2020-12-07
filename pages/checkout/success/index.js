import React from 'react';
import Layout from '@components/Layout';
import { SuccessS, SuccessMap } from './styles';

const Success = () => (
  <Layout>
    <SuccessS>
      <div>
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días</span>
        <SuccessMap>Google Maps</SuccessMap>
      </div>
    </SuccessS>
  </Layout>
);

export default Success;
