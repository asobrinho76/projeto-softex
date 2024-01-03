import React from "react";
import CustomButton from "../../components/button/button";
import DataTable from "../../components/tabela/tabela";
import Title from "../../components/Texts/Title/Title";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Empresas.css";
import Navbar from "../../components/navbar/Navbar";

function formatarCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

function formatarTelefone(numero) {
  numero = numero.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  return numero.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
}

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  {
    field: "id",
    headerName: "CNPJ",
    type: "number",
    width: 160,
    valueFormatter: (params) => formatarCNPJ(params.value.toString()),
  },
  { field: "fullName", headerName: "Razão Social", width: 250 },
  { field: "fantasyName", headerName: "Nome Fantasia", width: 230 },
  {
    field: "celNumber",
    headerName: "Contato",
    type: "number",
    width: 170,
    valueFormatter: (params) => formatarTelefone(params.value.toString()),
  },
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
    id: 12345678901234,
    fullName: "Silvana Paiva",
    fantasyName: "Teste1",
    celNumber: 8112345678,
  },
  {
    id: 87654321930899,
    fullName: "João Silva",
    fantasyName: "Teste1",
    celNumber: 8212354378,
  },
  {
    id: 87654350621891,
    fullName: "João Silva",
    fantasyName: "Teste2",
    celNumber: 8112345578,
  },
  {
    id: 97654302521899,
    fullName: "João Silva",
    fantasyName: "Teste3",
    celNumber: 8112325678,
  },
  {
    id: 89654304921899,
    fullName: "João Silva",
    fantasyName: "Teste4",
    celNumber: 8112348678,
  },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários do banco de dados
];

function Empresas() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="empresa-container">
        <Title text="Empresas" />
        <div className="dados-empresa">
          <div className="button-empresa">
            <NavLink to="/empresas/cadastroempresas">
              <CustomButton>ADICIONAR</CustomButton>
            </NavLink>
          </div>
          <div className="tabela-empresa">
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

export default Empresas;
