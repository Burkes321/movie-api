import React from 'react';
import { Link } from 'react-router-dom'; 

const Default = () => {
    return (
        <h1>
            <Link to="/login">Log in</Link>
        </h1>
    )
}

export default Default;