import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a la tienda online de INFINIT</h1>
      <p>Aquí podras encontrar productos de todo tipo</p>
      <Link to={"/products"} className="b-home">
        Entrar a la Tienda
      </Link>
    </div>
  );
};

export default Home;
