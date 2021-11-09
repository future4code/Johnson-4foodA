import React from "react";

import styled from "styled-components";

const MAINCONTAINEIR = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const CARD = styled.div`
  background: white;
  width: 22.5em;
  height: 19em;
  margin: 1em;
  border: 1px solid black;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 19em;
    height: 17em;
  }
`;

const DIVIMG = styled.img`
  background: cover;
  height: 7.5em;
  margin-bottom: 15px;
  border-radius: 5px;
  width:100%;
`;

const P = styled.p`
  color: red;
  margin: 5px;
  padding: 5px;
`;
const NOME = styled.p`
  color: #999999;
  margin: 5px;
  padding: 5px;
`;

const TEMPO = styled.p`
  color: #999999;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
`;

const FRETE = styled.p`
  color: #999999;
  display: flex;
  display: flex;
  margin-left: 200px;
  margin-top: -32px;
`;

function CardRestaurantDetails() {
  return (
    <MAINCONTAINEIR>
      <CARD>
        <DIVIMG src="https://picsum.photos/420" alt="" />
        <P>Bullburger Vila Madalena </P>
        <NOME>Burguer</NOME>
        <TEMPO>50 - 60 min</TEMPO>
        <FRETE>Frete: R$ 6,00</FRETE>
      </CARD>
    </MAINCONTAINEIR>
  );
}

export default CardRestaurantDetails;
