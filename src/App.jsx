import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route
            exact
            path="/products/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
