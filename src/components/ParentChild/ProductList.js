import React, { useState } from 'react'
import CardProduct from './CardProduct';

export default function ProductList() {
  const listProduct = [
    {id: 1, name: "Samsung", price: 1000000, likes: 5},
    {id: 2, name: "Asus", price: 4500000, likes: 10},
    {id: 1, name: "Macbook", price: 7400000, likes: 20},
  ];

  const [product, setProduct] = useState(listProduct);

  const likeFunction = (id) => {
    setProduct(
      [...product.map(prod => {
        if(prod.id === id){
          prod.likes++;
          return prod;
        }
        else {
          return prod;
        }
      })]
    )
  }

  const dislikeFunction = (id) => {
    setProduct(
      [...product.map(prod => {
        if(prod.id === id){
          prod.likes--;
          return prod;
        }
        else {
          return prod;
        }
      })]
    )
  }
  
  return (
    <div>
      {
        product?.map(prod => { 
          return (
            <li key={prod.id}>
              <CardProduct
                id = {prod.id}
                name = {prod.name}
                price = {prod.price}
                likes = {prod.likes}
                likeFunction = {likeFunction}
                dislikeFunction = {dislikeFunction}
              />
              {/* <p>Product id: {prod.id}</p>
              <p>name : {prod.name}</p>
              <p>price : {prod.price}</p>
              <p>likes : {prod.likes}</p> */}
            </li>
          )
        })
      }
      
    </div>
  )
}
