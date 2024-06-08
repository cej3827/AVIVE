import React from "react";
import './categoryList.css';

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

function CategoryList(){
  return(
    <div style={{padding:"10px 10px 10px 10px"}}>
      <button style={{marginRight:"20px"}} class="button" id="1" onclick={change_btn}>all</button>
      <button style={{marginRight:"20px"}} class="button" id="2" onclick={change_btn}>vlog</button>
      <button style={{marginRight:"20px"}} class="button" id="3" onclick={change_btn}>game</button>
      <button style={{marginRight:"20px"}} class="button" id="4" onclick={change_btn}>movie</button>
      <button style={{marginRight:"20px"}} class="button" id="5" onclick={change_btn}>music</button>
    </div>
  );
}

export default CategoryList;