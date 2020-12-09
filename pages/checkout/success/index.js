/* eslint-disable import/no-unresolved */
import React from 'react';
import Layout from '@components/Layout';
import {useAppContext} from 'context/AppContext'
import Map from '@components/Map'
import useGoogleAdrress from 'hooks/useGoogleAddress'
import { SuccessS, SuccessMap } from './styles';

const Success = () => {
  const {state} = useAppContext()
  const {buyer} = state
  const address=useGoogleAdrress(buyer[0].address)
    return(
      <Layout>
        <SuccessS>
          <div>
            <h2>{`Gracias por tu compra ${buyer.name}`}</h2>
            <span>Tu pedido llegará en 3 días</span>
            <SuccessMap>
              <Map location={address} />
            </SuccessMap>
          </div>
        </SuccessS>
      </Layout>
  );
  }

export default Success;
