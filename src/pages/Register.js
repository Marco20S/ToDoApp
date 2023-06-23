import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Register({add, user, addUser}) {

    const navigate = useNavigate();

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [index, setIndex] = useState("")
    const { item, setItem } = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const temp = { name: name, username: username, mail: mail, password: password }
        addUser(temp)
        setIndex(index + 1)
        localStorage.getItem("HandleSubmit Info", index + " " + name + " " + username + " " + mail, + " " + password )
        navigate('/login')
    }


    return (


        <>
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Registration Page</h1>

                <h4>Please enter the following details</h4>

                <div><input type="text" placeholder="Name" name="Name" onChange={(e) =>  setName(e.target.value)}/></div>
                <div><input type="text" placeholder="Username" name="Username" onChange={(e) => setUsername(e.target.value)}/></div>
                <div><input type="email" placeholder="e-mail" name="mail"onChange={(e) => setMail(e.target.value)} /></div>
                <div><input type="password" placeholder="password" name="password"onChange={(e) => setPassword(e.target.value)} /></div>

                <button type="submit">Register</button>

            </form>


        </>

    )
}