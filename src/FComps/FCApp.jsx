import React, { useState, useEffect } from "react";
import FCLogin from "./FCLogin";
import FCRegister from "./FCRegister";
import FCProfile from "./FCProfile";
import FCEditDetails from "./FCEditDetails";
import FCSystemAdmin from "./FCSystemAdmin";

export default function FCApp() {
  const [users, setUsers] = useState([]);
  const [userSent, setUserSent] = useState([]);
  const [whenToShow, setWhenToShow] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const tmpUsers = JSON.parse(localStorage.getItem("users"));
    if (tmpUsers != null) {
      setUsers(tmpUsers);
    } else {
      setUsers([]);
    }
  };

  const registerUser = (e) => {
    for (let i in users) {
      if (e.name === users[i].name) {
        return false;
      }
    }

    const tmpUsers = [...users, e];
    setUsers(tmpUsers);
    localStorage.setItem("users", JSON.stringify(tmpUsers));

    return true;
  };

  const loginUser = (e) => {
    for (let i in users) {
      if (users[i].name === e.name && users[i].password === e.password) {
        sessionStorage.setItem("user", JSON.stringify(users[i]));
        setUserSent(users[i]);
        return true;
      }
    }
    return false;
  };

  const logOutUser = () => {
    setWhenToShow([]);
    setUserSent([]);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("aUser");
  };

  const loginAdmin = () => {
    const adminUser = { name: "admin", password: "ad12343211ad" };
    sessionStorage.setItem("aUser", JSON.stringify(adminUser));
    setUserSent(adminUser);
  };

  const update = (e) => {
    const logMail = JSON.parse(sessionStorage.getItem("user")).email;
    const usName = JSON.parse(sessionStorage.getItem("user")).name;

    for (let i in users) {
      if (users[i].name === e.name) {
        return false;
      }

      if (users[i].email === logMail) {
        e.email = logMail;
        users[i] = e;
        localStorage.setItem("users", JSON.stringify(users));
        setUserSent(e);
        return true;
      }
    }
    return false;
  };

  const showUpdate = (e) => {
    setWhenToShow(["tmp"]);
  };

  const closeUpdate = () => {
    setWhenToShow([]);
  };

  const editFromAdmin = (e) => {
    setWhenToShow(["sd"]);
  };

  const [adminU,setAdminUP] = useState([]);
  const adminUpdate = () => {
    setAdminUP(['aaa']);
  }

  const renderMainComponent = () => {
    if (sessionStorage.getItem("aUser")) {
      return <FCSystemAdmin out={logOutUser} edit={editFromAdmin} c={adminU}/>;
    } else {
      return <FCProfile u={userSent} out={logOutUser} up={showUpdate} />;
    }
  };

  return (
    <>
      <div className="rowC lastRow"><h1>HW3</h1></div>
      <div className="rowC">
        <FCLogin log={loginUser} logA={loginAdmin} />
        <FCRegister reg={registerUser} />
        {renderMainComponent()}
      </div>
      <div className="rowC lastRow">
        <FCEditDetails userUpdate={update} showP={whenToShow} clos={closeUpdate} adminUp={adminUpdate}/>
      </div>
    </>
  );
}
