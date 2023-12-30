import React from 'react';
import './Cad_salas.css';
import ButtonSalve from '../../components/buttonsalve/ButtonSalve';
import Title from '../../components/Texts/Title/Title';
import CustomInput from '../../components/input/input'


export default function Cad_salas() {
  return (
    <>
    <header>
    <Title text="Cadastro de Salas"/>
    </header>
    <section>
    <CustomInput type="text" label="Andar"/>
    <CustomInput type="text" label="Salas"/>
    <ButtonSalve text="Salvar"/>
    </section>
    </>
  )
}
