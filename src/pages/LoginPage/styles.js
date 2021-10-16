import React from "react";
import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ImageLogo = styled.img`
  margin: 1.5rem 8rem 1rem;
`;
export const ContainerReturn = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: first baseline;
  align-items: center;
`;

export const TituloEntrar = styled.div`
  width: 22.5rem;
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
`;
export const Input = styled.input`
  width: 17.5rem;
  height: 1.2rem;
  margin: 1rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
  border: solid 1px gray;
  ::placeholder {
    color: lightgrey;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 2.625rem;
  margin: 1.2rem 0 0;
  padding: 0 1rem;
  border: none;
  color: black;
  background-color: #e8222e;
`;
export const TextEmail = styled.p`
  position: absolute;
  top: -10px;
  right: 260px;
  background-color: white;
  width: 70px;
  color: grey;
`;
export const TextPassword = styled.p`
  position: absolute;
  top: 66px;
  right: 260px;
  background-color: white;
  width: 70px;
  color: grey;
`;

export const TextSenha = styled.p`
  position: absolute;
  top: 216px;
  right: 260px;
  background-color: white;
  width: 70px;
  color: grey;
`;
export const ButtonCadastro = styled.p`
  width: 18.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;
