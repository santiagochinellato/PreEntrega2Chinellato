import logo from "../../../public/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="" />
      </div>
      <p>INFINIT | Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
