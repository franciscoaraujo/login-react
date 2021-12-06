import React, { useState, useMemo } from "react"
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/v1/CMO/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}
//Resolvendo 'The `style` prop expects a mapping from style properties to values, not a string' no css inline
//no style  <div className="login100-form-title" style={{background: styles.background}}>
const styles = {
    background: "url(images/bg-01.jpg)",
};


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({username,password});
        setToken(token);
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form-title" style={{ background: styles.background }}>
                        <span className="login100-form-title-1">
                            Login
                        </span>
                    </div>

                    <form className="login100-form validate-form" onSubmit={handleSubmit}>
                        <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                            <span className="label-input100">Username</span>
                            <input className="input100" type="text" name="username" 
                                        placeholder="Enter username" onChange={e => setUserName(e.target.value)} />

                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                            <span className="label-input100">Password</span>
                            <input className="input100" type="password" name="pass" 
                                    placeholder="Enter password" onChange={e => setPassword(e.target.value)} />

                            <span className="focus-input100"></span>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}