import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getProductos,
  getProductosByCategoria,
  getProductosByCategoriaMarca,
} from "../../../utils/firebase";

import ItemList from "../../ItemList/ItemList";
import Loader from "../../Loader/Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const { marcaId } = useParams();
  useEffect(() => setLoading(true), [categoryId]);
  useEffect(() => {
    if (categoryId) {
      if (marcaId) {
        getProductosByCategoriaMarca(categoryId, marcaId) // asincrinónico
          .then((respuestaPromesa) => {
            setProductos(respuestaPromesa);
          })
          .then(() => setLoading(false))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      } else {
        getProductosByCategoria(categoryId) // asincrinónico
          .then((respuestaPromesa) => {
            setProductos(respuestaPromesa);
          })
          .then(() => setLoading(false))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    } else {
      getProductos() // asincrinónico
        .then((respuestaPromesa) => {
          // throw new Error('Error generado a la fuerza')
          setProductos(respuestaPromesa);
        })
        .then(() => setLoading(false))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId, marcaId]);

  return loading ? (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loader />
      </div>
    </>
  ) : (
    <>
      {productos.length > 0 ? (
        <div className="container m-0 p-0 mw-100">
          <div className="row w-100 m-0 p-0">
            <div className="col-12">
              <ItemList productos={productos} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container my-2">
          <h4 className="text-center text-dark mt-4 w-100">
            En este momento no se encuentra productos de este tipo.
          </h4>
          <Link to="/" className="w-100">
            <h5 className="text-center text-dark mt-4 w-100 mb-4 text-decoration-underline">
              Continúe explorando aquí
            </h5>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
