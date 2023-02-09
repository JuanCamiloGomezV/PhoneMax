import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import "./ItemCart.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarrousselItemCart from "../CarrousselItemCart/CarrousselItemCart";
import { Link } from "react-router-dom";

const ItemCart = () => {
  const { cartList, removeItem, setCarrito } = useContext(CartContext);

  const notifyDelete = () => {
    toast.error("Producto eliminado!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const bajar = ({ id, cantidad }) => {
    if (cantidad > 1) {
      let productoAux = cartList.find((cart) => cart.id == id);
      productoAux.cantidad = productoAux.cantidad - 1;
      let cartAux = cartList.filter((cart) => cart.id !== id);
      cartAux = [...cartAux, productoAux];
      setCarrito(cartAux);
    } else {
      setCarrito(cartList.filter((cart) => cart.id !== id));
      notifyDelete();
    }
  };

  const subir = ({ id, cantidad }) => {
    if (cantidad < 10) {
      let productoAux = cartList.find((cart) => cart.id == id);
      productoAux.cantidad = productoAux.cantidad + 1;
      let cartAux = cartList.filter((cart) => cart.id !== id);
      cartAux = [...cartAux, productoAux];
      setCarrito(cartAux);
    }
  };

  const eliminarProducto = (cart) => {
    removeItem(cart.id);
    notifyDelete();
  };

  return (
    <>
      <ToastContainer />
      {cartList.map((cart) => (
        <div key={cart.id} className="d-flex flex-row my-2 align-items-center">
          <CarrousselItemCart cart={cart} />
          <div className="d-flex flex-row card-info w-100 p-4 bg-white mx-2 border border-0 rounded h-auto">
            <div className="w-100">
              <Link to={`/detail/${cart.id}`}>
                <h3 className="text-dark">{cart.nombre}</h3>
              </Link>
              <p className="text-dark mt-3">{cart.descripcion}</p>
              <h5 className="text-dark mb-3">
                ${new Intl.NumberFormat().format(cart.precio)}
              </h5>
              <div className="d-flex flex-row">
                <button
                  className="btn-count border border-0 rounded-start"
                  onClick={() => {
                    bajar(cart);
                  }}
                >
                  -
                </button>
                <div className="count d-flex align-items-center justify-content-center text-center bg-white border-top border-bottom border-dark border-2">
                  <h5 className="mt-2">{cart.cantidad}</h5>
                </div>
                <button
                  className="btn-count border border-0 rounded-end"
                  onClick={() => {
                    subir(cart);
                  }}
                >
                  +
                </button>
              </div>
              <div className="d-flex w-100 justify-content-end">
                <p className="fw-bold">
                  Subtotal: $
                  {new Intl.NumberFormat().format(cart.cantidad * cart.precio)}
                </p>
              </div>
            </div>
            <div className="w-auto d-flex align-items-center p-4">
              <button
                className="bg-white border border-0"
                onClick={() => {
                  eliminarProducto(cart);
                }}
              >
                <FaTrash className="btn-delete" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemCart;
