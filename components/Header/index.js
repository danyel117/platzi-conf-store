import React from 'react';
import Link from 'next/link';
import {useAppContext} from 'context/AppContext'
import { HeaderS, Checkout } from './styles';

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
        <div>
          {cart.length}
        </div>
      )}
      </Checkout>
    </HeaderS>
  )
};

export default Header;
