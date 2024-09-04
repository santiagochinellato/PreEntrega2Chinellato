import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item, quantity) => {
    const itemAdded = { ...item, quantity };

    const newCart = [...cart];
    const isInCart = newCart.find((product) => product.id === itemAdded.id);

    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newCart.push(itemAdded);
    }
    setCart(newCart);
  };

  const cartQuantity = () => {
    return cart.length;
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((product) => {
        if (product.id === id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        totalPrice,
        emptyCart,
        removeFromCart,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
