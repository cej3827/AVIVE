import React from "react";
import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  /* Group 100 */
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 8px;

  background-color: white;
  border-bottom: 0.5px solid #B7B7B7;
`;

const Title = styled.button`

  /* AVIVE */

  position: absolute;
  width: 108px;
  height: 36px;
  left: 700px;
  top: 25px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #111154;

  border: none;
  background-color: white;

`;

const PageInfo = styled.span`
  /* personal information */

  position: absolute;
  width: 350px;
  height: 29.36px;
  left: 830px;
  top: 25px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #7D7DA7;


`;

const BackIcon = styled(IoChevronBackSharp)`
  /* Arrow back ios */

  position: absolute;
  width: 30px;
  height: 30px;
  left: 21px;
  top: 25px;
`;

/* const Line = styled.div`

  position: absolute;
  width: 1700px;
  height: 0px;
  left: 0px;
  top: 111px;

  border: 0.5px solid #B7B7B7;
`; */

export default function HeaderSet(props){
  const navigate = useNavigate();

  const onClickToHome1 = () => {
    navigate('/Home1');
  };

  const onClickBack = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 가능
  };

  return(
    <Wrapper>
      <Title onClick={onClickToHome1}>AVIVE</Title>
      <PageInfo>{props.name}</PageInfo>
      <BackIcon onClick={onClickBack}/>
    </Wrapper>
  );
}
