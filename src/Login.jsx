import React, { useState } from 'react'
import { Post, post } from './Hooks/PostClient';
import { LoginService } from './Services/LoginService';

const Login = () => {
    
    const [formulario, setFormulario] = useState({
        userName: "",
        userPassword: "",
        userLanguage: 1,
        userIpAddress: "::1"
      });      

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify(formulario);  
        const loginResult = LoginService(data);      
        console.log(loginResult);
    }    

  return (
    <>
        <form>
          <input type="text" name="userName" placeholder='Usuario' value={formulario.userName} onChange={handleChange}></input>
          <input type="password" name="userPassword" placeholder='Password' value={formulario.userPassword} onChange={handleChange}></input>

          <input type="button" value="Ver Estados" 
          onClick={() => {
              console.log(formulario);
          }} />
          <input type="submit" onClick={handleSubmit}></input>
        </form>
    </>
  )
}

export default Login