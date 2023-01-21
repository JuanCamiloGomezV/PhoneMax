import React,{useState} from 'react'

const ItemCount = ({initial=1,stock=10,onAdd}) => {
    const [cantidad,setCantidad] = useState(1);
    const handleAumentar=()=>{
        cantidad<stock ?
        setCantidad(cantidad+1)
        :
        setCantidad(stock)
    }
    const handleDisminuir=()=>{
        cantidad>initial?
        setCantidad(cantidad-1)
        :
        setCantidad(initial);
    }
    const handleOnAdd=()=>{
        onAdd(cantidad);
    }
  return (
    <>
    <p className='mt-4'>Cantidad</p>
    <div className='d-flex flex-row'>
        <button onClick={handleDisminuir} className='bg-light border border-0 fs-4 me-3'>-</button>
        <h5 className='d-flex align-items-center mx-3 text-center h-auto mt-1'>{cantidad}</h5>
        <button onClick={handleAumentar} className='bg-light border border-0 fs-4 ms-3'>+</button>
    </div>
                
    <button className='btn btn-dark mt-4' onClick={handleOnAdd}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount