import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* password_completeChanging */

  position: relative;
  width: 430px;
  height: 159px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

`;

const Contents = styled.div`
  position: absolute;
  width: 375px;
  height: 62px;
  left: 27px;
  top: 29px;

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

const ButtonOff = styled.button`
  /* Rectangle 48 */

  position: absolute;
  width: 100px;
  height: 35px;
  left: 107px;
  top: 105px;

  background: #C3C3C4;
  border-radius: 15px;

`;

const ButtonOn = styled.button`
  /* Rectangle 48 */

  position: absolute;
  width: 100px;
  height: 35px;
  left: 165px;
  top: 105px;

  background: #111154;
  border-radius: 15px;
  text-align: center;
  border:none;
  color:white;
  font-size: 18px;
`;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PasswordCompleteChangingModal = ({closeDModal}) => {
  return (
    <Outer onClick={closeDModal}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Contents>Your PW has been successfully changed !</Contents>
        <ButtonOn onClick={closeDModal}>OK</ButtonOn>
      </Wrapper> 
    </Outer>
  );
};

export default PasswordCompleteChangingModal;