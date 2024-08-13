import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import products from "../../../public/products"; // Ajusta la ruta si es necesario
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Todos los productos");
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(categoryName.toLowerCase())
      );
      setProductos(filteredProducts);
      setTitulo(categoryName);
    } else {
      setProductos(products);
      setTitulo("Todos los productos");
    }
  }, [categoryName]);

  return (
    <div>
      <h2>{titulo}</h2>
      <div className="products">
        {productos.length > 0 ? (
          productos.map((product) => (
            <Item product={product} key={product.id} />
          ))
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
