import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      <Link to="/cart">
        <TiShoppingCart fill="#33348E" size={32} />
        <span id="cart-counter">{cartQuantity()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
