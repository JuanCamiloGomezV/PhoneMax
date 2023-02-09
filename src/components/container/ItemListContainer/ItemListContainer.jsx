import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProductos,
  getProductosByCategoria,
  getProductosByCategoriaMarca,
} from "../../../utils/firebase";
import Loader from "../../Loader/Loader";
import ItemList from "../../ItemList/ItemList";

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
      <div className="container m-0 p-0 mw-100">
        <div className="row w-100 m-0 p-0">
          <div className="col-12">
            <ItemList productos={productos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
