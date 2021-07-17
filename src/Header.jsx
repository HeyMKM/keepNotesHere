import React from "react";
import { useState } from "react";
import logo from "./Images/notes.jpg";

const Header = () => {
  let currTime = new Date().toLocaleTimeString();
  let [time, setTime] = useState(currTime);

  setInterval(() => {
    let currTime = new Date().toLocaleTimeString(); 
    setTime(currTime)
  }, 1000);

  return (
    <>
      <div className="header">
        <h1 style={{paddingLeft: "70px"}}>Keep Here</h1>
        <img src={logo} alt="logo" width="50px" height="50" style={{position: "fixed"}} />
        <h2 style={{color:"black"}}>{time}</h2>
      </div>
    </>
  );
};
export default Header;
