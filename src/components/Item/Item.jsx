import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <Card style={{ width: '15rem' }} className='m-2 card-producto'>
      <Card.Img variant="top" src={producto.imagen} className='p-3 producto-imagen' />
      <Card.Body className='d-flex justify-content-center flex-column'>
        <Card.Title className='text-center'>{producto.nombre}</Card.Title>
        <Card.Text className='text-center'>
          ${producto.precio}
        </Card.Text>
        <Link to={`/detail/${producto.id}`} className='w-100'><Button className='w-100' variant="warning">Detalles</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default Item
