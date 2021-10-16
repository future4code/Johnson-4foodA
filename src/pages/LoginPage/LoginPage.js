import React from "react";
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
import useForm from "../../hooks/UseForm/UseForm";
import axios from "axios";

export const LoginPage = () => {
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });

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
      })
      .catch((error) => {
        console.log(error.message);
      });
    clean();
  };

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
        <ButtonCadastro>Não possui cadastro? Clique aqui</ButtonCadastro>
      </Form>
    </ContainerLogin>
  );
};
