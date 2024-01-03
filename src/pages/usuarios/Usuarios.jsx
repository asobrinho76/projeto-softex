import React, { useState } from 'react'
import CustomButton from '../../components/button/button'
import DataTable from '../../components/tabela/tabela'
import Title from '../../components/Texts/Title/Title';
import {Link, NavLink} from 'react-router-dom'
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './Usuarios.css'
import Navbar from '../../components/navbar/Navbar';


function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, '$1.$2.$3-$4');
}

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  { field: 'id', headerName: 'CPF', type: 'number', width: 140,
  valueFormatter: (params) => formatarCPF(params.value.toString()) },
  { field: 'fullName', headerName: 'Nome Completo', width: 250 },
  { field: 'email', headerName: 'E-mail', width: 200 },
  { field: 'tp', headerName: 'TP', width: 80 },
  { field: 'userName', headerName: 'Usuário', width: 140 },
  {
    field: 'edit',
    headerName: '',
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <IconButton aria-label="edit" size="small" onClick={() => handleEdit(params.row.id)}>
        <EditOutlined />
      </IconButton>
    ),
  },
  {
    field: 'delete',
    headerName: '',
    width: 50,
    sortable: false,
    renderCell: (params) => (
      <IconButton aria-label="delete" size="small" onClick={() => handleDelete(params.row.id)}>
        <DeleteOutline />
      </IconButton>
    ),
  },
];

const customRows = [
    { id: 12345678900, fullName: 'Silvana Paiva', email: 'sil@gmail.com', tp: 'ADM', userName: 'silpaiva' },
    { id: 87654321899, fullName: 'João Silva', email: 'joao@gmail.com', tp: 'USR', userName: 'joaosilva' },
    { id: 87654321891, fullName: 'João Silva', email: 'joao@gmail.com', tp: 'USR', userName: 'joaosilva' },
    { id: 97654321899, fullName: 'João Silva', email: 'joao@gmail.com', tp: 'USR', userName: 'joaosilva' },
    { id: 89654321899, fullName: 'João Silva', email: 'joao@gmail.com', tp: 'USR', userName: 'joaosilva' },
    // Adicione mais usuários conforme necessário
    // Preencha com os dados necessários do banco de dados
];
  

function Usuarios () {

  return (
    <>
    <div className="NavBar">
      <Navbar />
    </div>

    
    <div className="usuarios-container"> 
      <Title text="Usuários"/>
      <div className="dados-usuario">
        <div className="button-usuario">
          <NavLink to="/usuarios/cadastrousuarios">
            <CustomButton>ADICIONAR</CustomButton>
          </NavLink>
        </div>
        <div className="tabela-usuario">
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



export default Usuarios
