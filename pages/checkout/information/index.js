/* eslint-disable react/jsx-one-expression-per-line */
import React, {useRef} from 'react';
import {useAppContext} from 'context/AppContext'
import Layout from 'components/Layout';
import Link from 'next/link';
import {
  InformationS,
  Input,
  InformationButtons,
  InformationSidebar,
  InformationItem,
  InformationElement,
  H2,
  H3,
  H4,
} from './styles';

const Information = () => {
  const {state,addToBuyer} = useAppContext()
  const form = useRef(null)
  const {cart} = state;

  const handleSubmit = ()=>{
    const formData = new FormData(form.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      address2: formData.get('address2'),
      city: formData.get('city'),
      country: formData.get('country'),
      zipcode: formData.get('zipcode'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer)
  }

  return (
    <Layout>
      <InformationS>
        <div>
          <div>
            <H2>Información de contacto</H2>
          </div>
          <div>
            <form ref={form}>
              <Input type="text" placeholder="Nombre completo" name="name" />
              <Input type="email" placeholder="Correo electrónico" name="email" />
              <Input type="text" placeholder="Dirección" name="address" />
              <Input type="text" placeholder="Apto" name="address2" />
              <Input type="text" placeholder="Ciudad" name="city" />
              <Input type="text" placeholder="País" name="country" />
              <Input type="text" placeholder="Código Postal" name="zipcode" />
              <Input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>
          <InformationButtons>
            <Link href="/checkout">
              <div>Regresar</div>
            </Link>
            <Link href="/checkout/payment">
              <button type="button" onClick={handleSubmit}>Pagar</button>
            </Link>
          </InformationButtons>
        </div>
        <InformationSidebar>
          <H3>Pedido</H3>
          {cart.map(item=>(
            <InformationItem key={`information ${item.title}`}>
              <InformationElement>
                <H4>{item.name}</H4>
                <span>${item.price}</span>
              </InformationElement>
            </InformationItem>
          ))}
        </InformationSidebar>
      </InformationS>
    </Layout>
  );
}

export default Information;
