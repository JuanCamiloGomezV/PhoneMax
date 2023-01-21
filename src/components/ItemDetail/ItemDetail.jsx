import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {

    const onAdd = (cant) => {
        console.log(cant);
    }
    
  return (
    <div className='container m-0 p-0 mw-100 mt-4'>
      <div className='row m-0 p-0 w-100'>
        <div className='col-5 d-flex justify-content-center'>
          <img src={producto.imagen_grande} className='w-100' />
        </div>
        <div className='col-6'>
            <div className='d-flex flex-column bg-light p-5 me-1 w-100'>
                <h2 className='border-bottom border-light h-auto'>{producto.nombre}</h2>
                <h2 className='mt-4'>${producto.precio}</h2>
                <ItemCount onAdd={onAdd}/>
                <p className='mt-4'>{producto.descripcion}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail