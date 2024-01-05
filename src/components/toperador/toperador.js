import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo_softex from "../logos/Logo_softex";
import Logo_itbc from "../logos/logo_itbc";
import "./Navbar.css";

const Navbar = ({ isAdmin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isAdmin) {
    // Se o usuário não for um administrador, você pode optar por não renderizar a barra de navegação
    return null;
  }

  return (
    <nav>
      <div className="logo">
        <Logo_softex />
        <Logo_itbc />
      </div>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/telas">Telas</NavLink>
        </li>
        <li>
          <NavLink to="/usuarios">Usuários</NavLink>
        </li>
        <li>
          <NavLink to="/salas">Salas</NavLink>
        </li>
        <li>
          <NavLink to="/empresas">Empresas</NavLink>
        </li>
        <li>
          <NavLink to="/midias">Mídias</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;