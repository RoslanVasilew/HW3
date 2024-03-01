import React, { useState, createContext } from 'react'

export default function FCProfile(props) {
  const us = props.u;
  const logOutUser= (e)=>{
      props.out(us.email);
  }
  const showUpdate = () =>{
    props.up();
  }
  if(us.length!=0){
  return (
    <div className="profile-panel">
      <h1>Profile Page</h1>
      <div className="profile-card">
    <div className="image">
      <img  src={us.img} className="profile-pic"></img>
    </div>
   
    <h2>{us.first} {us.last}</h2>
    <h2>{us.street}, {us.city}</h2>
    <h2>{us.birthDate}</h2>
    <div className="buttons" style={{border:"none"}} >
      <a href="#" className="btn" onClick={showUpdate}>עדכון פרטים</a>
      <a href="https://maplestory.nexon.net/" className="btn">למשחק</a>
      <a href="#" className="btn" onClick={logOutUser}>התנתק</a>
    </div>
  </div>
    </div>
  )
  }else{
    return(
      <div>
        <h1>Connect Please</h1>
      </div>
    )
  }
  
 
}
