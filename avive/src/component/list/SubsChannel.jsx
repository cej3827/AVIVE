import React from "react";
import styled from "styled-components";

const Chan_name = styled.b `
  font-size: medium;
  font-family: 'Jockey One';
  text-align: center;
  padding-top: 7px;
`;

export default function SubsChannel(props){
  return (
    <div style={{display:'flex', flexDirection:'column', paddingRight:'50px'}}>
      <img style={{width:85, height: 85, borderRadius: 50}} 
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
      <Chan_name style={{display:'flex', marginTop:'1px', marginLeft:'13px'}}>{props.channelname}</Chan_name>
    </div>
  );
}