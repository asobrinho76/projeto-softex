import React from "react";
import "./Saudacao.css";

const Saudacao = ({ nomeUser }) => {
  nomeUser = "Carol";
  return (
    <div className="saudacao">
      <h1 className="title">Bem-vindo,</h1>
      <h1 className="nomeUser"> {nomeUser}</h1>
      </div>
  );
};

export default Saudacao;
