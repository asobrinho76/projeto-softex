import React from "react";
import Carousel from "./carousel";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function TipoTela() {
  return (
    <>
    <div className="NavBar">
      <Navbar />
    </div>

    <div>
      <NavLink to="/telas/tvRecepcao" target="blank">
        <h1>Tv Recepção</h1>
      </NavLink>
      <NavLink to="/telas/tvTorre" target="blank">
        <h1>Tv Torre</h1>
      </NavLink>
    </div>
    </>
  );
}
