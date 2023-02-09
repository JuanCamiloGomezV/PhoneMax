import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { getSingleProducto } from "../../../utils/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getSingleProducto(id) // asincrinónico
      .then((respuestaPromesa) => {
        // throw new Error('Error generado a la fuerza')
        setProducto(respuestaPromesa);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [loading, producto]);
  return loading ? (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 vh-100">
        <Loader />
      </div>
    </>
  ) : (
    <ItemDetail producto={producto} />
  );
};

export default ItemDetailContainer;
