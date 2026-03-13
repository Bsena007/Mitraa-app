import React from "react";
import AI_2 from '../../assets/AI-2.jpg'


function SignIn({switchPage}){
    return (
        <div className="auth-card">
            <img src="../../assets/AI-2.jpg" alt="No image" className="bird"/>
            <h2 className="logo">MiTRAA</h2>
            <h3>SignIn</h3>
            <p className="subtitle">Shape your Career with Us</p>
            <input type="email" placeholder="Enter Your Email Address" />
            <input type="password" placeholder="Enter Your Password" />
            <div className="forgot">Forget Password?</div>
            <button className="primary-btn">Sign In</button>
            <p>Create an account ?<span onClick={switchPage}>Signin</span></p>
        </div>
    )
}
export default SignIn;