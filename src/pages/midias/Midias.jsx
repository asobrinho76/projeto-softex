import React from "react";
import CustomButton from "../../components/button/button";
import DataTable from "../../components/tabela/tabela";
import Title from "../../components/Texts/Title/Title";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Midias.css";
import Navbar from "../../components/navbar/Navbar";

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  { field: "id", headerName: "Título", width: 150 },
  { field: "description", headerName: "Descrição", width: 260 },
  { field: "tm", headerName: "TM", width: 120 },
  { field: "start", headerName: "Período Inicial", width: 140 },
  { field: "finale", headerName: "Período Final", width: 140 },
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
  {
    id: "Campanha Natal",
    description: "Campanha da Softex de Natal",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    id: "Campanha Teste1",
    description: "Campanha da Softex de Natal2",
    tm: "video",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    id: "Campanha Teste2",
    description: "Campanha da Softex de Natal3",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    id: "Campanha Teste3",
    description: "Campanha da Softex de Natal4",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    id: "Campanha Teste4",
    description: "Campanha da Softex de Natal5",
    tm: "video",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários do banco de dados
];

function Midias() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="midia-container">
        <Title text="Mídias" />
        <div className="dados-midia">
          <div className="button-midia">
            <NavLink to="/midias/cadastromidias">
              <CustomButton>ADICIONAR</CustomButton>
            </NavLink>
          </div>
          <div className="tabela-midia">
            <DataTable
              rows={customRows}
              columns={customColumns}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Midias;
