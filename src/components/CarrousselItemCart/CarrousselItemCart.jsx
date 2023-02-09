import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarrousselItemCart.css";

const CarrousselItemCart = ({ cart }) => {
  return (
    <Carousel slide={false} variant="dark" interval={100000}>
      <Carousel.Item className="item">
        <img className="d-block" src={cart.imagen} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="item" interval={10000}>
        <img className="d-block" src={cart.imagen_2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="item" interval={10000}>
        <img className="d-block" src={cart.imagen_3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className="item" interval={10000}>
        <img className="d-block" src={cart.imagen_4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrousselItemCart;
