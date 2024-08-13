import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../../public/products"; // Ajusta la ruta si es necesario
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(
      (prod) => prod.id === parseInt(productId)
    );
    setProducto(foundProduct);
  }, [productId]);

  if (!producto) return <p>Producto no encontrado</p>;

  const stock = Math.floor(Math.random().toFixed(2) * 100);

  return (
    <>
      <h2 className="d-title">{producto.title}</h2>
      <div className="detail-container">
        <div className="prod-img">
          <img src={producto.img} alt={producto.title} />
        </div>
        <div className="prod-desc">
          <p>{producto.desc}</p>
          <p>Precio: {producto.price}</p>
          {stock < 10 ? (
            <div>
              <p className="stock-p">Stock disponible: {stock}</p>
              <h3>¡Últimas unidades!</h3>
            </div>
          ) : (
            <p className="stock-p">Stock disponible: {stock}</p>
          )}
          <button className="card-button">Añadir al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
