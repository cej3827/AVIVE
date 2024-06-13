import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* complete_withdraw_1 */

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
  left: 226px;
  top: 105px;

  background: #111154;
  border-radius: 15px;

`;

export default function CompleteWithdrawModal1 (){
  return (
    <Wrapper>
      <Contents>Are you sure you’re leaving ʕ ´•̥̥̥ ᴥ•̥̥̥`ʔ ?</Contents>
      <ButtonOff>yes</ButtonOff>
      <ButtonOn>no!</ButtonOn>
    </Wrapper>
  );
}