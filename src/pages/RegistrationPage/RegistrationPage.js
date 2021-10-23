import React, { useState } from "react";
import Logo from '../../assets/logo.png'
import Back from '../../assets/back.png'
import Open from '../../assets/olho-aberto.png'
import Close from '../../assets/olho-fechado.png'
import { ContainerRegistration, EyePassword, CompleteInput, EyeConfirm, ImageLogo, ContainerReturn, ButtonReturn, Title, Text, Form, Input, Button, TextName, TextEmail, TextCpf, TextSenha, TextConfirmar } from "./styles";
import useForm from '../../hooks/useForm'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";




function RegistrationPage() {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [value, setValue] = useState('')

  const { form, onChange, onChangeName, clean, onChangePassword, onChangeConfirmPassword } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })

  const MySwal = withReactContent(Swal)

  const EyeOnClickPassword = () => {
    setShowPassword(!showPassword)

  }

  const EyeOnClickConfirm = () => {
    setShowConfirm(!showConfirm)

  }

  const cleanInputPassword = () => {
    setValue('')
  }



  const onClickSend = (e) => {
    e.preventDefault()



    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    }



    axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup', body).then((response) => {
      localStorage.setItem('token', response.data.token)
      console.log(response.data.token)
      MySwal.fire(
        'Usuário cadastrado com sucesso.',
        '',
        'success'
      )



    }).catch((error) => {
      MySwal.fire(
        'CPF ou email já existentes!',
        '',
        'error'
      )
    })

    clean()
    cleanInputPassword()

  }


  return (
    <ContainerRegistration>

      <ContainerReturn>
        <ButtonReturn src={Back} />
      </ContainerReturn>

      <ImageLogo src={Logo} />
      <Title>
        <Text>Cadastrar</Text>
      </Title>

      <Form onSubmit={onClickSend}>

        <CompleteInput
          value={form.name}
          onChange={onChangeName}
          label='Nome*'
        />

        <CompleteInput
          value={form.password}
          onChange={onChangePassword}
          label='Senha*'
        />

        <CompleteInput
          value={form.confirmPassword}
          onChange={onChangeConfirmPassword}
          label='Confirmar Senha*'
        />

        {/* <TextName>Nome*</TextName>
         <Input
          name={'name'}
          onChange={onChange}
          value={form.name}
          requerid
          pattern={"^.{10,}"}
          title={'O texto deve ter pelo menos 10 caracteres.'}
          placeholder='Nome e Sobrenome'/> */}

        {/* <TextEmail>E-mail*</TextEmail>
        <Input
          name={'email'}
          onChange={onChange}
          placeholder='Email'
          value={form.email}
          type='email'
          requerid
          placeholder='email@email.com' />

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
          type={showPassword ? 'text' : 'password'}
          requerid
          value={form.password}
          onChange={onChange}
          pattern={"^.{6,}"}
          placeholder='Mínimo 6 caracteres' />

        {showPassword ? <EyePassword onClick={EyeOnClickPassword} src={Open} /> : <EyePassword onClick={EyeOnClickPassword} src={Close} />}

        <TextConfirmar>Confirmar*</TextConfirmar>
        <Input
          name={'password'}
          type={showConfirm ? 'text' : 'password'}
          onChange={onChange}
          value={form.confirmPassword}
          requerid
          pattern={"^.{6,}"}
          title={'Deve ser a mesma que a anterior.'}
          placeholder='Confirme a senha anterior' />

        {showConfirm ? <EyeConfirm onClick={EyeOnClickConfirm} src={Open} /> : <EyeConfirm onClick={EyeOnClickConfirm} src={Close} />} */}



        <Button>Criar</Button>

      </Form>
    </ContainerRegistration>
  );
}

export default RegistrationPage
