import React from "react";
import InputBox from "../components/InputBox";
import "./App.css";
import ButtonComp from "../components/Button";
import axios from "axios";

export default function UserLogin() {

  const handleLogIn = async () => {
    if (document.getElementById("email").value != "" || document.getElementById("password").value != "") {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await axios.get('http://localhost:5000/users', {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            });

            const users = response.data;

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                // Login successful
               alert('Login successful');
                console.log('User logged in:', user);
            } else {
                alert('Invalid email or password');
                // Handle invalid login (show error message, etc.)
            }
        } catch (error) {
            console.error('There was a problem with the login operation:', error);
            // Handle login failure, show error message, etc.
        }
    } else {
        alert("Please enter email or password");
        return;
    }

};
  return (
    <>
      <div className="container">
        <div className="flexcenter">
          <div className="box">
            <InputBox idname="email" inputname="Email" inputtype="text" />
            <br />
            <InputBox idname="password" inputname="Password" inputtype="password" />
            <br />
            <ButtonComp buttonname="Submit" click={handleLogIn}/>
          </div>
        </div>
      </div>
    </>
  );
}
