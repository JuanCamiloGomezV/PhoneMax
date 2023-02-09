import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);
  const [interno, setInterno] = useState(true);
  const handleAumentar = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(stock);
  };
  const handleDisminuir = () => {
    cantidad > initial ? setCantidad(cantidad - 1) : setCantidad(initial);
  };
  const handleOnAdd = () => {
    onAdd(cantidad);
    setInterno(false);
  };
  return interno ? (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-row justify-content-center">
        <button
          onClick={handleDisminuir}
          className="btn-count border border-0 rounded-start"
        >
          -
        </button>
        <div className="count d-flex align-items-center justify-content-center text-center bg-white border-top border-bottom border-dark border-2">
          <h5 className="mt-2">{cantidad}</h5>
        </div>
        <button
          onClick={handleAumentar}
          className="btn-count border border-0 rounded-end"
        >
          +
        </button>
      </div>

      <button
        className="btn-add mt-4 rounded border border-0"
        onClick={handleOnAdd}
      >
        Agregar al Carrito
      </button>
    </div>
  ) : (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center w-100">
        <Link to="/cart" className="text-white w-100">
          <button className="btn btn-dark my-2 w-100">Ir al carrito</button>
        </Link>
        <Link to="/" className="text-black w-100">
          <button className="btn btn-warning my-2 w-100">
            Seguir Comprando
          </button>
        </Link>
      </div>
    </>
  );
};

export default ItemCount;
