import { Button } from "@mui/material";
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

  const signup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users', {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
      });
      console.log('Registration successful:', response.data);
      // Redirect or show a success message as needed
      alert('Registration successful');
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration failure, show error message, etc.
    }
  }
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
            <ButtonComp buttonname="Submit" click={signup} />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister;
