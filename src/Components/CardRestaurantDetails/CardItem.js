import React from "react";
import styled from "styled-components";

const MAINCONTAINER = styled.div`
  display: flex;
  height: 100vh;
  padding: 15px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    height: 5em;
  }
`;

const DIVCONTAINER = styled.div`
  background-color: white;
  border: 1px solid black;
  display: flex;
  border-radius: 10px;
  height: 7.5em;
  width: 19em;
`;

const LEFTSIDE = styled.div`
  margin: 0em;
  width: 50vh;
`;

const RIGHTSIDE = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -2.5em;
`;

const INFO = styled.div`
  margin-left: -2em;
`;
const INFOFOOD = styled.p`
  margin: 0;
`;
const DIVBUTTON = styled.button`
  float: right;
  margin: 1.1em -2.4em;
  margin-left: 4px;
  border-radius: 8px 0;
  border: 1px solid gray;
`;

const IMG = styled.img`
  height: 7.5em;
  width: 6.5em;
`;
const DIVNOME = styled.p`
  color: red;
  margin-top: -1em;
`;

const PRECO = styled.p`
  margin: 0.5em 0;
`;

function CardItem() {
  return (
    <MAINCONTAINER>
      <DIVCONTAINER>
        <LEFTSIDE>
          <IMG src="https://picsum.photos/420" alt="" />
        </LEFTSIDE>
        <RIGHTSIDE>
          <INFO>
            <DIVNOME>Burger</DIVNOME>
            <INFOFOOD>pão, queijo, carne, tomate, cebola roxa</INFOFOOD>
            <DIVBUTTON>Adicionar</DIVBUTTON>
            <PRECO>R$27,00</PRECO>
          </INFO>
        </RIGHTSIDE>
      </DIVCONTAINER>
    </MAINCONTAINER>
  );
}

export default CardItem;
