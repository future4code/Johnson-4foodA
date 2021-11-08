import React,{useState} from "react";
import {
  Button,
  ButtonCadastro,
  ContainerLogin,
  Form,
  ImageLogo,
  Input,
  TextEmail,
  TextPassword,
  TituloEntrar,
} from "./styles";
import logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });
 
  const history = useHistory()

  const [hasAddress, setHasAddress] = useState(false)

  const onClickSend = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login",
        body
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token)
        console.log(response.data.user.hasAddress)
        setHasAddress(response.data.user.hasAddress)

        if(hasAddress === false){
          history.push("/endereco")
        }else {
          history.push("/detalhes")
        }

      })
      .catch((error) => {
        console.log(error.message);
      });
    clean();
  };

  const onClickRegister = () =>{
    history.push('/cadastro')
  }
 
  return (
    <ContainerLogin>
      <ImageLogo src={logo} />
      <TituloEntrar>Entrar</TituloEntrar>
      <Form onSubmit={onClickSend}>
        <TextEmail>E-mail</TextEmail>
        <Input
          placeholder="email@email.com"
          type="email"
          name={"email"}
          onChange={onChange}
          value={form.email}
          required
        />
        <TextPassword>Senha</TextPassword>
        <Input
          placeholder="Mínimo 6 caracteres"
          type="password"
          name={"password"}
          onChange={onChange}
          value={form.password}
          required
        />
        <Button> Entrar </Button>
        <span>Não possui cadastro? <ButtonCadastro onClick={onClickRegister}>Clique aqui</ButtonCadastro></span>
      </Form>
    </ContainerLogin>
  );
};
