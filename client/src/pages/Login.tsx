import './Login.scss';

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../contexts/useAuth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext()

    const onSubmit = () => {
        // TODO: Input validation

        const loginResult = login(username, password)
        console.log("🚀 ~ file: Login.tsx ~ line 18 ~ onSubmit ~ loginResult", loginResult)
        // TODO: invoke and query loginResult to then determine whether to navigate to another page
        // or to display an error message
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
            <button onClick={() => onSubmit()}>Login</button>
            <div style={{marginTop: '20px'}}><Link to='/search'>Search page</Link></div>
        </div>
    )
}

export default Login;