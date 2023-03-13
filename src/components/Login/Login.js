import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login =()=>
{
    const navigate = useNavigate();
    return(
        <>
            <div className="boxcolor">
                <div className="loginbox">
                    <h2 className="logologin">Login</h2>
                    <h6 className="addmember">Not a member yet? <button className="addsignup" onClick={()=> navigate('/signup')}>Sign up!</button></h6>
                    <h6 className="username"><i class="fa-solid fa-user"></i> Username or Email</h6><input className="username-input" type="text" name="name"></input>
                    <h6 className="password"><i class="fa-solid fa-lock"></i> Password</h6><input className="password-input" type="text" name="name"></input>
                    <button className="forgotpassword">Forgot Password?</button>
                    <button  className="loginaccount">Login <i class="fa-solid fa-check"></i></button>
                   
                </div>

                
            </div>
        </>
    )
}
export default Login;