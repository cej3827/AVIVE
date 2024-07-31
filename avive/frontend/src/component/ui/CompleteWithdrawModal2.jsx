import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Contents = styled.div`

  position: absolute;
  width: 375px;
  height: 62px;
  left: 27px;
  top: 29px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

`;

const ButtonOn = styled.button`
  /* Rectangle 48 */

  position: absolute;
  width: 100px;
  height: 35px;
  left: 165px;
  top: 108px;

  background: #111154;
  border-radius: 15px;
  border: none;
  color:white;
  font-size: 18px;
`;

const Wrapper = styled.div`
  /* complete_withdraw_2 */

  position: relative;
  width: 430px;
  height: 159px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

`;

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
`;

export default function CompleteWithdrawModal2({closeModal2}){

  const navigate = useNavigate();

  const onClickToHome1 = () => {
    navigate('/Home1');
  };

  return (
    <Outer onClick={closeModal2}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Contents>You’ve been withdrawn. 
          We hope to see U again 💗</Contents>
        <ButtonOn onClick={onClickToHome1}>OK</ButtonOn>
      </Wrapper>
    </Outer>
  );
}