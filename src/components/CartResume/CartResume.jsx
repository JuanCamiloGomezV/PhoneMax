import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import {
  isNumber,
  validateConfirmEmail,
  validateEmail,
  validateIsNotEmpty,
} from "../../utils/validateForm";

import { CartContext } from "../../context/CartContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import { getSingleProducto } from "../../utils/firebase";

//pueba

const CartResume = () => {
  const { cartList, clear } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  let totalAux = 0;
  const clearCart = (e) => {
    e.preventDefault();
    clear();
  };
  const totalProducts = (item) => {
    totalAux = totalAux + Number(item.precio * item.cantidad);
    setTotal(totalAux);
  };

  const orderSuccess = (id) => {
    Swal.fire("Pedido realizado con exito!", `ID del pedido: ${id}`, "success");
  };
  const generateOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer: dataForm,
      items: cartList.map(({ id, nombre, precio, cantidad }) => ({
        id,
        nombre,
        precio,
        cantidad,
      })),
      total: total,
    };
    const db = getFirestore();
    const queyCollection = collection(db, "orders");
    addDoc(queyCollection, order)
      .then((res) => orderSuccess(res.id))
      .finally(() => {
        setLoading(false);
        clear();
      });

    cartList.forEach((product) => {
      let stockAux = 0;
      getSingleProducto(product.id) // asincrinónico
        .then((respuestaPromesa) => {
          // throw new Error('Error generado a la fuerza')
          stockAux = respuestaPromesa.stock;
        })
        .then((res) => {
          const queryDocUpdate = doc(db, "productos", product.id);
          updateDoc(queryDocUpdate, {
            stock: stockAux - Number(product.cantidad),
          });
        });
    });
  };
  const handleOnChange = (e) => {
    if (e.target.name == "phone") {
      isNumber(e.target.value) &&
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value,
        });
    } else {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value,
      });
    }
  };
  const validateDataForm = () => {
    const { name, phone, confirmEmail, email } = dataForm;
    if (
      validateEmail(email) &&
      validateConfirmEmail(email, confirmEmail) &&
      validateIsNotEmpty(name, phone)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useEffect(
    () =>
      cartList.forEach((item) => {
        totalProducts(item);
      }),
    [cartList, total]
  );
  useEffect(() => {
    validateDataForm();
  }, [dataForm]);
  return loading ? (
    <div className="d-flex justify-content-center align-items-center">
      <Loader />
    </div>
  ) : (
    <>
      <div className="card-resume bg-white w-100 h-auto my-2 border border-0 p-2 rounded">
        <h5 className="text-center border-bottom border-dark p-4">
          Datos Personales
        </h5>
        <form className="mt-4" onSubmit={generateOrder}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nombre"
              type="text"
              name="name"
              value={dataForm.name}
              aria-label="name"
              aria-describedby="basic-addon1"
              className="border border-dark"
              onChange={handleOnChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Telefono"
              type="text"
              name="phone"
              value={dataForm.phone}
              aria-label="phone"
              aria-describedby="basic-addon1"
              className="border border-dark"
              onChange={handleOnChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Correo"
              type="text"
              name="email"
              value={dataForm.email}
              aria-label="email"
              aria-describedby="basic-addon1"
              className="border border-dark"
              onChange={handleOnChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Confirmar Correo"
              type="text"
              name="confirmEmail"
              value={dataForm.confirmEmail}
              aria-label="confirmEmail"
              aria-describedby="basic-addon1"
              className="border border-dark"
              onChange={handleOnChange}
            />
          </InputGroup>

          <p className="fw-bold">
            Total: ${new Intl.NumberFormat().format(total)}
          </p>
          <div className="d-flex flex-row w-100">
            <button className="w-100 btn btn-dark" onClick={clearCart}>
              Vaciar Carrito
            </button>
            {isActive ? (
              <button className="w-100 ms-1 btn btn-warning" type="submit">
                Finalizar Compra
              </button>
            ) : (
              <>
                <button
                  className="w-100 ms-1 btn btn-warning"
                  type="submit"
                  disabled
                >
                  Finalizar Compra
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CartResume;
