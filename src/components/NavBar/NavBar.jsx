import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Tienda
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/products"} className="dropdown-item">
                    Todos
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/products/Accesorios"} className="dropdown-item">
                    Accesorios
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/products/Shorts"} className="dropdown-item">
                    Shorts
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/products/Hoodie"} className="dropdown-item">
                    Hoodies
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/products/Jordans"} className="dropdown-item">
                    Jordans
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/products/Sweater"} className="dropdown-item">
                    Sweaters
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
