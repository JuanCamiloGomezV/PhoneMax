import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card bg-dark my-2 mx-1">
      <div className="imgBox">
        <img
          src={producto.imagen}
          alt="mouse corsair"
          className="mouse w-75 mt-1"
        />
      </div>

      <div className="contentBox">
        <h3>{producto.nombre}</h3>
        <h2 className="price">
          ${new Intl.NumberFormat().format(producto.precio)}
        </h2>
        <Link to={`/detail/${producto.id}`} className="buy detail">
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
