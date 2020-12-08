import React from 'react';
import Link from 'next/link';
import {useAppContext} from 'context/AppContext'
import { HeaderS, Checkout, HeaderAlert } from './styles';

const Header = () => {
  const {state} = useAppContext()
  const {cart} = state
  return(
    <HeaderS>
      <Link href="/">
        <h1>PlatziConf Merch</h1>
      </Link>
      <Checkout>
        <Link href="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length>0 && (
        <HeaderAlert>
          {cart.length}
        </HeaderAlert>
      )}
      </Checkout>
    </HeaderS>
  )
};

export default Header;
