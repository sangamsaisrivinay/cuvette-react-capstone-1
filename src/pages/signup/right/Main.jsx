import React, {useState} from "react";
import './style.css';
import { Link} from "react-router-dom";

const Main = () => {

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [shareData, setShareData] = useState(false);

  //flages
  const [nameFlag, setNameFlag] = useState(false);
  const [userNameFlag, setUserNameFlag] = useState(false);
  const [emailFlag, setEmailFlag] = useState(false);
  const [mobileFlag, setMobileFlag] = useState(false);

//validations
//name rules
//lenght should be between 2-30 characters
//only alphabets and spaces are allowed
  const validateName=(e)=>{
    setName(e.target.value);
    const regex = /^[a-zA-Z ]{2,30}$/;
    const isValid = regex.test(e.target.value);
    setNameFlag(isValid);
  }

//username rules
//lenght should be between 8-15 characters
//numbers, alphabets, special symbols are allowed
  const validateUserName=(e)=>{
    setUserName(e.target.value);
    const regex = /^[\w!@#$%^&*()\-+=<>?/,.|[\]{}'"`~:;0-9]{8,15}$/;
    const isValid = regex.test(e.target.value);
    setUserNameFlag(isValid);
  }

//email rules
//numbers, alphabets, special symbols are allowed

  const validateEmail=(e)=>{
    setEmail(e.target.value);
    const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = regex.test(e.target.value);
    setEmailFlag(isValid);
  }

//mobile rules
//10 digit mobile number
//no spaces alphabet or special symbols are allowed
  const validateMobile=(e)=>{
    setMobile(e.target.value);
    const regex = /^[0-9]{10}$/;
    const isValid = regex.test(e.target.value);
    setMobileFlag(isValid);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = {name, userName, email, mobile, shareData };
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
  }

  //styles
  const validFieldStyle= {
    border: "1px solid #72DB73"
  }

  const invalidFieldStyle= {
    border: "1px solid red"
  }

  const errorFieldStyle ={
    color: "red",
    fontSize: "0.7rem",
    textAlign: "center",
  }

  

  return (
    <form className="main-container sub-container" method="POST" onSubmit={handleSubmit}>
      {/* name */}
      
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={validateName}
        value={name}
        style={nameFlag ? validFieldStyle : invalidFieldStyle}
      />
      {nameFlag ? null : <p style={errorFieldStyle}>Name should be 2-30 characters long<br/>Only alphabets and spaces are allowed</p>}
      
      {/* username */}
      <input 
      type="text" 
      name="username" 
      placeholder="User name" 
      value={userName}
      onChange={validateUserName}
      style={userNameFlag?validFieldStyle:invalidFieldStyle}
      />
      {userNameFlag ? null : <p style={errorFieldStyle}>User name should be 8-15 characters long <br/>Spaces not allowed</p>}

      {/* email  */}
      <input
      type="text"
      name="email"
      placeholder="Email"
      value={email}
      onChange={validateEmail} 
      style={emailFlag?validFieldStyle:invalidFieldStyle}/>
      {emailFlag ? null : <p style={errorFieldStyle}>Email is not valid</p>}

      {/* mobile  */}
      <input
      type="text"
      name="mobile"
      placeholder="Mobile number"
      value={mobile}
      onChange={validateMobile} 
      style={mobileFlag?validFieldStyle:invalidFieldStyle}/>
      {mobileFlag ? null : <p style={errorFieldStyle}>Mobile number should have only 10 digits <br/>No letters and special symbols (including spaces are not allowed)</p>}
{/* share data */}
      <div>
        <input type="checkbox" name="name" checked={shareData} onChange={e=>setShareData(e.target.checked)}/>
        <label style={{ color: "#7C7C7C", fontSize: '0.7rem' }}>
          {" "}
          Share my registration data with Superapp <span style={{color:'gold'}}>(optional)</span>
        </label>
      </div>
      {   
        nameFlag && userNameFlag && emailFlag && mobileFlag &&(<button type="submit">
          <Link to='/categories' style={{textDecoration: 'none',color: '#fff', width:'100%', height:'100%'}}>sign up</Link>   
        </button>)
      }
    </form>
  );
};

export default Main;
