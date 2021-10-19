import React from "react";
import Logo  from '../../assets/logo.png'
import Back  from '../../assets/back.png'
import { ContainerRegistration, ImageLogo, ContainerReturn, ButtonReturn,  Title, Text, Form, Input, Button, TextName, TextEmail, TextCpf, TextSenha, TextConfirmar } from "./styles";
import useForm from '../../hooks/useForm'
import axios from "axios";



function RegistrationPage() {

  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  })

  const onClickSend = (e) => {
    e.preventDefault()

    const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
    }

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup', body).then((response)=>{
      localStorage.setItem('token', response.data.token)
      console.log(response.data.token)

    }).catch((error)=>{
     console.log(error.message) 
    })

    clean()

  }


    return (
      <ContainerRegistration>
      
        <ContainerReturn>
         <ButtonReturn src={Back}/>
       </ContainerReturn>
       
       <ImageLogo src={Logo}/>
       <Title>
       <Text>Cadastrar</Text>
       </Title>

       <Form onSubmit={onClickSend}>

         <TextName>Nome*</TextName>
         <Input
          name={'name'}
          onChange={onChange}
          value={form.name}
          requerid
          pattern={"^.{10,}"}
          title={'O texto deve ter pelo menos 10 caracteres.'}
          placeholder='Nome e Sobrenome'/>

         <TextEmail>E-mail*</TextEmail>
         <Input 
           name={'email'}
           onChange={onChange}
           placeholder='Email'
           value={form.email}
           type='email'
           requerid
           placeholder='email@email.com'/>

         <TextCpf>CPF*</TextCpf>
         <Input
           maxLength='14'
           title={'Cpf deve possuir 11 números. Deve ser preenchido com pontos e traços.'}
           pattern={"^.{14,}"}
           name={'cpf'}
           value={form.cpf}
           onChange={onChange}
           placeholder='000.000.000-00'
           />

         <TextSenha>Senha*</TextSenha>
         <Input 
           type='password'
           requerid
           pattern={"^.{6,}"}
           title={'O texto deve ter pelo menos 6 caracteres.'}
           placeholder='Mínimo 6 caracteres'/>
        
         <TextConfirmar>Confirmar*</TextConfirmar>
         <Input
           name={'password'}
           type='password'
           onChange={onChange}
           value={form.password}
           requerid
           pattern={"^.{6,}"}
           title={'Deve ser a mesma que a anterior.'}
           placeholder='Confirme a senha anterior'/>

         <Button>Criar</Button>

       </Form>
      </ContainerRegistration>
    );
  }
  
  export default RegistrationPage
  