import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import "./Checkout.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, totalPrice, emptyCart } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const order = {
      cliente: data,
      productos: cart,
      total: totalPrice(),
    };

    const pedidosRef = collection(db, "orders");
    addDoc(pedidosRef, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  if (orderId) {
    return (
      <div className="order-fin">
        <h1>Muchas gracias por tu compra!</h1>
        <p>Tu numero de pedido es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="order">
      <h1>Finalizar compra</h1>
      <form className="form" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresa tu telefono"
          {...register("telefono")}
        />

        <button className="buy" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
