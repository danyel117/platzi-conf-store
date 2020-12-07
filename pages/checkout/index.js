import React from 'react';
import Layout from '@components/Layout';
import Link from 'next/link';
import {
  CheckoutS,
  CheckoutItem,
  CheckoutElement,
  CheckoutSidebar,
} from './styles';

const Checkout = () => (
  <Layout>
    <CheckoutS>
      <div>
        <h3>Lista de pedidos</h3>
        <CheckoutItem>
          <CheckoutElement>
            <h4>Item Name</h4>
            <span>$10</span>
          </CheckoutElement>
          <button type="button">
            <i className="fas fa-trash-alt" />
          </button>
        </CheckoutItem>
      </div>
      <CheckoutSidebar>
        <h3>Precio Total: $10</h3>
        <Link href="/checkout/information">
          <button type="button">Continuar Pedido</button>
        </Link>
      </CheckoutSidebar>
    </CheckoutS>
  </Layout>
);

export default Checkout;
