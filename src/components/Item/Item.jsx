import "./Item.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ product }) => {
  return (
    <div className="cards">
      <img className="card-img" src={product.img} alt={product.title} />
      <div>
        <h4>{product.title}</h4>
        <p>{product.desc}</p>
        <p>Precio: {product.price}</p>
        <Link className="ver-mas" to={`/products/${product.id}`}>
          Ver Más
        </Link>
      </div>
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
