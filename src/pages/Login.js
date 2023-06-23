import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function Login({ user, login }) {

    const navigate = useNavigate();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const loginHandler = (e) => {
        e.preventDefault()

        const result = login(username, password)
        console.log(result)

        if(result === true ) {
            navigate('/')
        
        }else{
          document.getElementById('message').style.display = "block" 
          document.getElementById('message').style.color = "red" 
        }
    }

    const registerHandler = () => {
        navigate('/register')
    }

    return (

        <>
            <h1>Login</h1>

            <form className="login-form">
                <div> <input type="text" placeholder="Username" name="Username" onChange={(e) => setUsername(e.target.value)} /> </div>
                <br/>
                <div> <input type="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} /> </div>
                <button type="submit" onClick={loginHandler}>Login</button>
                <p id="message" hidden className="message" >user entered the incorrect username or password </p>
                <p>------------ OR --------------</p>
                <button id="register" type="submit" onClick={registerHandler} >Register</button>

            </form>


        </>

    )
}