import React, { useContext } from "react";
import ItemCart from "../../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import CartResume from "../../CartResume/CartResume";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cartList } = useContext(CartContext);
  return cartList.length > 0 ? (
    <div className="container mw-100">
      <div className="row mw-100">
        <div className="col-9 p-0 m-0">
          <ItemCart />
        </div>
        <div className="col-3 d-flex justify-content-start align-items-center m-0 p-0 flex-column">
          <CartResume />
        </div>
      </div>
    </div>
  ) : (
    <>
      <h3 className="text-center text-dark mt-4">Carrito de Compras</h3>
      <h5 className="text-center text-dark mt-4 w-100">
        Su carrito actualmente está vacío.
      </h5>
      <Link to="/" className="w-100">
        <h5 className="text-center text-dark mt-4 w-100 mb-4 text-decoration-underline">
          Continúe explorando aquí
        </h5>
      </Link>
    </>
  );
};

export default CartContainer;
