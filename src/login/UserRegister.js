import InputBox from "../components/InputBox";
import "./App.css";
import ButtonComp from "../components/Button";
import axios from "axios";
import { useState, useEffect } from "react";
function UserRegister() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="flexcenter">
          <div className="box">
            <InputBox
              idname="firstname"
              inputname="Firstname"
              inputtype="text"
            />
            <br />
            <InputBox idname="lastname" inputname="Lastname" inputtype="text" />
            <br />
            <InputBox idname="email" inputname="Email" inputtype="text" />
            <br />
            <InputBox
              idname="password"
              inputname="Password"
              inputtype="password"
            />
            <br />
            <ButtonComp buttonname="Submit" />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister;
