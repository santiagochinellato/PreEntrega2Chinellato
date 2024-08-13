import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:categoryName"
          element={<ItemListContainer />}
        />
        <Route
          exact
          path="/products/:productId"
          element={<ItemDetailContainer />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
