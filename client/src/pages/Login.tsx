import React, { useState } from 'react'; 
import Axios from 'axios';
import './Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post("http://localhost:9000/login", {username: username, password: password})
        .then((response) => {
            console.log(response);
        })
    }

    return (    
        <div className="login">
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" placeholder="username" onChange={(e) => {
                setUsername(e.target.value)
                }}/>
            <label>Password</label>
            <input type="text" placeholder="password" onChange={(e) => {
                setPassword(e.target.value)
                }}/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;