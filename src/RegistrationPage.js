import React from "react";
import Logo  from './assets/logo.png'
import Back  from './assets/back.png'
import styled from "styled-components";
import useForm from './hooks/useForm'
import axios from "axios";

const ContainerRegistration = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;


`
const ImageLogo = styled.img`
margin: 1.5rem 8rem 1rem;
`

const ContainerReturn = styled.div`
width: 100%;
height: 4rem;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
display: flex;
justify-content: first baseline;
align-items: center;
`
const ButtonReturn = styled.img`
cursor: pointer;
padding-left: 2rem;
`
const Title = styled.div`
  width: 22.5rem;
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const Text = styled.h3`
  width: 18.5rem;
  height: 1.125rem;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
`
const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 max-width: 100%;

`
const Input = styled.input`
  
  width: 17.5rem;
  height: 1.2rem;
  margin: 1rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
  border: solid 1px gray;
  ::placeholder{
      color: lightgrey;
  }

 

`
const Button = styled.button`
  width: 100%;
  height: 2.625rem;
  margin: 1.2rem 0 0;
  padding: 0 1rem;
  border: none;
  color: black;
  background-color: #e8222e;
`
const TextName = styled.p`
position: absolute;
top: -10px;
right: 260px;
background-color: white;
width: 70px;
color: grey;
`
const TextEmail = styled.p`
position: absolute;
top: 66px;
right: 260px;
background-color: white;
width: 70px;
color: grey;

`
const TextCpf= styled.p`
position: absolute;
top: 142px;
right: 260px;
background-color: white;
width: 70px;
color: grey;

`

const TextSenha= styled.p`
position: absolute;
top: 216px;
right: 260px;
background-color: white;
width: 70px;
color: grey;

`

const TextConfirmar= styled.p`
position: absolute;
top: 292px;
right: 230px;
background-color: white;
width: 100px;
color: grey;

`

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

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/signup', body).then((response)=>{
      console.log(response)

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
       
       <ImageLogo src={Logo}></ImageLogo>
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
  
  export default RegistrationPage;
  