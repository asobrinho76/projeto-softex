import React from 'react';
import TextBox from '../../components/textbox/TextBox';
import './CadMidias.css';
import ButtonUpload from '../../components/Buttons/buttonUpload/ButtonUpload';
import Label from '../../components/Texts/label/Label';
import ButtonSalve from '../../components/Buttons/buttonSalve/ButtonSalve';
import Title from '../../components/Texts/Title/Title';
import SubTitle from '../../components/Texts/Subtitle/Subtitle';
import CheckboxMidia from '../../components/CheckBox/CheckBoxMidia';
import Subtitle from '../../components/Texts/Subtitle/Subtitle';
import ResponsiveDatePickers from '../../components/Calendar/Calendar'










export default function Cad_Midia() {
  return (
    <>
    <header>
    <Title text="Cadastro de Mídias"/>
    </header>
    <section>
      <div>      
    <TextBox label="Titulo"/>
    <TextBox label="Descrição"/>
    <SubTitle text="Tipo de Midia"/>
    <CheckboxMidia/>
    <ButtonUpload label="Anexar"/>
    <Label text1="*Imagem até 50MB" text2="*Vídeo até 5 minutos"/>
    <Subtitle text="Período de exibição"/>
    <ResponsiveDatePickers/>
    <ButtonSalve text="Salvar"/>
    </div>
    </section>
    </>
  )
}
