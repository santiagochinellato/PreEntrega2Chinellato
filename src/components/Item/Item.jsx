import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="cards">
      <img className="card-img" src={product.image} alt={product.title} />
      <div>
        <h4>{product.title}</h4>
        <p>Precio: USD ${product.price}</p>
        <p>Categoria: {product.categoryId}</p>
        <Link className="ver-mas" to={`/item/${product.id}`}>
          Ver Más
        </Link>
      </div>
    </div>
  );
};

export default Item;
