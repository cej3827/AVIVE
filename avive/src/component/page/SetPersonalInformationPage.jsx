import React from "react";
import styled from "styled-components";
import HeaderSet from "../components/HeaderSet";


const TextsWrapper = styled.div`
  /* Group 175 */

  position: absolute;
  width: 810px;
  height: 82px;
  left: 81px;
  top: 173px;

`;

const SmallTitle = styled.div`

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 70px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const Contents = styled.div`

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  width: 1500px;

  color: #999999;

`;

const WrapperInputBox = styled.div`

  position: absolute;
  width: 1500px;
  height: 380px;
  left: 81px;
  top: 320px;

  background: #E7E7E7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 29px;

`;

const BoxTexts = styled.div`
  /* now */
  position: absolute;
  width: 500px;
  height: 38.61px;
  left: 35px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 56px;
  display: flex;
  align-items: center;

  color: #000000;

`;

const InputBox = styled.input`
  /* Rectangle 13 */

  position: absolute;
  width: 1400px;
  height: 43px;
  left: 35px;

  background: #FFFFFF;
  border-radius: 29px;
  border:none;

`;

const Line = styled.div`

  position: absolute;
  width: 804px;
  height: 0px;
  top: 830px;
  left: 480px;  

  border: 1px solid #D6D6D6;
  transform: rotate(0.07deg);

`;

const WithdrawBtn = styled.button`
  /* withdraw from avive */

  position: absolute;
  width: 366px;
  height: 38.61px;
  left: 750px;
  top: 850px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #C10000;

  background-color: white;
  border:none;
`;

const DoneBtn = styled.button`
  /* Done */

  position: absolute;
  width: 110px;
  height: 50px;
  left: 800px;
  top: 750px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  background-color: white;
  border: none; 
`;

export default function SetPersonalInformation(){
  return(
    <div>
      <HeaderSet name="personal information"/>
      <TextsWrapper>
        <SmallTitle>Change my password</SmallTitle>
        <Contents>The password must be included English, numbers, and special characters with 12 or more characters (with !,@,#,$,% ,^,&).</Contents>
      </TextsWrapper>

      <WrapperInputBox>
        <BoxTexts style={{top:'20px'}}>now</BoxTexts>
        <InputBox style={{top:'70px'}}/>
        <BoxTexts style={{top:'130px'}}>new</BoxTexts>
        <InputBox style={{top:'180px'}}/>
        <BoxTexts style={{top:'240px'}}>verify new</BoxTexts>
        <InputBox style={{top:'290px'}}/>
      </WrapperInputBox>

      <DoneBtn onClick={()=>{navigateto('/Home2Full');}}>Done</DoneBtn>

      <Line/>
      <WithdrawBtn>Withdraw from avive</WithdrawBtn>   
    </div>
  );
}