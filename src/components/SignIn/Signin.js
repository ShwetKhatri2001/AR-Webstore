import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
const SignIn = () => {
    const [ error,setError ] = useState('')
    const [ signInDetails,setSignInDetails ] = useState({
        email:'',
        password:'',
    })

    const handleOnchange = (e) => {
        setSignInDetails({
            ...signInDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(signInDetails.email === '' || signInDetails.password === '' ){
            setError('please fill in all the required field')
            return
        }

  
        console.log(signInDetails)
        setSignInDetails({
            email: '',
            password:'',
        })
        setError('')
        

    }

  return (
    <main className="main-sign_in_container">
        <form onSubmit={handleSubmit} className="sign-in-container">
        <p className="error-paragraph">{error !== '' ? `Error: ${error}` : null}</p>
        <h3>Sign in</h3>
           
            <div className="input-div">
            <label htmlFor="email">
                Email
            </label>
            <input name="email" id="email" type="email"
            placeholder="Enter you email" 
            onChange={handleOnchange}
            value={signInDetails.email}
            />
            </div>
            <div className="input-div">
            <label htmlFor="password">
                password
            </label>
            <input name="password" id="password" type="password"
            placeholder="Enter your password"
            onChange={handleOnchange}
            value={signInDetails.password}
            />
            <Link to={'#'} className="forgot-pass">forgot password?</Link>
            </div>
            <button className="sign-in-button">
                Sign in
            </button>
            <p className="sign-in-redirect-p">Don't have an account? <Link to="/sign-up">Sign up</Link></p>
    </form>
    </main>
    

  );
};

export default SignIn;