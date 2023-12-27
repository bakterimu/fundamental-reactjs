import React from 'react'

export default function CardProduct(props) {
  return (
    <div>
      <p>Product id: {props.id}</p>
      <p>name : {props.name}</p>
      <p>price : {props.price}</p>
      <p>likes : {props.likes}</p>
      <button onClick={() => props.likeFunction(props.id)}>Like</button>
      <button onClick={() => props.dislikeFunction(props.id)}>Dislike</button>
    </div>
  )
}
