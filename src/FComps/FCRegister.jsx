import React, { useState, createContext } from "react";
import CityAutocomplete from "./CityAutocomplete";

export default function FCRegister(props) {
  const [userNameValid, setUserNameValid] = useState([]);
  const [passwordValid, setPasswordValid] = useState([]);
  const [pass, setpass] = useState("");
  const [confirmValid, setConfirmValid] = useState([]);
  const [imgValid, setImgValid] = useState([]);
  const [firstValid, setFirstValid] = useState([]);
  const [lastValid, setLastValid] = useState([]);
  const [emailValid, setEmailValid] = useState([]);
  const [birthDateValid, setBirthDateValid] = useState([]);
  const [streetValid, setStreetValid] = useState([]);
  const [phoneValid, setPhoneValid] = useState([]);
  const [cityValid, setCityValid]=useState([]);

  const [city, setCity] = useState([]);
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  const [img, setImg] = useState([]);
  const [first, setFirst] = useState([]);
  const [last, setLast] = useState([]);
  const [email, setEmail] = useState([]);
  const [birthDate, setBirthDate] = useState([]);
  const [street, setStreet] = useState([]);
  const [phone, setPhone] = useState([]);
 
  const registerUser = (e) => {
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
    if (!regex.test(pass)) {
      flag++;
      setPasswordValid("Password should Be between 7-12");
    } else {
      setPasswordValid("");
    }

    if (password != pass) {
      flag++;
      setConfirmValid("Passwords not Match!");
    } else {
      setConfirmValid("");
    }

    

    if (!/^[A-Za-z]+$/.test(first)) {
      flag++;
      setFirstValid("Only Letters");
    } else {
      setFirstValid("");
    }

    if (!/^[A-Za-z]+$/.test(last)) {
      flag++;
      setLastValid("Only Letters");
    } else {
      setLastValid("");
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[c][o][m]$/.test(email)) {
      flag++;
      setEmailValid("Wrong Email Format");
    } else {
      setEmailValid("");
    }

    let age = Math.floor(
      (new Date() - new Date(birthDate).getTime()) / 3.15576e10
    );
    if (age <= 18 || age >= 120 || birthDate == "") {
      flag++;
      setBirthDateValid("Age are Not Valid");
    } else {
      setBirthDateValid("");
    }

    if (!/^[\u0590-\u05FF]+$/.test(street)) {
      flag++;
      setStreetValid("Only Hebrew Letters!");
    } else {
      setStreetValid("");
    }
    if (!/^\d*[1-9]\d*$/.test(phone)) {
      flag++;
      setPhoneValid("Only Positive Digits");
    } else {
      setPhoneValid("");
    }
    
  

    
    const user = {
      name: userName,
      password: password,
      first: first,
      last: last,
      email: email,
      img:img,
      birthDate: birthDate,
      city:city,
      street: street,
      phone: phone,
    };
    
  
    if (flag == 0) {
      let check =props.reg(user);
      if (!check) {
        setUserNameValid("User Name Already Exists");
      }else{
        setUserNameValid("");
      }
    }
  };

  const checkUserNameValid = (e) => {
    let string = e.target.value;
    setUserName(string);
  };
  const checkPasswordValid = (e) => {
    let string = e.target.value;
    setpass(string);
  };
  const checkConfirmPassword = (e) => {
    setPassword(e.target.value);
  };
  const uploadImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataURL = event.target.result;
        const fileType = file.type;
        if (fileType === "image/jpeg" || fileType === "image/jpg") {
          setImg(dataURL);
          setImgValid("");
        } else {
          setImgValid("File is not a JPEG or JPG image.");
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const checkFirstValid = (e) => {
    setFirst(e.target.value);
  };
  const checkLasttValid = (e) => {
    setLast(e.target.value);
  };
  const checkEmailValid = (e) => {
    setEmail(e.target.value);
  };
  const checkBirthDateValid = (e) => {
    setBirthDate(e.target.value);
  };
  const checkPhoneValid = (e) => {
    setPhone(e.target.value);
  };
  const checkStreetValid = (e) => {
    setStreet(e.target.value);
  };
  const checkCityValid = (e) =>{
    setCity(e);
  }
  return (
    <div className="reg-panel">
      <h1>Register</h1>
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
              <input name="password" type="password" onChange={checkPasswordValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{confirmValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input name="cPassword" type="password" onChange={checkConfirmPassword}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{imgValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Profile Picture:</td>
            <td>
              <input type="file" onChange={uploadImg}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{firstValid}</h3>
            </td>
          </tr>
          <tr>
            <td>First Name:</td>
            <td>
              <input onChange={checkFirstValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{lastValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input onChange={checkLasttValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{emailValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Mail Adress:</td>
            <td>
              <input onChange={checkEmailValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{birthDateValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Birth Date:</td>
            <td>
              <input type="date" onChange={checkBirthDateValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3></h3>
            </td>
          </tr>
          <tr>
            <td>City:</td>
            <td>
              <CityAutocomplete city1={checkCityValid}></CityAutocomplete>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{streetValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Street:</td>
            <td>
              <input onChange={checkStreetValid}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>{phoneValid}</h3>
            </td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>
              <input onChange={checkPhoneValid}></input>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={registerUser}>Send</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
