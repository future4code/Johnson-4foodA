import React from "react";
import styled from "styled-components";
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import Back  from '../../assets/back.png'
import useForm from '../../hooks/useForm'
import axios from "axios";
import { useHistory } from 'react-router-dom';

const MySwal = withReactContent(Swal)



const ContainerAddressRegistration = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

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
  cursor: pointer;
`
const TextLogradouro = styled.p`
position: absolute;
top: -10px;
right: 222px;
background-color: white;
width: 110px;
color: grey;
`
const TextNumero = styled.p`
position: absolute;
top: 66px;
right: 260px;
background-color: white;
width: 70px;
color: grey;

`
const TextComplemento= styled.p`
position: absolute;
top: 142px;
right: 222px;
background-color: white;
width: 110px;
color: grey;

`

const TextBairro= styled.p`
position: absolute;
top: 216px;
right: 260px;
background-color: white;
width: 70px;
color: grey;

`

const TextCidade= styled.p`
position: absolute;
top: 292px;
right: 260px;
background-color: white;
width: 70px;
color: grey;

`

const TextEstado= styled.p`
position: absolute;
top: 366px;
right: 260px;
background-color: white;
width: 70px;
color: grey;
`


function AddressRegistrationPage() {
     
  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  })
  
  const history = useHistory()
  
  
  const onClickSend = (e) => {
    e.preventDefault()

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    }


    const token = localStorage.getItem('token')
    console.log(token)

    axios.put('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/address', body,  {headers: {
      auth: token
    }}).then((response)=>{
      localStorage.setItem('token', response.data.token)
      console.log(response)
      history.push("/home")

      MySwal.fire(
        'Endereço cadastrado com sucesso.',
        '',
        'success'
    )

    }).catch((error)=>{
     console.log(error.message)
     MySwal.fire(
      'Endereço não foi cadastrado, tente novamente.',
      '',
      'error'
  )
    })

    clean()

  }
   
  const Return = () => {
    history.goBack()
  }

    return (
      <ContainerAddressRegistration>

        <ContainerReturn>
          <ButtonReturn onClick={Return} src={Back} />
        </ContainerReturn>

       <Title>
       <Text>Meu endereço</Text>
       </Title>
       <Form onSubmit={onClickSend}>

         <TextLogradouro>Logradouro*</TextLogradouro>
         <Input 
           name={'street'}
           onChange={onChange}
           value={form.street}
           requerid
           pattern={"^.{5,}"}
           title={'O texto deve ter pelo menos 5 caracteres.'}
           placeholder='Rua / Av.'
         />
         
         <TextNumero>Número*</TextNumero>
         <Input
           name={'number'}
           onChange={onChange}
           value={form.number}
           requerid
           pattern={"^.{2,}"}
           title={'O texto deve ter pelo menos 2 caracteres.'}
           placeholder='Número'
         />
         
         <TextComplemento>Complemento*</TextComplemento>
         <Input
         name={'complement'}
         onChange={onChange}
         value={form.complement}
         placeholder='Apto./Bloco'
         />
         
         <TextBairro>Bairro*</TextBairro>
         <Input
            name={'neighbourhood'}
            onChange={onChange}
            value={form.neighbourhood}
            requerid
            pattern={"^.{5,}"}
            title={'O texto deve ter pelo menos 5 caracteres.'}
            placeholder='Bairro'
         />
         
         <TextCidade>Cidade*</TextCidade>
         <Input
         name={'city'}
         onChange={onChange}
         value={form.city}
         requerid
         pattern={"^.{3,}"}
         title={'O texto deve ter pelo menos 3 caracteres.'} 
         placeholder='Cidade'
         />
         
         <TextEstado>Estado*</TextEstado>
         <Input
             name={'state'}
             onChange={onChange}
             value={form.state}
             requerid
             pattern={"^.{3,}"}
             title={'O texto deve ter pelo menos 3 caracteres.'}  
             placeholder='Estado'
         />

         <Button>Salvar</Button>
       </Form>
      </ContainerAddressRegistration>
    );
  }
  
  export default AddressRegistrationPage;
  