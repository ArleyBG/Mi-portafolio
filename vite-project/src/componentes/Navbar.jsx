import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logoPortafolioweb.svg";
import useHashScroll from "../Hooks/useHashScroll";
import { useLocation } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  useHashScroll();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(prev => !prev);
  const cerrarMenu = () => setMenuAbierto(false);


  const location = useLocation();
  return (
    <nav>
      <div className="navbar">
        <div className="logo-name">
          <Link to="/" onClick={cerrarMenu}>
            <img src={Logo} alt="Logo astronauta" className="logo-img" />
            Arley Benavides
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button className="hamburguesa" onClick={toggleMenu}>
          <span className="linea" />
          <span className="linea" />
          <span className="linea" />
        </button>

        {/* Menú de navegación */}
        <div className={`nav-botons ${menuAbierto ? "activo" : ""}`}>
          <div className="nav-item">
            <Link
              to="/#proyectos"
              onClick={cerrarMenu}
              className={`navbar-link ${location.hash === "#proyectos" ? "active" : ""}`}
            >
              Proyectos
            </Link>
          </div>
          <div className="nav-item">
            <NavLink
              to="/curriculum"
              onClick={cerrarMenu}
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            >
              Curriculum
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/contact"
              onClick={cerrarMenu}
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            >
              Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;