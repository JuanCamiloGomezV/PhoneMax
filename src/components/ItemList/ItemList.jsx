import React from 'react'
import Item from '../Item/Item';

const ItemList = ({productos}) => {
  return (
    <div className='d-flex flex-row mt-2 justify-content-center w-100 flex-wrap'>
    {productos.map(producto =>
      <Item key={producto.id} producto={producto}/>
    )}
  </div>
  )
}

export default ItemList