import React from "react";
import './switchButton.css';

export default function SwitchButton(){
  return(
    <div class="wrapper">
      <input type="checkbox" id="switch"/>
      <label for="switch" class="switch_label">
        <span class="onf_btn"></span>
      </label>
    </div>
  );  
}