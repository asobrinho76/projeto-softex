import React, { useState } from "react";
import CustomButton from "../../components/button/button";
import Title from "../../components/Texts/Title/Title";
import DataTable from "../../components/tabela/tabela";
import CustomInput from "../../components/input/input";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Salas.css";
import Navbar from "../../components/navbar/Navbar";
import Select from "../../components/select/Select";

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  { field: "andar", headerName: "Andar", width: 120 },
  { field: "id", headerName: "Sala", width: 80 },
  { field: "empresa", headerName: "Empresa", width: 150 },
  {
    field: "edit",
    headerName: "",
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <IconButton
        aria-label="edit"
        size="small"
        onClick={() => handleEdit(params.row.id)}
      >
        <EditOutlined />
      </IconButton>
    ),
  },
  {
    field: "delete",
    headerName: "",
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleDelete(params.row.id)}
      >
        <DeleteOutline />
      </IconButton>
    ),
  },
];

const customRows = [
  { id: 200, andar: "2º Andar", empresa: "Teste 1" },
  { id: 1, andar: "Mezanino", empresa: "Teste 2" },
  { id: 301, andar: "3º Andar", empresa: "Teste 3" },
  { id: 405, andar: "4º Andar", empresa: "Teste 4" },
  { id: 603, andar: "6º Andar", empresa: "Teste 5" },
  // Adicione mais usuários conforme necessário

  // Preencha com os dados necessários
  // ...
];

function Salas() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="salas-container">
        <Title text="Salas" />
        <div className="dados-salas">
          <div className="button-salas">
            <NavLink to="/salas/cadastrosalas">
              <CustomButton>ADICIONAR</CustomButton>
            </NavLink>
          </div>
          <div className="geral-salas">
            <div className="input-salas">
              <Select id="andar" label="Andar" />
              <Select id="sala" label="Sala" />
              <Select id="empresa" label="Empresa" />
              <ButtonSalve text="Assossiar" />
            </div>
            <div className="tabela-salas">
              <DataTable
                rows={customRows}
                columns={customColumns}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Salas;
