import React from 'react';
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
    <Layout>
      <CheckoutS>
        <div>
          {cart.length>0 ? <h3>Lista de pedidos</h3>:<h3>Sin pedidos</h3>}
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
        {cart.length>0 && (
          <CheckoutSidebar>
            <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
            <Link href="/checkout/information">
              <button type="button">Continuar Pedido</button>
            </Link>
          </CheckoutSidebar>
        )}
      </CheckoutS>
    </Layout>
  );
};

export default Checkout;
