import React from "react";
import './categoryList.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function change_btn(e) {
  var btns = document.querySelectorAll(".button");
  btns.forEach(function (btn, i) {
    if (e.currentTarget == btn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  console.log(e.currentTarget);
}

const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 10px 10px;
  overflow-y: hidden;
  width: 1550px;
`;


function CategoryList(){

  return(
    <ListStyle>
      <button style={{marginRight:"20px"}} class="button" id="1" onclick={change_btn}>all</button>
      <button style={{marginRight:"20px"}} class="button" id="2" onclick={change_btn}>vlog</button>
      <button style={{marginRight:"20px"}} class="button" id="3" onclick={change_btn}>game</button>
      <button style={{marginRight:"20px"}} class="button" id="4" onclick={change_btn}>movie</button>
      <button style={{marginRight:"20px"}} class="button" id="5" onclick={change_btn}>music</button>
      <button style={{marginRight:"20px"}} class="button" id="6" onclick={change_btn}>beauty</button>
      <button style={{marginRight:"20px"}} class="button" id="7" onclick={change_btn}>cooking</button>
      <button style={{marginRight:"20px"}} class="button" id="8" onclick={change_btn}>develop</button>
      <button style={{marginRight:"20px"}} class="button" id="9" onclick={change_btn}>etc</button>
      <button style={{marginRight:"20px"}} class="button" id="10" onclick={change_btn}>etc</button>
      <button style={{marginRight:"20px"}} class="button" id="11" onclick={change_btn}>etc</button>

    
    </ListStyle>
  );
}

export default CategoryList;