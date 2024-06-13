import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* set_name */

  position: relative;
  width: 600px;
  height: 155px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

`;

const Header = styled.div`
  /* Group 179 */

  position: absolute;
  width: 600px;
  height: 56.56px;
  left: -0.05px;
  top: 0px;
`;

const Hr = styled.hr`
  /* Line 6 */

  position: absolute;
  width: 600px;
  height: 0px;
  left: -0.05px;
  top: 56.56px;

  border: 0.5px solid #B7B7B7;

`;

const ModalTitle = styled.div`
  /* Group 18 */

  position: absolute;
  width: 425.95px;
  height: 44.97px;
  left: 86px;
  top: 0px;

`;

const Button = styled.button`
  /* Rectangle 61 */

  position: absolute;
  width: 59px;
  height: 54px;
  left: 511px;
  top: 81px;

  background: #F2F2F2;
  border-radius: 10px;
  text-align: center;
`;

const NameUnderLine = styled.hr`
    /* Line 7 */

  position: absolute;
  width: 400px;
  height: 0px;
  left: 88px;
  top: 127px;

  border: 1px solid #ADADAD;

`;

const NameText = styled.div`
  /* ckthdud */

  position: absolute;
  width: 147px;
  height: 39px;
  left: 221px;
  top: 86px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;


`;

export default function SetNameModal(props){
  return(
    <Wrapper>
      <Header>
        <ModalTitle>name</ModalTitle>
        <Hr/>
      </Header>

      <NameText>{props.name}</NameText>
      <NameUnderLine/>
      <Button>ok</Button>
    </Wrapper>
  );
}