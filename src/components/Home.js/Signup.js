import React from "react";
import "./Signup.css";

const Signup =()=>
{
    return(
        <>
        <div>
            <div className="signupbox">
                <h2 className="logo-signup">Sign up</h2><br/>
                <input className="signup-input"  type="text" placeholder="&#xf007; First Name"></input><br/><br/>
                <input className="signup-input" type="text"  placeholder="&#xf007; Last Name"></input><br/><br/>
                <input className="signup-input" type="text"  placeholder="&#xf095; Phone Number"></input><br/><br/>
                <input className="signup-input" type="text"  placeholder="&#xf0e0; Email"></input><br/><br/>
                <input className="signup-input" type="text"  placeholder="&#xf023; Password"></input><br/><br/>
                <input className="signup-input" type="text"  placeholder="&#xf023; Confirm Password"></input><br/><br/>
                <button className="signup-button">SIGN UP</button>
                <h6 className="or">or</h6>
                    <button className="fab fa-facebook-f facebookicon"></button>
                    <button className="fa-brands fa-google googleicon"></button>
            </div>
        </div>
        
        </>
    )
}
export default Signup;