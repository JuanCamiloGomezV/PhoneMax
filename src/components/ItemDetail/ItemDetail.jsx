import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ErrorContainer from "../container/ErrorContainer/ErrorContainer";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const { addCarrito } = useContext(CartContext);
  const [imagen, setImagen] = useState(producto.imagen);
  const onAdd = (cant) => {
    addCarrito({ ...producto, cantidad: cant });
  };
  return producto.nombre ? (
    <div className="w-auto">
      <div className="left">
        <img src={imagen} alt="shoe" className="w-100" />
      </div>
      <div className="right">
        <div className="product-info d-flex justify-content-between align-items-center flex-row">
          <div className="d-flex justify-content-center flex-column">
            <div className="product-name mt-2">
              <h1 className="text-center">{producto.nombre}</h1>
            </div>
            <div className="details d-flex justify-content-center flex-column">
              {producto.stock > 0 && <ItemCount onAdd={onAdd} />}
            </div>
            <h4 className="mt-3 text-center">
              ${new Intl.NumberFormat().format(producto.precio)}
            </h4>
            {producto.stock > 0 ? (
              <h6 className="text-center">
                Productos disponibles: {producto.stock}
              </h6>
            ) : (
              <h6 className="text-center">Producto no disponible</h6>
            )}
          </div>
          <div className="d-flex flex-column w-75">
            <p className="text-dark mx-5">{producto.descripcion}</p>
            <div className="d-flex flex-row flex-wrap mx-4 justify-content-center mt-4">
              <img
                src={producto.imagen}
                className="mini-img border rounded py-1"
                onClick={() => setImagen(producto.imagen)}
              />
              <img
                src={producto.imagen_2}
                className="mini-img border rounded py-1"
                onClick={() => setImagen(producto.imagen_2)}
              />
              <img
                src={producto.imagen_3}
                className="mini-img border rounded py-1"
                onClick={() => setImagen(producto.imagen_3)}
              />
              <img
                src={producto.imagen_4}
                className="mini-img border rounded py-1"
                onClick={() => setImagen(producto.imagen_4)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ErrorContainer />
  );
};

export default ItemDetail;
