import React from 'react';
import Link from 'next/link';
import { HeaderS, Checkout } from './styles';

const Header = () => (
  <HeaderS>
    <Link href="/">
      <h1>PlatziConf Merch</h1>
    </Link>
    <Checkout>
      <Link href="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
    </Checkout>
  </HeaderS>
);

export default Header;
