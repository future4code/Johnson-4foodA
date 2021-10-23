import styled from "styled-components";
import React from "react";

export const ContainerRegistration = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`

export const ImageLogo = styled.img`
margin: 1.5rem 8rem 1rem;
`

export const ContainerReturn = styled.div`
width: 100%;
height: 4rem;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
display: flex;
justify-content: first baseline;
align-items: center;
`

export const ButtonReturn = styled.img`
cursor: pointer;
padding-left: 2rem;
`

export const Title = styled.div`
  width: 22.5rem;
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Text = styled.h3`
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

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 max-width: 100%;

`
export const Input = styled.input`
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
export const Button = styled.button`
  width: 100%;
  height: 2.625rem;
  margin: 1.2rem 0 0;
  padding: 0 1rem;
  border: none;
  color: black;
  background-color: #e8222e;
  cursor: pointer;
`
// export const TextName = styled.p`
// position: absolute;
// top: -10px;
// right: 260px;
// background-color: white;
// width: 70px;
// color: grey;
// `
// export const TextEmail = styled.p`
// position: absolute;
// top: 66px;
// right: 260px;
// background-color: white;
// width: 70px;
// color: grey;

// `
// export const TextCpf = styled.p`
// position: absolute;
// top: 142px;
// right: 260px;
// background-color: white;
// width: 70px;
// color: grey;

// `

// export const TextSenha = styled.p`
// position: absolute;
// top: 216px;
// right: 260px;
// background-color: white;
// width: 70px;
// color: grey;

// `
// export const TextConfirmar = styled.p`
// position: absolute;
// top: 292px;
// right: 230px;
// background-color: white;
// width: 100px;
// color: grey;

// `
// export const EyePassword = styled.img`
// width: 28px;
// height: 28px;
// position: absolute;
// bottom: 154px;
// right: 8px;
// cursor: pointer;
// `
// export const EyeConfirm = styled.img`
// width: 28px;
// height: 28px;
// position: absolute;
// bottom: 75px;
// right: 8px;
// cursor: pointer;
// `
// export const P = styled.p`
// position: absolute;

// `
export const Label = styled.label`

`
export const ErrorMessage = styled.p`
color: red;
`

export const CompleteInput = ({label, value, onChange}) =>{


  return (
         <div>
           <Label>{label}</Label>
           <Input
            value={value.value}
            onChange={onChange}
           />
           <ErrorMessage>{value.error}</ErrorMessage>
         </div>
  )
}