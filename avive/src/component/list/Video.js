import React from "react";
import './video.css';

function Video(props) {

  return (
    <li>
      <div style={{display:'flex', flexDirection: "column", marginBottom:"1rem", padding:"0 2rem"}}>
        <div style={{marginRight:"1rem"}}>
          <img style={{width:"450px", height:"250px", borderRadius:20}} 
          src="https://i.ytimg.com/vi/hdKQohqoR50/mqdefault.jpg"/>
        </div>
            
        <div style={{fontSize:20}}>
          <img style={{ marginTop:5 ,width:35,height: 35,borderRadius: 25}} 
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
          <span style={{marginLeft:"20px"}}>{props.title}</span><br/>
          <span style={{marginLeft:"50px"}}>{props.nickname}</span><br/>
          <span style={{marginLeft:"50px", color:'gray'}}>2.3K views / 1 hours ago</span>
        </div>
      </div>
    </li>
  );
}

export default Video;