import React from 'react';
import './Cad_usuarios.css';
import ButtonSalve from '../../components/buttonsalve/ButtonSalve';
import Title from '../../components/Texts/Title/Title';
import CheckboxUser from '../../components/CheckBox/CheckBox';
import Subtitle from '../../components/Texts/Subtitle/Subtitle';
import CustomInput from '../../components/input/input'


function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, '$1.$2.$3-$4')
  
}






function Cad_usuarios() {
  return (
    <>
    <header>
    <Title text="Cadastro de Usuários"/>
    </header>
    <section>
    <form>
    <CustomInput type="text" label="CPF" onChange={formatarCPF}/>
    <CustomInput type="text" label="Nome Completo"/>
    <CustomInput type="email" label="Email"/>
    <Subtitle text="Tipo de usuário"/>
    <CheckboxUser/>
    <CustomInput type="text" label="Nome do usuário"/>
    <CustomInput type="password" label="Senha"/>
    <ButtonSalve text="Salvar"/>
    </form>
    </section>
    </>
  )
}
export default Cad_usuarios
