//login component for loggin in the user

import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./login.css"


const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3002/register", user)
        .then(res => {
            console.log(res);
        })
    }
    return (
        <div className="login">
           <h1>Login</h1>
           <input type = "text" name = "email" value = {user.email} onChange= {handleChange} placeholder="Enter your Email"/>
           <input type= "password" name = "password" value = {user.password} onChange= {handleChange} placeholder="Enter your Password"/>
           <div className="button" onClick={login}>
               Login
           </div>
           <div>OR
           </div>
           <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}

export default Login;
