import React from "react";
import Form from "react-bootstrap/Form";

const ItemAcordion = ({ productos }) => {
  const marcas = [];
  const unicos = [];
  productos.forEach((producto) => {
    marcas.push(producto.marca);
  });
  for (var i = 0; i < marcas.length; i++) {
    const elemento = marcas[i];
    if (!unicos.includes(marcas[i])) {
      unicos.push(elemento);
    }
  }
  return (
    <>
      <Form>
        {unicos.map((unico) => (
          <Form.Check
            key={unico}
            type={"checkbox"}
            id={unico}
            label={unico.charAt(0).toUpperCase() + unico.slice(1)}
          />
        ))}
      </Form>
    </>
  );
};

export default ItemAcordion;
