import React from 'react';
import './Cad_midias.css';
import ButtonUpload from '../../components/buttonupload/ButtonUpload';
import Label from '../../components/Texts/label/Label';
import ButtonSalve from '../../components/buttonsalve/ButtonSalve';
import Title from '../../components/Texts/Title/Title';
import SubTitle from '../../components/Texts/Subtitle/Subtitle';
import CheckboxMidia from '../../components/CheckBox/CheckBoxMidia';
import Subtitle from '../../components/Texts/Subtitle/Subtitle';
import ResponsiveDatePickers from '../../components/Calendar/Calendar'
import CustomInput from '../../components/input/input'

 function Cad_midias() {
  return (
    <>
    <header>
    <Title text="Cadastro de Mídias"/>
    </header>
    <section>
      <div>      
    <CustomInput label="Titulo"/>
    <CustomInput label="Descrição"/>
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
export default Cad_midias
