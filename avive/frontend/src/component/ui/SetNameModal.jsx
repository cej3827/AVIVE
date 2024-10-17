import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

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
  top: 47px;

  color: #cccccc;
  height: 0.05px;
`;

const ModalTitle = styled.div`
  /* Group 18 */

  position: absolute;
  width: 425.95px;
  height: 44.97px;
  left: 86px;
  top: 7px;

  font-size: 30px;
  color: #B2B2E0;
  text-align: center;
  align-items: center;
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

  border: none;
  font-size: 18px;
`;

const NameUnderLine = styled.hr`
    /* Line 7 */

  position: absolute;
  width: 400px;
  height: 0px;
  left: 88px;
  top: 127px;

  color: #cccccc;
  height: 0.5px;
`;

const NameText = styled.div`
  /* ckthdud */

  position: absolute;
  width: 147px;
  height: 39px;
  left: 250px;
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

const SetNameModal = ({closeNameModal}) => {
  
  return(
    <Outer onClick={closeNameModal}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <ModalTitle>name</ModalTitle>
          <Hr/>
        </Header>

        <NameText>name</NameText>
        <NameUnderLine/>
        <Button onClick={closeNameModal}>ok</Button>
      </Wrapper>
    </Outer>
  );
};

export default SetNameModal;