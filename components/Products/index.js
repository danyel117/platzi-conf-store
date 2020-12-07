import React, { useState, useEffect } from 'react';
import {
  ProductItems,
  ProductItem,
  ProductItemInfo,
  Button,
  ProductImage,
} from './styles';

const Products = ({ products }) => (
  <div>
    <ProductItems>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductItems>
  </div>
);

export default Products;

const Product = ({ product }) => (
  <ProductItem>
    <ProductImage
      src={product.image}
      alt={product.title}
      width={200}
      height={240}
    />
    <ProductItemInfo>
      <h2>
        {product.title}
        <span>${product.price}</span>
      </h2>
      <p>{product.description}</p>
      <Button>Comprar</Button>
    </ProductItemInfo>
  </ProductItem>
);
