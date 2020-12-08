/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {useAppContext} from 'context/AppContext'
import {
  ProductItems,
  ProductItem,
  ProductItemInfo,
  Button,
  ProductImage,
} from './styles';

const Products = () => {
  const {state,addToCart} = useAppContext()
  const {products} = state

  const handleAddToCart = (product)=>{
    addToCart(product)
  }

  return(
    <div>
      <ProductItems>
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </ProductItems>
    </div>
  )
};

export default Products;

const Product = ({ product, handleAddToCart }) => (
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
      <Button onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
    </ProductItemInfo>
  </ProductItem>
);
