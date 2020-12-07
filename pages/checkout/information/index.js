import React from 'react';
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

const Information = () => (
  <Layout>
    <InformationS>
      <div>
        <div>
          <H2>Información de contacto</H2>
        </div>
        <div>
          <form action="">
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
          <div>Regresar</div>
          <Link href="/checkout/payment">
            <div>Pagar</div>
          </Link>
        </InformationButtons>
      </div>
      <InformationSidebar>
        <H3>Pedido</H3>
        <InformationItem>
          <InformationElement>
            <H4>ITEM NAME</H4>
            <span>$10</span>
          </InformationElement>
        </InformationItem>
      </InformationSidebar>
    </InformationS>
  </Layout>
);

export default Information;
