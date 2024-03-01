import React, { useState, createContext } from "react";

export default function FCLogin(props) {
  const [userNameValid, setUserNameValid] = useState([]);
  const [passwordValid, setPasswordValid] = useState([]);
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  const [userCheck, setCheck] = useState([]);

  const checkUserNameValid = (e) =>{
    let string = e.target.value;
    setUserName(string);
  }
  const checkPasswordValid = (e)=>{
    let string = e.target.value;
    setPassword(string);
  }
  const loginUser = () =>{
    if (userName === "admin" && password === "ad12343211ad") {
      setCheck("");
      props.logA();
    }
    let flag = 0;
    if (userName.length > 60) {
      setUserNameValid("The Length Of user Name is too Long");
      flag++;
    } else if (
      !/^[A-Za-z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(userName) ||
      userName == ""
    ) {
      flag++;
      setUserNameValid("Only Letters In English and Numbers!!");
    } else {
      setUserNameValid("");
    }
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{7,12}$/;
    if (!regex.test(password)) {
      flag++;
      setPasswordValid("Password should Be between 7-12");
    } else {
      setPasswordValid("");
    }

    if (flag == 0) {
      const details = {name:userName,password};
      props.log(details)? setCheck(""):setCheck("user NOT exists !!!");
    }
  }
  return (
    <div className="login-panel">
      <h1>Login Page</h1>
      <table>
        <tbody>
        <tr>
            <td colSpan={2}>
              <h3>{userNameValid}</h3>
            </td>
          </tr>
          <tr>
            <td>User Name:</td>
            <td>
              <input type="text" onChange={checkUserNameValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{passwordValid}</h3>
            </td>
          </tr>

          <tr>
            <td>Password:</td>
            <td>
              <input type="password" onChange={checkPasswordValid}></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={loginUser}>Send</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{userCheck}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
