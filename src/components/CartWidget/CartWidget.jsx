import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ css, cssCount }) => {
  const { cartList } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);
  let cant = 0;
  const setCant = (n) => {
    cant = n;
  };
  useEffect(() => {
    cartList.forEach((producto) => setCant(cant + Number(producto.cantidad)));
    setCantidad(cant);
  }, [cartList]);
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} className={css} />
      <p className={cssCount}>{cantidad !== 0 && cantidad}</p>
    </>
  );
};

export default CartWidget;
