import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselProducto = ({categoria}) => {
  return (
    categoria==undefined?
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0485/4566/1094/files/Captura_de_Pantalla_2022-08-09_a_la_s_11.53.18_p._m._1500x.png?v=1660107224"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0485/4566/1094/files/section22-01s_1500x.jpg?v=1660102863"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    :
    <></>
  )
}

export default CarouselProducto