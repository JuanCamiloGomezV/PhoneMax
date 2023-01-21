import React from 'react'
import { useParams } from 'react-router-dom';

const CartContainer = () => {
  const {categoryId} = useParams();
  console.log(categoryId)
  return (
    <div>CartContainer</div>
  )
}

export default CartContainer