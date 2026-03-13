import React from "react";

function Signup({switchPage}){
    return (
        <div className="auth-card">
            <h2 className="logo">MiTRAA</h2>
            <h3>SignUp</h3>
            <p className="subtitle">
                Sign up to apply for opportunities and grow your career
            </p>
            <input type="text" placeholder="Enter full name" />
            <input type="email" placeholder="Enter Email Address" />

            <div className="mobile-input">
                <span>+91</span>
                <input type="text" placeholder="Mobile" />
            </div>
            <input type="Password" placeholder="Enter Password"/>
            <button className="primary-btn"> Signup</button>
            <p className="switch">
                Already have an account ? <span onClick={switchPage}>Signin</span>
            </p>
        </div>
    );
}
export default Signup;