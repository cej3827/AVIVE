import React, { useState } from "react";
import './buttonList.css'

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

function ButtonList(){
  return(
    <div style={{padding:"10px 10px 10px 10px"}}>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>all</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>game</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>music</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>cook</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>travel</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>beauty</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>all</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>game</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>music</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>cook</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>travel</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>beauty</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>beauty</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>all</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>game</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>music</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>cook</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="1" onclick={change_btn}>travel</button>
      <button style={{marginRight:"20px", marginBottom:"20px"}} class="button" id="2" onclick={change_btn}>beauty</button>
    </div>
  );
}

export default ButtonList;