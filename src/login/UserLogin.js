import React from "react";
import InputBox from "../components/InputBox";
import "./App.css";
import ButtonComp from "../components/Button";
export default function UserLogin() {
  return (
    <>
      <div className="container">
        <div className="flexcenter">
          <div className="box">
            <InputBox inputname="Email" inputtype="text" />
            <br />
            <InputBox inputname="Password" inputtype="password" />
            <br />
            <ButtonComp buttonname="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}
