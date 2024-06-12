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

function SetNameModal(){
  return(
    <Wrapper>

    </Wrapper>
  );
}