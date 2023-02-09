import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { useParams } from "react-router-dom";
import Order from "../../Order/Order";

const OrderContainer = () => {
  const { clear } = useContext(CartContext);
  const { idOrder } = useParams();
  console.log(idOrder);

  useEffect(() => {
    clear();
  }, []);
  return (
  <>
    <Order />
  </>);
};

export default OrderContainer;
